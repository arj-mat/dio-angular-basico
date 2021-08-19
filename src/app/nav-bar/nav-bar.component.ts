import { Component, Injectable, Input, OnInit, Output } from '@angular/core';
import { NavbarSearchValueService } from '../navbar-search-value.service';

@Component( {
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: [ './nav-bar.component.scss' ]
} )

export class NavBarComponent implements OnInit {
    constructor( private navBarSearchService: NavbarSearchValueService ) { }

    ngOnInit(): void {
    }

    private _searchValue: string = "";

    get searchValue() {
        return this._searchValue;
    }

    set searchValue( value: string ) {
        this._searchValue = value.toLowerCase();
        this.navBarSearchService.updateData( this._searchValue );
    }
}
