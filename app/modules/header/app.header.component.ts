import {Component, DoCheck} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
    selector : 'app-header',
    templateUrl : './app/modules/header/app.header.component.html',
    styleUrls : ['./app/modules/header/app.header.component.css']
})

export class AppHeaderComponent implements DoCheck{

    private menuHeader : boolean = true;
    private selectedPage : string;

    constructor(private router : Router,
                private location : Location){}


    navigate(pageName : string) : void {
        let navigatedPage = "/" + pageName;
        this.selectedPage = pageName;
        this.router.navigate([navigatedPage]);
    }

    ngDoCheck() : void {
        if(this.location.path().indexOf('dashboard') > -1){
            this.selectedPage ='dashboard';
        }else if(this.location.path().indexOf('products') > -1){
            this.selectedPage = 'products';
        }else if(this.location.path().indexOf('orders') > -1){
            this.selectedPage = 'orders';
        }
    }
}