import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
    selector : 'app-header',
    templateUrl : './app/modules/navigation/header/app.header.component.html',
    styleUrls : ['./app/modules/navigation/header/app.header.component.css']
})

export class AppHeaderComponent implements OnInit{
    private menuHeader : boolean = true;
    private selectedPage : string;

    constructor(private router : Router,
                private location : Location) {}

    private toggleMenuHeader() : void {
        if(this.menuHeader === false) {
            this.menuHeader = true;
        }else if(this.menuHeader === true) {
            this.menuHeader = false;
        }
    }

    navigate(pageName : string) : void {
        let navigatedPage = "/" + pageName;
        this.selectedPage = pageName;
        this.router.navigate([navigatedPage]);
    }

    ngOnInit() : void {
        this.selectedPage = this.location.path().split("/")[1];
    }
}