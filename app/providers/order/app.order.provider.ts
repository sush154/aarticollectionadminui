import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {URL} from '../../util/app.service.url';

@Injectable()

export class OrderProvider {
    constructor(private http : Http){}

    private headers = new Headers({'Content-Type': 'application/json'});

    private serviceUrl = URL + "/order";

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    /*
    *   This method retrieves all the orders irrespective of the user
    */
    getAllOrders() : Promise<any> {
        let url = this.serviceUrl + "/getAllOrders";

        return this.http
            .get(url, {headers: this.headers,withCredentials: true})
            .toPromise()
            .then((res) => {
                return res.json().data;
            })
            .catch((err) => {
                this.handleError(err);
            });
    }

    /*
    *   This method retrieves total orders count, current month order count and current month income
    */
    getOrderCountAndIncome() : Promise<any> {
        let url = this.serviceUrl + "/getOrderCountAndIncome";

        return this.http
            .get(url, {headers: this.headers,withCredentials: true})
            .toPromise()
            .then((res) => {
                return res.json().data;
            })
            .catch((err) => {
                this.handleError(err);
            });
    }
}