import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {URL} from '../../util/app.service.url';


@Injectable()

export class CourierProvider {
    constructor(private http : Http){}

    private headers = new Headers({'Content-Type': 'application/json'});

    private serviceUrl = URL + "/courier";

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }


    /*
    *   This method populates couriers list
    */
    getCouriersList() : Promise<any> {
        let url = this.serviceUrl + '/getAllCouriers';

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
    *   This method adds new courier
    */
    addNewCourier(newCourier : any) : Promise<any> {
        let url = this.serviceUrl + "/addCourier";

        return this.http
            .post(url, JSON.stringify(newCourier), {headers: this.headers,withCredentials: true})
            .toPromise()
            .then((res) => {
                return res.json().data;
            })
            .catch((err) => {
                this.handleError(err);
            })
    }
}