import { Pipe, PipeTransform } from '@angular/core';  
import { BookNameTransformerService } from '../book-name-transformer.service';

@Pipe({  
  name: 'capitalize'  
}) 
export class CapitalizePipe implements PipeTransform {
  constructor(private service: BookNameTransformerService) {}
    transform(value: any): any {
      return this.service.transform(value);
    }
}  