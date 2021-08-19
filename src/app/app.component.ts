import { Component, Input } from '@angular/core';
import { NavbarSearchValueService } from './navbar-search-value.service';

@Component( {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
} )
export class AppComponent {
    title = 'navegacao';

    constructor( private navBarSearchService: NavbarSearchValueService ) { }

    @Input()
    get navBarSearchValue() {
        return "";
    }

    set navBarSearchValue( value: string ) {
        console.log( value );
        this.navBarSearchService.updateData( value );
    }
}
