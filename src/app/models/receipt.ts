export class Receipt {
    constructor(
        public Status: string,
        public Id: number,
        public Date: Date,
        public Items: ReceiptItem[],
    ){

    }
}

export class ReceiptItem {
    constructor(
        public Name: string, 
        public Price: number,
        public Quantity: number, 
        public IndividualTotal: number,
    ){

    }
   
}

