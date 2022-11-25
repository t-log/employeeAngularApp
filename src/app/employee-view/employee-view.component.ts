import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent {
  // name = "Akhil"
  // designation = "Developer"
  // salary = 50000
  // phoneNo = 8348558321
  // email = "a@a.com"
  // companyName = "Nest Digital"
  // data = {"name":"Akhil","designation":"Dev","salary":50000}
  data:any = [{
            "name":"Akhil",
            "designation":"Dev",
            "salary":50000,
            "company":"Nest"
          },
          {
            "name":"Jacob",
            "designation":"Designer",
            "salary":40000,
            "company":"Nest"
          },
          {
            "name":"Varun",
            "designation":"Dev",
            "salary":50000,
            "company":"Nest"
          },
          {
            "name":"Ali",
            "designation":"Dev",
            "salary":50000,
            "company":"Nest"
          }
        ]

}
