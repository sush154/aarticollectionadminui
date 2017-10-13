import {Pipe, PipeTransform} from '@angular/core';

import {STATES} from '../../common/app.states';

@Pipe ({
    name : 'stateParser'
})

export class StateParser implements PipeTransform {

    transform(record : any) : any {
        if(record !== undefined){
            for(let state of STATES){
                if(state.id == record){
                    return state.value;
                }
            }
        }
    }
}