import { Component, OnInit } from '@angular/core';

import { SharedModule } from 'src/app/common/shared/shared.module';
import { CategoryModel } from '../categories/models/category.model';
import { CategoryService } from '../categories/services/category.service';
import { RequestModel } from 'src/app/common/models/request.model';
import { ProductService } from '../products/services/product.service';
import { ProductModel } from '../products/models/product.model';
import { BasketModel } from '../baskets/models/basket.model';
import { BasketService } from '../baskets/services/basket.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories: CategoryModel[] = [];  
  request: RequestModel = new RequestModel();
  products: ProductModel[] = [];

  constructor(
    private _category: CategoryService,
    private _product: ProductService,
    private _basket: BasketService,
    private _toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getCategories();
    this.getAll();
  }

  getAll(){
    this._product.getAllForHomePage(this.request, res=> this.products = res);
  }

  getCategories() {
    this._category.getAll(res => this.categories = res);
  }

  changeCategory(categoryId: string, categoryName: string){
    this.request.categoryName = categoryName;
    this.request.categoryId = categoryId;
    this.getAll();
  }

  addBasket(productId: string, price: number){
    let model = new BasketModel();
    model.productId = productId;
    model.price = price;
    model.quantity = 1;
    this._basket.add(model, res=> {
      this._toastr.success(res.message);
      this.getAll();
    });
  }
}
