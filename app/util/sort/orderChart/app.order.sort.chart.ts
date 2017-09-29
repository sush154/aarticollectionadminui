import {Injectable} from '@angular/core';


@Injectable()


export class SortOrderForChart {

    sortOrderMonthly(orders : any) : any {
        var finalArray : any = [];
        var monthlyArr : any = [];

        if(orders !== undefined){
            for(let order of orders){
                if(monthlyArr[parseInt(order.orderDate.split("T")[0].split("-")[1])]){

                    monthlyArr[parseInt(order.orderDate.split("T")[0].split("-")[1])].push(order);
                }else {
                    monthlyArr[parseInt(order.orderDate.split("T")[0].split("-")[1])] = new Array();
                    monthlyArr[parseInt(order.orderDate.split("T")[0].split("-")[1])].push(order);
                }
            }
        }

        for(let i=0; i < monthlyArr.length; i++){
            if(monthlyArr[i]){

                finalArray[i] = new Array();
                finalArray[i].push(monthlyArr[i].length);
            }
        }

        return finalArray;
    }
}