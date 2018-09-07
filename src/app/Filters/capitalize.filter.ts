import { Pipe, PipeTransform } from '@angular/core';  

@Pipe({  
    name: 'capitalize'  
})  
  
export class Capitalize implements PipeTransform {  
    transform(value: any): any {
        value = value.replace('  ', ' ');
        if (value) {
          let w = '';
          if (value.split(' ').length > 0) {
            value.split(' ').forEach(word => {
              word = word.replace(/[^0-9a-z]/gi, '');
              w += word.charAt(0).toUpperCase() + word.toString().substr(1, word.length).toLowerCase() + ' '
            });
          } else {
            w = value.charAt(0).toUpperCase() + value.toString().substr(1, value.length).toLowerCase();
            w = w.replace(/[^0-9a-z]/gi, '');
          }
          
          return w;
        }
        return value;
      }  
}  