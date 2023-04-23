import { ProductModel } from "../../products/models/product.model";

export class BasketModel{
    _id: string = "";
    userId: string = "";
    productId: string = "";
    products: ProductModel[] = [];
    price: number = 0;
    quantity: number = 1;
}