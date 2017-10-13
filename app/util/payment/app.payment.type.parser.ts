import {Pipe, PipeTransform} from '@angular/core';

import {PAYMENTTYPE} from '../../common/app.payment.type';

@Pipe({
    name : 'paymentTypeParser'
})

export class PaymentTypeParser implements PipeTransform {
    transform(record : any) : any {
        if(record !== undefined){
            for(let type of PAYMENTTYPE){
                if(type.id == record){
                    return type.value;
                }
            }
        }
    }
}