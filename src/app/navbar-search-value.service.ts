import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable( {
    providedIn: 'root'
} )
export class NavbarSearchValueService {
    private dataObs = new Subject<string>();

    public getObersavle() {
        return this.dataObs;
    }

    public updateData( value: string ) {
        this.dataObs.next( value );
    }
}
