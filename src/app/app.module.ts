import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';
import { EmployeeViewComponent } from './employee-view/employee-view.component';
import { FormsModule } from '@angular/forms';

const myRoute:Routes= [
  {path:"",component:AdminLoginComponent},
  {path:"add",component:AddEmployeeComponent},
  {path:"view",component:EmployeeViewComponent},
  {path:"search",component:SearchEmployeeComponent},
  {path:"delete",component:EmployeeDeleteComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AddEmployeeComponent,
    NavbarComponent,
    SearchEmployeeComponent,
    EmployeeDeleteComponent,
    EmployeeViewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
