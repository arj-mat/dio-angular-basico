import { Component, HostBinding, Injectable, Input, OnInit } from '@angular/core';

@Component( {
    selector: 'app-loading-mask',
    templateUrl: './loading-mask.component.html',
    styleUrls: [ './loading-mask.component.scss' ]
} )
@Injectable( {
    providedIn: 'root',
    useValue: LoadingMaskComponent.instance
} )
export class LoadingMaskComponent implements OnInit {
    static instance: LoadingMaskComponent;

    constructor() {
        LoadingMaskComponent.instance = this;
    }

    @Input()
    @HostBinding( 'class.visible' )
    protected isVisible: boolean = false;

    ngOnInit(): void {
    }

    show() {
        this.isVisible = true;
    }

    hide() {
        this.isVisible = false;
    }

}
