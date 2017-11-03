import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

import {AuthProvider} from '../providers/auth/app.auth.provider';

@Component ({
    selector : 'admin-collection',
    template : `<router-outlet></router-outlet>`,
    providers : [AuthProvider]
})

export class AppComponent implements OnInit{

    constructor(private router : Router,
                private location : Location,
                private authProvider : AuthProvider){}

    ngOnInit() : void {
        /* Authenticate and navigate accordingly*/
        this.authProvider.authUser().then((res) => {
            if(res.status === 401){
                this.router.navigate(['/login']);
            }else if(res.status === 200){
                this.router.navigate(['/dashboard']);
            }
        });
    }
}

