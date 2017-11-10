import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ToasterService} from 'angular2-toaster';
import {STATES} from '../../common/app.states';

import {RegisterProvider} from '../../providers/register/app.register.provider';
import {LoginProvider} from '../../providers/login/app.login.provider';

@Component ({
    selector : 'app-login',
    templateUrl : './app/pages/login/app.login.component.html',
    styleUrls : ['./app/pages/login/app.login.component.css'],
    providers : [RegisterProvider, LoginProvider]
})

export class LoginPageComponent implements OnInit{

      private loginObj : any = {};
      private loginFormFlag : boolean = true;
      private forgetPasswordFlag : boolean = false;
      private registerFlag : boolean = false;
      private statesList : any = STATES;
      private selectedState : boolean = true;
      private registrationSuccess : boolean = false;

      private newUser : any = {};

      constructor(private router : Router,
                  private toastrService : ToasterService,
                  private registerProvider : RegisterProvider,
                  private loginProvider : LoginProvider){

      }


      private toggleForms(flag : any) : void {
        if(flag === 'register'){
          this.loginFormFlag = false;
          this.forgetPasswordFlag = false;
          this.registrationSuccess = false;
          this.registerFlag = true;
        }else if(flag === 'login'){
          this.forgetPasswordFlag = false;
          this.registerFlag = false;
          this.registrationSuccess = false;
          this.loginFormFlag = true;
        }else if(flag === 'forgetPassword'){
          this.loginFormFlag = false;
          this.registerFlag = false;
          this.registrationSuccess = false;
          this.forgetPasswordFlag = true;
        }else if(flag === 'registrationSuccess'){
          this.loginFormFlag = false;
          this.registerFlag = false;
          this.forgetPasswordFlag = false;
          this.registrationSuccess = true;
        }
      }

      private stateSelected(stateVal : any) : void {
        if(stateVal === '0'){
          this.selectedState = true;
        }else {
          this.selectedState = false;
        }
      }

      private register(registerObj : any) : void {
        registerObj.role = "admin";
        registerObj.createdFrom = "admin-portal";
        this.registerProvider.register(registerObj).then((res) => {
          if(res.status === 200){
            this.toastrService.pop('success', 'Registered !', 'User has been successfully registered. Please go to Login page to sign in the application');

          }else {
            this.toastrService.pop('error', 'Server Error', 'We encountered server error. Please try later !');

          }
        })
      }

      private login(loginObj : any) : void {
        loginObj.role = 'admin';
        loginObj.loginFrom = 'admin-portal'
        this.loginProvider.login(loginObj).then((res) => {
            if(res.status === 200){
                this.router.navigate(['/dashboard']);
            }else if(res.status === 401){
                this.toastrService.pop('error', 'Invalid Credentials', 'Email Address or Password entered are incorrect. Please enter correct credentials and try again !');
            }else if(res.status === 202){
                this.toastrService.pop('error', 'Unauthorised Access !', 'You are not authorised to access this application !');
            }else {
                this.toastrService.pop('error', 'Server Error', 'We encountered server error. Please try later !');
            }
        });
      }

      ngOnInit() : void {
        this.newUser.state = "0";
        //this.toggleForms('registrationSuccess');
      }
}
