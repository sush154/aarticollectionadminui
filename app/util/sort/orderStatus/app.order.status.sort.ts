import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name : "orderStatusSort"
})

export class OrderStatusSort implements PipeTransform {

    transform(records: any): any {
        var finalArr : any = [];

        if(records !== undefined){
            let newArr : any = [];
            let pendingArr : any = [];
            let shippedArr : any = [];
            let completeArr : any = [];
            let cancelledArr : any = [];
            let pickedUpArr : any = [];

            for(let record of records){
                if(record.orderStatus === "0"){
                    newArr.push(record);
                }

                if(record.orderStatus === "1"){
                    pendingArr.push(record);
                }

                if(record.orderStatus === "2") {
                    shippedArr.push(record);
                }

                if(record.orderStatus === "3") {
                    completeArr.push(record);
                }

                if(record.orderStatus === "4") {
                    cancelledArr.push(record);
                }

                if(record.orderStatus === "5") {
                    pickedUpArr.push(record);
                }
            }

            if(newArr.length > 0){
                for(let i=0; i < newArr.length; i++){
                    finalArr.push(newArr[i]);
                }
            }

            if(pendingArr.length > 0){
                for(let pending of pendingArr) {
                    finalArr.push(pending);
                }
            }

            if(cancelledArr.length > 0){
                for(let cancel of cancelledArr) {
                    finalArr.push(cancel);
                }
            }

            if(shippedArr.length > 0){
                for(let ship of shippedArr) {
                    finalArr.push(ship);
                }
            }

            if(pickedUpArr.length > 0){
                for(let pick of pickedUpArr) {
                    finalArr.push(pick);
                }
            }

            if(completeArr.length > 0){
                for(let complete of completeArr) {
                    finalArr.push(complete);
                }
            }

        }

        return finalArr;
    }
}