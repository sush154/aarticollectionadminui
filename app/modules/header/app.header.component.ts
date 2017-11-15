import {Component, DoCheck, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {ToasterService} from 'angular2-toaster';
import {LogoutProvider} from '../../providers/logout/app.logout.provider';

@Component({
    selector : 'app-header',
    templateUrl : './app/modules/header/app.header.component.html',
    styleUrls : ['./app/modules/header/app.header.component.css'],
    providers : [LogoutProvider]
})

export class AppHeaderComponent implements DoCheck, OnInit{

    private menuHeader : boolean = true;
    private selectedPage : string;
    private displayAdminsPage : boolean = false;

    constructor(private router : Router,
                private location : Location,
                private logoutProvider : LogoutProvider,
                private toastrService : ToasterService,){}


    private navigate(pageName : string) : void {
        let navigatedPage = "/" + pageName;
        this.selectedPage = pageName;
        this.router.navigate([navigatedPage]);
    }

    private logout() : void {
        this.logoutProvider.logout().then((res) => {
            if(res.status === 200){
                this.router.navigate(['/login']);
            }else {
                this.toastrService.pop('error', 'Server Error', 'We encountered server error. Please try later !');
            }
        })
    }

    ngDoCheck() : void {
        if(this.location.path().indexOf('dashboard') > -1){
            this.selectedPage ='dashboard';
        }else if(this.location.path().indexOf('products') > -1){
            this.selectedPage = 'products';
        }else if(this.location.path().indexOf('orders') > -1){
            this.selectedPage = 'orders';
        }else if(this.location.path().indexOf('customers') > -1){
            this.selectedPage = 'customers';
        }
    }

    ngOnInit() : void {
        let cookies = document.cookie.split(';');

        let userRole : string;

        for(let c of cookies){
            if(c.split('=')[0].trim() === 'userRole'){
                userRole = c.split('=')[1].trim();
            }
        }

        if(userRole === 'admin'){
            this.displayAdminsPage = true;
        }
    }
}