export enum ShopItemRarity {
    Common,
    Uncommon,
    Rare,
    Slurp,
    Epic,
    Dark,
    Shadow,
    Frozen,
    Lava,
    Legendary,
    StarWars,
    Icons,
    DC,
    Marvel,
    Unknown,
    Legends
}

export interface ShopItem {
    id: string,
    name: string,
    price: number,
    rarity: ShopItemRarity,
    image: string,
    description: string,
    images: Array<string>
}