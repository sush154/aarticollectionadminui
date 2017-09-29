import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component ({
    selector : 'admin-collection',
    template : `<app-header></app-header>
        <div class="container p-t-50px">
            <router-outlet></router-outlet>
        </div>
    `
})

export class AppComponent implements OnInit{

    constructor(private router : Router){}

    ngOnInit() : void {
        this.router.navigate(['/dashboard']);
    }
}

