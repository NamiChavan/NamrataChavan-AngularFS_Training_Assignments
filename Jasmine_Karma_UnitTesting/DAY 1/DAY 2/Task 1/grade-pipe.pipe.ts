import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gradePipe'
})
export class GradePipePipe implements PipeTransform {

  transform(input:string):string
 {
    let output:string ="";

    if(input.toUpperCase() =='1') output = 'Outstanding';
    if(input.toUpperCase() =='2') output = 'Excellent';
    if(input.toUpperCase() =='3') output = 'Good';
    if(input.toUpperCase() =='4') output = 'Avarage';


    return output;
 }

}
