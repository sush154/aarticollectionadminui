import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {URL} from '../../util/app.service.url';

@Injectable()


export class AuthProvider{
    constructor(private http : Http){}

    private headers = new Headers({'Content-Type': 'application/json'});

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    /*
    *   This method check for authenticated user on page load
    */
    authUser() : Promise<any> {
        let url = URL + "/user/auth";

        return this.http
            .get(url, {headers: this.headers,withCredentials: true})
            .toPromise()
            .then((res) => {
                return res.json().data;
            })
            .catch((err) => {
                this.handleError(err);
            })
    }

}