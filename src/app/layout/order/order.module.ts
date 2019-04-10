import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
// core
import { CoreModule } from '../../core/core.module';
import { DetailsComponent } from './details/details.component';
@NgModule({
  declarations: [OrderComponent, DetailsComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    CoreModule
  ]
})
export class OrderModule { }
