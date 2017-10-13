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


    /*
    *   This method gets the count of new Orders
    */
    getNewOrderCount() : Promise<any> {
        let url = this.serviceUrl + "/getNewOrdersCount";

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
    *   This method gets income till date
    */
    getIncomeThisYear() : Promise<any> {
        let url = this.serviceUrl + "/getIncomeThisYear";

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
    *   This method adds new order
    */
    addNewOrder(newOrder : any) : Promise<any> {
        let url = this.serviceUrl + "/addOrder";

        return this.http
            .post(url, JSON.stringify(newOrder), {headers: this.headers,withCredentials: true})
            .toPromise()
            .then((res) => {
                return res.json().data;
            })
            .catch((err) => {
                this.handleError(err);
            })
    }


    /*
    *   This method populates details for the selected order
    */
    getOrderDetails(orderId : any) : Promise<any> {
        let url = this.serviceUrl + "/getOrderDetails/"+orderId;

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
    *   This method updates selected order details
    */
    updateOrder(orderdetails : any) : Promise<any> {
        let url = this.serviceUrl + '/updateOrder';

        return this.http
            .post(url, JSON.stringify(orderdetails), {headers: this.headers,withCredentials: true})
            .toPromise()
            .then((res) => {
                return res.json().data;
            })
            .catch((err) => {
                this.handleError(err);
            })
    }

}