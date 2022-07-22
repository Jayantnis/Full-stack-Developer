import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
// convertor
@Pipe({name: 'usdInr'})
export class UsdInrPipe implements PipeTransform
{
  // a:number=3;
  transform(value:CurrencyPipe):unknown
  {
    // const price=args;
    // value:CurrencyPipe;
    // // price.tofixed(2);
    //  cur=CurrencyPipe;
    let convert=(value);
    return  value;
  }
}

