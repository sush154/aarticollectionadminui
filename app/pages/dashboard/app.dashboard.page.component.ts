import {Component, OnInit} from '@angular/core';

import {OrderProvider} from '../../providers/order/app.order.provider';
import {SortOrderForChart} from '../../util/sort/orderChart/app.order.sort.chart';

@Component({
    selector : 'dashboard-page',
    templateUrl : './app/pages/dashboard/app.dashboard.page.component.html',
    styleUrls : ['./app/pages/dashboard/app.dashboard.page.component.css'],
    providers : [OrderProvider, SortOrderForChart]
})

export class AppDashboardPageComponent implements OnInit{

    options: Object;
    orders : any = [];
    totalOrdersCount : Number;
    currentMonthOrderCount : Number;
    currentMonthIncome : Number

    constructor(private orderProvider : OrderProvider,
                private sortOrderForChart : SortOrderForChart){}

    getOrderCountAndIncome() : void {
        this.orderProvider.getOrderCountAndIncome().then((res) => {
            if(res.status === 200){
                this.totalOrdersCount = res.data.totalCount;
                this.currentMonthOrderCount = res.data.currentMonthOrder;
                this.currentMonthIncome = res.data.currentMonthIncome;
            }
        });
    }

    populateChart() : void {

        this.orderProvider.getAllOrders().then((res) => {
            if(res.status === 200) {

                let sortedOrders = this.sortOrderForChart.sortOrderMonthly(res.order);

                for(let i=1; i < 13; i++){
                    if(sortedOrders[i]){
                        this.orders.push(sortedOrders[i]);
                    }else {
                        this.orders.push(0);
                    }
                }
                /* Populating options for Chart - Starts*/
                  this.options = {
                      title : { text : 'Orders' },
                      xAxis: {
                        title: {
                                  text: 'Month'
                              },
                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                      },
                      yAxis: {
                          title: {
                              text: 'Order in Volume'
                          }
                      },
                      tooltip : {
                        /*headerFormat : '<b>Order</b> <br />',
                        pointFormat : '{point.x} = {point.y}'*/
                        crosshairs : true,
                        shared : true,
                        pointFormat : 'Order = {point.y}'
                      },
                      responsive : {
                        rules : {
                          condition: {
                            minWidth: 1000
                          }
                        }
                      },
                      series: [{
                          name: 'Orders',
                          data: this.orders
                      }]
                  };
                /* Populating options for Chart - Ends */

            }
        });

    }

    ngOnInit() : void {
        this.populateChart();
        this.getOrderCountAndIncome();
    }

}