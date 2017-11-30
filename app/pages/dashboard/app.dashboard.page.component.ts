import {Component, OnInit} from '@angular/core';
import {ToasterService} from 'angular2-toaster';
import {OrderProvider} from '../../providers/order/app.order.provider';
import {ProductProvider} from '../../providers/product/app.product.provider';
import {SortOrderForChart} from '../../util/sort/orderChart/app.order.sort.chart';
import {Router} from '@angular/router';

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
    currentMonthIncome : Number;
    newOrdersCount : Number = 0;
    totalProductsCount : Number = 0;
    totalIncomeTillDate : Number = 0;
    private loading : boolean = false;

    constructor(private orderProvider : OrderProvider,
                private sortOrderForChart : SortOrderForChart,
                private productProvider : ProductProvider,
                private toastrService : ToasterService,
                private router : Router){}

    getOrderCountAndIncome() : void {
        this.orderProvider.getOrderCountAndIncome().then((res) => {
            if(res.status === 200){
                this.totalOrdersCount = res.data.totalCount;
                this.currentMonthOrderCount = res.data.currentMonthOrder;
                this.currentMonthIncome = res.data.currentMonthIncome;
            }else if(res.status === 401){
                this.router.navigate(['/login']);
            }
        });
    }

    getNewOrdersCount() : void {
        this.orderProvider.getNewOrderCount().then((res) => {
            if(res.status === 200){
                this.newOrdersCount = res.order;
            }else if(res.status === 401){
                this.router.navigate(['/login']);
            }else{
                this.toastrService.pop('error', 'Server Error', 'We encountered server error. Please try later !');
            }
        });
    }

    getTotalProductsCount() : void {
        this.productProvider.getTotalProductsCount().then((res) => {
            if(res.status === 200){
                this.totalProductsCount = res.product;
            }else if(res.status === 401){
                this.router.navigate(['/login']);
            }else {
                this.toastrService.pop('error', 'Server Error', 'We encountered server error. Please try later !');
            }
        });
    }

    getTotalIncomeThisYear() : void {
        this.orderProvider.getIncomeThisYear().then((res) => {
            if(res.status === 200) {
                this.totalIncomeTillDate = res.data.totalIncome;
            }else if(res.status === 401){
                this.router.navigate(['/login']);
            }else {
                this.toastrService.pop('error', 'Server Error', 'We encountered server error. Please try later !');
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

            }else if(res.status === 401){
                this.router.navigate(['/login']);
            }
        });

    }

    ngOnInit() : void {
        this.loading = true;
        this.populateChart();
        this.getOrderCountAndIncome();
        this.getNewOrdersCount();
        this.getTotalProductsCount();
        this.getTotalIncomeThisYear();
        this.loading = false;
    }

}