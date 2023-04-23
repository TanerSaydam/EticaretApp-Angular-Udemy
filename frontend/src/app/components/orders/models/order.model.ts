import { ProductModel } from "../../products/models/product.model";

export class OrderModel{
    _id: string = "";
    productId: string = "";
    products: ProductModel[] = [];
    price: number = 0;
    quantity: number = 0;
    createdDate: string = "";
    userId: string = "";
}