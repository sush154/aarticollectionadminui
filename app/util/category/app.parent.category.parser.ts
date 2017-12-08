import {Pipe, PipeTransform} from '@angular/core';

import {PARENTCATEGORY} from '../../common/app.parent.category';

@Pipe({
    name : 'parentCategoryParser'
})

export class ParentCategoryParser implements PipeTransform {
    transform(record : any) : any {
        if(record !== undefined){
            for(let type of PARENTCATEGORY){
                if(type.id == record){
                    return type.value;
                }
            }
        }
    }
}