import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component ({
    selector : 'admin-collection',
    template : `<app-header></app-header>
        <div class="container p-t-50px"><router-outlet></router-outlet></div>
    `
})

export class AppComponent implements OnInit{

    constructor(private router : Router){}

    ngOnInit() : void {
        this.router.navigate(['/dashboard']);
    }
}

/*<div class="container-fluid">
                      <div class="row">
                          <div class="col-3">
                              <div class="d-inline-block" style="height: 100%"><app-sidenav></app-sidenav></div>
                          </div>
                          <div class="col-9">
                              <div class="d-inline-block align-top"><router-outlet></router-outlet></div>
                          </div>
                      </div>
                  </div>*/