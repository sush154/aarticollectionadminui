import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {OrderProvider} from '../../../providers/order/app.order.provider';
@Component({
    selector : 'dashboard-order-list',
    templateUrl : './app/pages/dashboard/ordersList/app.dashboard.pages.ordersList.component.html',
    styleUrls : ['./app/pages/dashboard/ordersList/app.dashboard.pages.ordersList.component.css'],
    providers : [OrderProvider]
})

export class DashboardOrdersListComponent implements OnInit{

    ordersList : any;

    constructor(private orderProvider : OrderProvider,
                private router : Router){}

    private populateAllOrders() : void {
        this.orderProvider.getAllOrders().then((res) => {
            if(res.status === 200){
                this.ordersList = res.order;
            }else if(res.status === 401){
                 this.router.navigate(['/login']);
             }
        });
    }

    private navigateToOrderDetails(orderId : any) : void {
        this.router.navigate(['/orders', orderId]);
    }

    ngOnInit() : void {
        this.populateAllOrders();
    }
}