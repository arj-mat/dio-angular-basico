import { Injectable } from '@angular/core';
import { LoadingMaskComponent } from './loading-mask/loading-mask.component';
import { FortniteShopData } from './shared/model/fortnite-shop-data.model';
import { ShopItem } from './shared/model/shop-item.model';

@Injectable( {
    providedIn: 'root'
} )
export class ItemService {
    constructor( private loadingMask: LoadingMaskComponent ) { }

    private itemsCache?: Array<ShopItem>;

    public async fetchItems(): Promise<FortniteShopData.Response> {
        return fetch( `assets/daily-shop.json?d=${Date.now()}` )
            .then( response => response.json() );
    }

    public async getFullItemByID( id: string | null ): Promise<FortniteShopData.Item | undefined> {
        if ( !id )
            return undefined;

        this.loadingMask.show();

        return this.fetchItems().then( response => {
            this.loadingMask.hide();

            return response.items.find( item => item.item_id == id );
        } );
    }

    public async getAllItems(): Promise<Array<ShopItem>> {
        if ( this.itemsCache )
            return this.itemsCache;

        this.loadingMask.show();

        return this.fetchItems()
            .then( ( data: FortniteShopData.Response ) => {
                this.loadingMask.hide();

                this.itemsCache = ( data.items.map( item => {
                    return {
                        id: item.item_id,
                        name: item.name,
                        description: item.description,
                        image: item.thumbnail,
                        images: [
                            item.image,
                            item.sub_items.map( subItem => subItem.image )
                        ],
                        price: item.price,
                        rarity: item.rarity
                    } as ShopItem
                } ) as Array<ShopItem> )
                    .sort( ( a, b ) => b.rarity - a.rarity );

                return this.itemsCache;
            } )
            .catch( () => {
                this.loadingMask.hide();
                return [];
            } );
    }
}
