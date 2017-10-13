import {Pipe, PipeTransform} from '@angular/core';

import {ORDERSTATUS} from '../../common/app.order.status';

@Pipe({
    name : 'orderStatusParser'
})

export class OrderStatusParser implements PipeTransform {

    transform(record : any) : any {
        if(record !== undefined){
            for(let status of ORDERSTATUS){
                if(status.id == record){
                    return status.value;
                }
            }
        }
    }
}