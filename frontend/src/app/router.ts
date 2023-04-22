import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: "login",
        loadComponent: 
            ()=> import("./components/auth/components/login/login.component")
            .then(c=> c.LoginComponent)
    },
    {
        path: "register",
        loadComponent: 
            ()=> import("./components/auth/components/register/register.component")
            .then(c=> c.RegisterComponent)
    },
    {
        path: "",
        loadComponent: 
            ()=> import("./components/layouts/layouts.component")
            .then(c=> c.LayoutsComponent),
        children: [
            {
                path: "",
                loadComponent: 
                    ()=> import("./components/home/home.component")
                    .then(c=> c.HomeComponent)
            },
            {
                path: "products",
                loadComponent: 
                    ()=> import("./components/products/components/products/products.component")
                    .then(c=> c.ProductsComponent)
            },
            {
                path: "products/add",
                loadComponent: 
                    ()=> import("./components/products/components/product-add/product-add.component")
                    .then(c=> c.ProductAddComponent)
            },
            {
                path: "categories",
                loadComponent: 
                    ()=> import("./components/categories/categories.component")
                    .then(c=> c.CategoriesComponent)
            }
        ]
    }
]