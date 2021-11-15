import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagePipe'
})
export class ImagePipePipe implements PipeTransform {

  transform(value: string,defualtImage:string): string {
    return value?value:defualtImage
  }

}
