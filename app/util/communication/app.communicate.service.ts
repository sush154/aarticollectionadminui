import {Injectable} from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class CommunicationService {
    public sourceValue = new Subject<any>();

    public value$ = this.sourceValue.asObservable();

    populateValue(val : any) : void{
        this.sourceValue.next(val);
    }

    getValue() : Observable<any> {
        return this.sourceValue.asObservable();
    }
}