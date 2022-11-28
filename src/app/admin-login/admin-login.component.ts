import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  uname=""
  pwd=""
  
  admnLogn = () =>
  {
    let adminData:any = {"uname":this.uname,"pwd":this.pwd}
    console.log(adminData)
  }
}
