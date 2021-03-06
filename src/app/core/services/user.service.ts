import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  headers:any;
  @Output() getLoggedInStatus: EventEmitter<any> = new EventEmitter();
  constructor(
    private http: HttpClient
  ) {
    this.headers =   new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    });
   }

  loginStatus(data): Observable<any> {
    if (data = true) {
      this.getLoggedInStatus.emit(true);
      return
    }
  }

  userSignin(data): Observable<any> {

    return this.http.post(environment.apiEndpoint + 'login', data, {
      headers: this.headers
    }).pipe(response => response);
  }

  userSignup(data): Observable<any> {
    return this.http.post(environment.apiEndpoint + 'create-user/', data,{
      headers:this.headers
    })
  }

  // userSignup(data): Observable<any> {
  //   return this.http.post(environment.apiEndpoint + 'userregister/', data)
  // }
  userForgotPassword(data): Observable<any> {
    return this.http.post(environment.apiEndpoint + 'userforgetpasswordotp/', data)
  }
  updatePassword(data): Observable<any> {
    return this.http.post(environment.apiEndpoint + 'userforgetpasswordupdate/', data)
  }

  addressList(id): Observable<any> {
    return this.http.get(environment.apiEndpoint + 'cusaddlistbycusid/' + id + '/')
  }

  getPinCode(pincode): Observable<any> {
    return this.http.get(environment.apiEndpoint + 'deliverslotbypincode/' + pincode + '/')
  }
  submitAddress(data): Observable<any> {
    return this.http.post(environment.apiEndpoint + 'addcustomeraddress/', data)
  }
  deleteMyAddress(id): Observable<any> {
    return this.http.get(environment.apiEndpoint + 'deletecustomeraddress/' +id)
  }

  myAddressDetails(id): Observable<any> {
    return this.http.get(environment.apiEndpoint + 'listcustomeraddressbyid/' +id)
  }
  getProfile(id): Observable<any> {
    return this.http.get(environment.apiEndpoint + 'userprofile/' + id + '/')
  }
  updateUserProfile(id, data): Observable<any> {
    return this.http.post(environment.apiEndpoint + 'userprofileupdate/' + id, data)
  }

  menuListing() {
    return this.http.get(environment.apiEndpoint + 'get-menues',{
      headers:this.headers
    })
  }

}
