import { CurrencyPipe, formatCurrency } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'p'
})
export class PPipe implements PipeTransform {

  transform(value: any,get:any,str:string):  unknown {

   value=(value*get).toFixed(2)+str;
    return value;
  }

}
