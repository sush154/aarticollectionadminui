import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
    name : 'discountParser'
})

export class DiscountParser implements PipeTransform{

    transform(record : any) : any {
        if(record !== undefined){
            let discount = parseInt(record)*100;
            return discount+"%";
        }
    }
}