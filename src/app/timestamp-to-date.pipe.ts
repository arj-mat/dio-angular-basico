import { Pipe, PipeTransform } from '@angular/core';

@Pipe( {
    name: 'timestampToDate'
} )
export class TimestampToDatePipe implements PipeTransform {

    transform( value: number ): string {
        return new Date( value * 1000 ).toLocaleDateString( "pt-BR" );
    }

}
