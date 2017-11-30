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

export class ProductProvider {

    constructor(private http : Http){}

    private headers = new Headers({'Content-Type': 'application/json'});

    private serviceUrl = URL + "/product";

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    /*
    *   This method retrieves all the products
    */
    getAllProducts() : Promise<any> {
        let url = this.serviceUrl + "/getAllProducts";

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
    *   This method gets total count of products
    */
    getTotalProductsCount() : Promise<any> {
        let url = this.serviceUrl + "/getProductsCount";

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
    *   This method filter applied on the Product Name
    */
    productNameFilter(filterValue : Observable<string>) {

        return filterValue.debounceTime(400)
            .distinctUntilChanged()
            .switchMap(product => {
                if(product !== ''){
                    let url = this.serviceUrl + "/productNameFilter/" + product;

                    return this.http
                        .get(url, {headers: this.headers,withCredentials: true})
                        .map(res => {
                            return res.json().data;
                        });
                }else {
                    let url = this.serviceUrl + "/applyFilter";
                    let data = {'filters' : [{'type' : 'productName', 'value' : '' }]};

                    return this.http
                        .post(url, JSON.stringify(data), {headers: this.headers,withCredentials: true})
                        .map(res => {
                            return res.json().data;
                        })
                }
            })
    }

    /*
    *   This method adds new product
    */
    addProduct(newProduct : any) : Promise<any> {
        let url = this.serviceUrl + "/addProduct";

        return this.http
            .post(url, JSON.stringify(newProduct), {headers : this.headers, withCredentials : true})
            .toPromise()
            .then((res) => {
                return res.json().data;
            })
            .catch((err) => {
                this.handleError(err);
            });
    }

    /*
    *   This method retrieves images list for the selected product
    */
    getImagesList(productId : any) : Promise<any> {
        let url = this.serviceUrl + "/getImagesList/"+productId;

        return this.http
            .get(url, {headers : this.headers, withCredentials : true})
            .toPromise()
            .then((res) => {
                return res.json();
            })
            .catch((err) => {
                this.handleError(err);
            });
    }
}