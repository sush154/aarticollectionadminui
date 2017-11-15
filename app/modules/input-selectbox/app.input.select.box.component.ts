import {Component, Input, OnInit} from '@angular/core';


@Component({
    selector : 'input-select-box',
    templateUrl : './app/modules/input-selectbox/app.input.select.box.component.html',
    styleUrls : ['./app/modules/input-selectbox/app.input.select.box.component.css']
})

export class InputSelectBoxComponent implements OnInit{
    private displayCustomerDropDown : Boolean = false;
    @Input() dropdownlist : any;


    private selectCustomer(dropdown : any) : void {
        $("#customer").val(dropdown.customerName+", "+dropdown.city);
        $("#dropdownId").val(dropdown._id);
        this.displayCustomerDropDown = false;
    }

    ngOnInit() : void {

    }
}