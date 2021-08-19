import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../item.service';
import { LoadingMaskComponent } from '../loading-mask/loading-mask.component';
import { FortniteShopData } from '../shared/model/fortnite-shop-data.model';

@Component( {
    selector: 'app-item-details',
    templateUrl: './item-details.component.html',
    styleUrls: [ './item-details.component.scss' ]
} )
export class ItemDetailsComponent implements OnInit {

    constructor( private activeRoute: ActivatedRoute, private loadingMask: LoadingMaskComponent, private itemService: ItemService ) { }

    @Input()
    public item!: FortniteShopData.Item;

    public hasLoaded: boolean = false;

    ngOnInit(): void {
        this.loadingMask.show();

        this.itemService.getFullItemByID( this.activeRoute.snapshot.paramMap.get( 'id' ) )
            .then( item => {
                this.hasLoaded = true;

                if ( !item )
                    return;

                this.item = item;
            } )
    }

}
