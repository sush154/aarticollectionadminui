import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {URL} from '../../util/app.service.url';

@Injectable()

export class LoginProvider {

  constructor(private http : Http){}

  private headers = new Headers({'Content-Type': 'application/json'});

  private serviceUrl = URL + "/user/login";

  private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
  }

  /*
  * This method authenticates user
  */
  login(loginObj : any) : Promise<any> {
    let url = this.serviceUrl;

    return this.http
        .post(url, JSON.stringify(loginObj), {headers : this.headers,withCredentials: true})
        .toPromise()
        .then((res) => {
          return res.json().data;
        })
        .catch((err) => {
          this.handleError(err);
        });
  }
}
