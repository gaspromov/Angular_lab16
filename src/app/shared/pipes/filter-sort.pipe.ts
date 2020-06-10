import { Pipe, PipeTransform } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Pipe({
  name: 'filterSort'
})
export class FilterSortPipe implements PipeTransform {

  transform(
    arr:any[], sortParam: string, filterParam: string
    ) {
    if (sortParam === undefined && filterParam === ''){
      return arr;
    }
    if ( sortParam !== undefined){
      switch(sortParam){
        case "byId1":
          arr = arr.sort((function (a, b) {
            if ( a.id > b.id){
              return -1;
            }else if(a.id < b.id){
              return 1;
            }else return 0;
          }))
          break;
        case "byId2":
          arr = arr.sort((function (a, b) {
            if ( a.id < b.id){
              return -1;
            }else if(a.id > b.id){
              return 1;
            }else return 0;
          }))
          break;
        case "byAge2": 
          arr = arr.sort((function (a, b) {
            if ( makeDate(a.birthDay) > makeDate(b.birthDay)){
              return -1;
            }else if(makeDate(a.birthDay) < makeDate(b.birthDay)){
              return 1;
            }else return 0;
          }))
          break;
        case "byAge1":
          arr = arr.sort((function (a, b) {
            if ( makeDate(a.birthDay) < makeDate(b.birthDay)){
              return -1;
            }else if(makeDate(a.birthDay) > makeDate(b.birthDay)){
              return 1;
            }else return 0;
          }))
          break;
      }
    }

    function makeDate(value){
      return Number(`${value.slice(0,4)}${value.slice(5,7)}${value.slice(8,10)}`)
    }

    if ( !isNullOrUndefined(filterParam) && filterParam !== ''){
      let filter = arr.filter(
        ell => (ell.firstName.toLowerCase().indexOf(filterParam.toLowerCase()) && ell.lastName.toLowerCase().indexOf(filterParam.toLowerCase()))  === 0);
      // filter = arr.filter(
      //   ell => ell.lastName.indexOf(filterParam.toLowerCase()) === 0);
      
      return filter;
    }
    
    return arr;
  }

}
