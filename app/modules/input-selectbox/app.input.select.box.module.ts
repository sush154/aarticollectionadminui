import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';


import {InputSelectBoxComponent} from './app.input.select.box.component';

@NgModule({
    imports : [CommonModule, FormsModule],
    declarations : [InputSelectBoxComponent],
    exports : [InputSelectBoxComponent]
})

export class InputSelectBoxModule {}