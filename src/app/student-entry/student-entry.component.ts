import { Component } from '@angular/core';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent {
  name=""
  rollno=""
  admission=""
  mobile=""
  college=""
  parent=""
  parentmobile=""
  username=""
  password=""
  readValue=()=>{
    let data={
      "name":this.name,
      "rollno":this.rollno,
      "admission":this.admission,
      "mobile":this.mobile,
      "college":this.college,
      "parent":this.parentmobile,
      "parentmobile":this.parentmobile,
      "username":this.username,
      "password":this.password
    }
    console.log(data)
  }



}
