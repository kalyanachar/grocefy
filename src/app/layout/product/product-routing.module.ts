import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductComponent} from './product.component';
import {DetailsComponent} from './details/details.component';
const routes: Routes = [
  {
    path: '',
    component: ProductComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
