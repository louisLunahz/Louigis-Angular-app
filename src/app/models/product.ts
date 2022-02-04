export class Product{
    constructor(
        public id: number, 
        public name: string,
        public brand: string, 
        public model: string, 
        public color: string,
        public price: number, 
        public stock: number,
        public extra_info: string,
        public barCode: string,
        public src_image: string
    ){

    }
}