import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customParameterPipe',
  pure : true
})
export class CustomParameterPipePipe implements PipeTransform {

  transform(input:any[], min:string, max:string): any[]
  {
   
    return input.filter(item => item.sal >= min && item.sal <= max  );
  }

}
