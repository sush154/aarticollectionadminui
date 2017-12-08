import {Component} from '@angular/core';
import {Router} from '@angular/router';


@Component({
    selector : 'page-not-found',
    templateUrl : './app/pages/error/app.pageNotFound.page.component.html',
    styleUrls : ['./app/pages/error/app.pageNotFound.page.component.css']
})

export class PageNotFoundComponent {

    constructor(private router : Router){}

    private goBack() : void {
        this.router.navigate(['/dashboard']);
    }
}