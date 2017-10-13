import {Pipe, PipeTransform} from '@angular/core';

import {DELIVERYTYPE} from '../../common/app.delivery.type';

@Pipe ({
    name : 'deliveryTypeParser'
})

export class DeliveryTypeParser implements PipeTransform {
    transform(record : any) : any {
        if(record !== undefined){
            for(let type of DELIVERYTYPE){
                if(type.id == record){
                    return type.value;
                }
            }
        }
    }
}