import { Component, Input, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { NavbarSearchValueService } from '../navbar-search-value.service';
import { ShopItem, ShopItemRarity } from '../shared/model/shop-item.model';

@Component( {
    selector: 'app-item-grid',
    templateUrl: './item-grid.component.html',
    styleUrls: [ './item-grid.component.scss' ]
} )
export class ItemGridComponent implements OnInit {
    constructor( private service: ItemService, private navBarSearchService: NavbarSearchValueService ) { }

    @Input()
    public filterByRarity?: ShopItemRarity;

    private filterByName: string = "";

    @Input()
    public items: Array<ShopItem> = [];

    public hasLoaded: boolean = false;

    private loadItems() {
        this.hasLoaded = false;

        this.service.getAllItems()
            .catch()
            .then( items => {
                this.hasLoaded = true;

                this.items = items
                    .filter( item => {
                        if ( this.filterByRarity === undefined )
                            return true;
                        else
                            return item.rarity == this.filterByRarity;
                    } )
                    .filter( item => {
                        if ( this.filterByName )
                            return item
                                .name
                                .toLowerCase()
                                .split( ' ' )
                                .filter( word => {
                                    return word.startsWith( this.filterByName );
                                } )
                                .length > 0;
                        else
                            return true;
                    } );
            } );
    }

    ngOnInit(): void {
        this.navBarSearchService.getObersavle().subscribe( searchValue => {
            this.filterByName = searchValue;

            this.loadItems();
        } );

        this.loadItems();
    }

    public getItemRarityClass( item: ShopItem ): string {
        switch ( item.rarity ) {
            case ShopItemRarity.Common:
                return "table-light";
            case ShopItemRarity.Uncommon:
                return "table-success";
            case ShopItemRarity.Epic:
                return "table-secondary";
            case ShopItemRarity.Legendary:
                return "table-warning";
            case ShopItemRarity.Rare:
                return "table-info";
            default:
                return "table-danger";
        }
    }
}