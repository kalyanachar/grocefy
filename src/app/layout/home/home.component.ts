import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../core/services/product.service';
import { OwlModule } from 'ngx-owl-carousel';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  featuredProducts = [];
  foodandBeverages = [];
  houseHolds = [];
  visibleKey: boolean;
  images: any = [];
  constructor(
    public productService: ProductService
  ) { }

  ngOnInit() {
    this.getHomeProductList();
    this.images = [
      {
        img: 'assests/img/slider/1.jpeg'
      },
      {
        img: 'assests/img/slider/2.jpeg'
      },
      {
       img: 'assests/img/slider/3.jpeg'
      }
    ];
  }

  getHomeProductList() {
      this.productService.homeProList().subscribe(
          (res: any) => {
              console.log('home pro list==>', res);
              this.featuredProducts = res.data.featuredProduct;
              this.foodandBeverages = res.data.foodAndBeverages;
              this.houseHolds = res.data.households;
              this.visibleKey = true;
          },
          error => {
              // console.log(error)
          }
      );
  }

}
