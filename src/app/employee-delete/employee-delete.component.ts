import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.css']
})
export class EmployeeDeleteComponent {

  empCode = ""
  empDelete = () =>
  {
    let empData:any = {"empCode":this.empCode}
    console.log(empData)
  }

}
