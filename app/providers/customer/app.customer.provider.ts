import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {URL} from '../../util/app.service.url';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

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
    *   This method retrieves only customers list - for admin user
    */
    getOnlyCustomers() : Promise<any> {
        let url = this.serviceUrl + "/getOnlyCustomers";

        return this.http
            .get(url ,{headers : this.headers, withCredentials :true})
            .toPromise()
            .then(res => {
                return res.json().data;
            })
            .catch(err => {
                this.handleError(err);
            });
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

    /*
    *   This method retrieves details for the selected customer
    */
    getCustomerDetails(customerId : string) : Promise<any> {
        let url = this.serviceUrl + "/getCustomerDetails/"+ customerId;

        return this.http
            .get(url, {headers : this.headers, withCredentials: true})
            .toPromise()
            .then((res) => {
                return res.json().data;
            })
            .catch((err) => {
                this.handleError(err);
            });

    }

    /*
    *   This method updates the customer details for selected customer
    */
    updateCustomer(updatedCustomer : any) : Promise<any> {
        let url = this.serviceUrl + "/updateCustomer";

        return this.http
            .post(url, JSON.stringify(updatedCustomer), {headers : this.headers, withCredentials : true})
            .toPromise()
            .then((res) => {
                return res.json().data;
            })
            .catch((err) => {
                this.handleError(err);
            });
    }

    /*
    *   This method applies filter on customer name
    */
    applyTextFilter(filterType : string, filterValue : Observable<string>) {

        return filterValue.debounceTime(400)
            .distinctUntilChanged()
            .switchMap(customer => {
                if(customer !== ''){
                    let url = this.serviceUrl + "/customerNameFilter/"+filterType+"/"+customer;

                    return this.http
                        .get(url, {headers : this.headers, withCredentials : true})
                        .map(res => {
                            return res.json().data;
                        })
                }else {
                    let url = this.serviceUrl + "/getOnlyCustomers";

                    return this.http
                        .get(url ,{headers : this.headers, withCredentials :true})
                        .toPromise()
                        .then(res => {
                            return res.json().data;
                        })
                        .catch(err => {
                            this.handleError(err);
                        });
                }
            });
    }

    /*
    *   This method applies filter on state - advanced filter
    */
    applyFilter(filterType : string, filterValue : string) : Promise<any> {
        let url = this.serviceUrl + "/applyFilter";

        let data = {'filterType' : filterType, 'filterValue' : filterValue};

        return this.http
            .post(url, JSON.stringify(data), {headers : this.headers, withCredentials : true})
            .toPromise()
            .then(res => {
                return res.json().data;
            })
            .catch(err => {
                this.handleError(err);
            });
    }
}
