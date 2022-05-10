import { Component, OnInit } from '@angular/core';
import { AuthtokenService } from '../authtoken.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  uid:string = "user@gmail.com";
  pwd:string = "user123";
  result:string = "";

  constructor(private authServices:AuthtokenService) { }

  ngOnInit(): void {
  }

  public login_click():void
   {
        this.authServices.getTokenForValidUser(this.uid, this.pwd)
        .subscribe(
          {
            next :  (resData:any) =>  {
              this.result = "Valid User.  Access Token :  " + resData.accessToken;
              sessionStorage.setItem("AUTH_TOKEN",  resData.accessToken);
              console.log(resData.accessToken);
            },
           error : (error:any) =>  {
               this.result  = "Invalid user id or password. Error Message : " + error.message;
               console.log(error);
            }
          }
        );
   }
}
