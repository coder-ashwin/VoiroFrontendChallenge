import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'fileName'})
export class FileNamePipe implements PipeTransform {
    transform(value: string): string {
        if (!value) {
            return '';
        }

        var name = value.substring(0, value.lastIndexOf('.') - 1);

        if (name.length > 25) {
            name = name.substring(0, 7) + "..." + name.substring(name.length - 4, name.length - 1);
        }

        return name + value.substring(value.lastIndexOf('.'));
    }
}