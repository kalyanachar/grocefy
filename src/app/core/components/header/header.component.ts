import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loggedIn: boolean;
  userName: string;
  totalCart: any;
  productList: any = [];
  visibleKey: boolean;
  menuList: any = [];
  constructor(
    private router: Router,
    private userService: UserService,
    public cartService: CartService,
    public productService: ProductService
  ) {
   // this.loadUserInfo();
   // cartService.getCartNumberStatus.subscribe(status => this.cartNumberStatus(status));
   }

  ngOnInit() {
    // if (sessionStorage.getItem("cart")) {
    //   this.totalCart = JSON.parse(sessionStorage.getItem("cart")).length;
    // } else{
    //   this.totalCart = 0;
    // }
    this.getMenuList();
    // this.getProList();
  }
  // loadUserInfo() {
  //   if (localStorage.getItem('isLoggedin')) {
  //     this.loggedIn = true;
  //     this.userName = localStorage.getItem('userName');
  //     console.log(this.userName);
  //     console.log("Logged In ==>",this.loggedIn);
  //   }
  //   else {
  //     this.loggedIn = false;
  //     console.log("Logged In ==>",this.loggedIn);
  //   }
  // }
  // cartNumberStatus(status: boolean) {
  //   if (status) {
  //     if (sessionStorage.getItem("cart")) {
  //       this.totalCart = JSON.parse(sessionStorage.getItem("cart")).length;
  //     }
  //     else {
  //       this.totalCart = 0;
  //     }
  //   }
  // }
  // getProList() {

  //   this.productService.getAllProList().subscribe(
  //     res => {
  //       console.log("All Product List==>",res);
  //       this.productList = res['result'];
  //       this.visibleKey = true;
  //     },
  //     error => {
  //       // console.log(error)
  //     }
  //   )
  // }

    getMenuList() {
        this.userService.menuListing().subscribe(
            (res: any) => {
                console.log(res);
                this.menuList = res.data;
                this.visibleKey = true;
            },
            error => {
                // console.log(error)
            }
        );
    }

    gotoproductPage(id) {
      this.router.navigate(['/product',id]);
    }

    gotoCartPage() {
      this.router.navigate(['/cart']);
    }
  


  // logout() {
  //   localStorage.clear();
  //   this.loggedIn = false;
  //   this.router.navigate(['/']);
  // }

}
