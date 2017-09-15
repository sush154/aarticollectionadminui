import {Component, OnInit} from '@angular/core';


@Component ({
    selector : 'app-dashboard',
    templateUrl : './app/modules/dashboard/app.dashboard.component.html',
    styleUrls : ['./app/modules/dashboard/app.dashboard.component.css']
})

export class AppDashboardComponent implements OnInit{

    options: Object;
    orders : any = [];

    constructor() {}

    ngOnInit() : void {

      this.orders = [12, 32, 106, 45, 89, 56, 34, 73, 12, 34, 34, 77];

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

}