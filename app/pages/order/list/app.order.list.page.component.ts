import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {OrderProvider} from '../../../providers/order/app.order.provider';

@Component({
    selector : 'order-list-page',
    templateUrl : './app/pages/order/list/app.order.list.page.component.html',
    styleUrls : ['./app/pages/order/list/app.order.list.page.component.css'],
    providers : [OrderProvider]
})

export class OrderListPageComponent implements OnInit{

    ordersList : any;
    private loading : boolean = false;

    constructor(private orderProvider : OrderProvider,
                private router : Router){}

    populateOrdersList() : void {
        this.orderProvider.getAllOrders().then((res) => {
            if(res.status === 200) {
                this.ordersList = res.order;
            }
        })
    }

    private openOrderDetails(orderId : any) : void {
        this.router.navigate(['/orders', orderId]);
    }

    ngOnInit() : void {
        this.loading = true;
        this.populateOrdersList();
        this.loading = false;
    }
}