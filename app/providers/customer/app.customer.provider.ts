import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {URL} from '../../util/app.service.url';


@Injectable()

export class AppCustomerProvider {

    private headers = new Headers({'Content-Type': 'application/json'});

    private serviceUrl = URL + "/customer";

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    constructor(private http : Http){}

    /*
    *   This method retrieves all the customer list
    */
    getAllCustomers() : Promise<any> {
        let url = this.serviceUrl + "/getAllCustomers";


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

    /*
    *   This method creates new User in Customer Document
    *   Note : This method does not update User Document which is used for login
    */
    addCustomer(newCustomer : any) : Promise<any> {

        let url = this.serviceUrl + "/addCustomer";

        return this.http
            .post(url, JSON.stringify(newCustomer), {headers: this.headers,withCredentials: true})
            .toPromise()
            .then((res) => {
                return res.json().data;
            })
            .catch((err) => {
                this.handleError(err);
            })
    }
}
