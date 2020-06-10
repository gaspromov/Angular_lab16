import { Pipe, PipeTransform } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Pipe({
  name: 'dateToAge'
})
export class DateToAgePipe implements PipeTransform {

  transform(value: string) {
    let date = new Date();
    let age: number;

    if (!isNullOrUndefined(value) && value !== ''){
      age = date.getFullYear() - Number(value.slice(0,4)) - 1;

      if (makeDate(value) < getDate() ){
        age += 1;
      }

    return age;
    }

    function getDate(){
      return date.getMonth() < 9 ? Number(`0${date.getMonth()+1}${date.getDate()}`) : Number(`${date.getMonth()+1}${date.getDate()}`);
    }

    function makeDate(hereDate){
    if (!isNullOrUndefined(value) && value !== '')
      return Number(`${hereDate.slice(5,7)}${hereDate.slice(8,10)}`)
    }

  }

}
