import { Product } from "./product";

export class Item {
    constructor(
        public id: number,
        public quantity: number,
        public id_product: number,
        public id_shoppingCart: number,
        public individual_total: number
    ){

    }
}
