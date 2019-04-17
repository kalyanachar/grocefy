import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import * as Globals from '../../core/globals';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  displayMode:any;
  visibleKey: boolean;
  proList: any =[];
  productTypeId:any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
  ) { 
    this.displayMode='grid';
  }
  ngOnInit() {
    this.productTypeId = this.route.snapshot.params['id'];
    this.getProductList(this.productTypeId);
  }

  display(view) {
    this.displayMode=view;
  }

  getProductList(id) {
    var params = {
      "productTypeId":id
    }
    this.productService.getProductList(params).subscribe(
        (res: any) => {
            console.log("Product Listing ==>",res);
            this.proList = res.data;
            this.visibleKey = true;
        },
        error => {
            // console.log(error)
        }
    );
}
  gotoProductDetails(id) {
    this.router.navigate(['/product/details', id]);
  }
}