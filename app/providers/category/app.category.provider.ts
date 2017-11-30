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

export class CategoryProvider {

    constructor(private http : Http){}

    private headers = new Headers({'Content-Type': 'application/json'});

    private serviceUrl = URL + "/category";

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }


    /*
    *   This method gets all categories
    *   These categories are child categories of dress material and saree - being parent categories
    */
    getAllCategories() : Promise<any> {
        let url = this.serviceUrl + "/getAllCategories";

        return this.http
            .get(url, {headers : this.headers, withCredentials : true})
            .toPromise()
            .then((res) => {
                return res.json().data;
            })
            .catch((err) => {
                this.handleError(err);
            })
    }

    /*
    *   This method adds new Category
    */
    addNewCategory(newCategory : any) : Promise<any> {
        let url = this.serviceUrl + "/addCategory";

        return this.http
            .post(url, JSON.stringify(newCategory), {headers : this.headers, withCredentials : true})
            .toPromise()
            .then((res) => {
               return res.json().data;
            })
            .catch((err) => {
                this.handleError(err);
            });
    }

    /*
    *   This method filter out categories based on category name
    */
    filterCategory(filterValue : Observable<string>) {
        return filterValue.debounceTime(400)
            .distinctUntilChanged()
            .switchMap(category => {
                if(category !== ''){
                    let url = this.serviceUrl + "/applyFilter/" + category;

                    return this.http
                        .get(url, {headers : this.headers, withCredentials : true})
                        .map(res => {
                            return res.json().data;
                        });
                }else {
                    let url = this.serviceUrl + "/getAllCategories";

                    return this.http
                        .get(url, {headers : this.headers, withCredentials : true})
                        .map(res => {
                            return res.json().data;
                        });
                }
            })
    }
}