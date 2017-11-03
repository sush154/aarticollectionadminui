import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ToasterService} from 'angular2-toaster';

import {AuthProvider} from '../../providers/auth/app.auth.provider';

@Component ({
    selector : 'app-login',
    templateUrl : './app/pages/login/app.login.component.html',
    styleUrls : ['./app/pages/login/app.login.component.css'],
    providers : [AuthProvider]
})

export class LoginPageComponent implements OnInit{

    private loginObj : any = {};
    private loginFormFlag : boolean = true;
    private forgetPasswordFlag : boolean = false;

    constructor(private router : Router,
                private toastrService : ToasterService,
                private authProvider : AuthProvider){}

    private login() : void {
        console.log(this.loginObj);
        this.router.navigate(['/dashboard']);
    }

    private toggleForms(actionName : string) : void {
        if(actionName === 'forgetPassword'){
            this.loginFormFlag = false;
            this.forgetPasswordFlag = true;
        }else if(actionName === 'login'){
            this.forgetPasswordFlag = false;
            this.loginFormFlag = true;
        }
    }


    ngOnInit() : void {

    }
}
