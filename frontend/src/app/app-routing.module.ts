import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component'
import { ProductCrudComponent } from './components/product-crud/product-crud.component'
import { ProductCreateComponent } from './components/product/product-create/product-create.component'
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductCrudComponent
  },
  {
    path: "product/create",
    component: ProductCreateComponent
  },
  {
    path: "product/update/:id",
    component: ProductUpdateComponent
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
