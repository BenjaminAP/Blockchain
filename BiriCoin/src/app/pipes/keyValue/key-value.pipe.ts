import { Pipe, PipeTransform } from '@angular/core';
import {Block} from "../../classes/block";

@Pipe({
  name: 'keyValue'
})
export class KeyValuePipe implements PipeTransform {

  transform(value: any, args?: string[]): any {
    let obj = [];
    console.log(value);

    for(let i =0; i < 6; i++){

    }

    for(let key in value) {
      obj.push({key: key, value: value[key]});
    }

    // console.log(obj);
    console.log('----');

    return obj;

  }

}
