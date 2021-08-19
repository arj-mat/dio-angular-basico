export namespace FortniteShopData {
    export interface SubItem {
        name: string,
        description: string,
        image: string
    }

    export interface Item {
        item_id: string,
        name: string,
        description: string,
        category: number,
        rarity: number,
        image: string,
        thumbnail: string,
        price: number,
        full_price: number,
        release_date: number,
        last_appearance_date: number,
        expire_date: number,
        release_season: string
        sub_items: Array<SubItem>
    }

    export interface Response {
        expires: number,
        items: Array<Item>,
        order: Array<number>
    }
}