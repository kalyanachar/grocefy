import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AuthGuard } from '../core/guard/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '/', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: './home/home.module#HomeModule' },
      { path: 'login', loadChildren: './login/login.module#LoginModule' },
      { path: 'cms/:id', loadChildren: './cms/cms.module#CmsModule' },
      { path: 'category', loadChildren: './category/category.module#CategoryModule' },
      { path: 'product', loadChildren: './product/product.module#ProductModule' },
      { path: 'product/:id', loadChildren: './product/product.module#ProductModule' },
      { path: 'order', loadChildren: './order/order.module#OrderModule' },
      { path: 'success', loadChildren: './success/success.module#SuccessModule' },
      { path: 'contactus', loadChildren: './contact/contact.module#ContactModule' },
       { path: 'address', loadChildren: './address/address.module#AddressModule' },
      { path: 'wishlist', loadChildren: './wishlist/wishlist.module#WishlistModule' },
      { path: 'cart', loadChildren: './cart/cart.module#CartModule' },
      { path: 'myprofile', loadChildren: './myprofile/myprofile.module#MyprofileModule' },
      { path: 'search/:name', loadChildren: './search/search.module#SearchModule' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
