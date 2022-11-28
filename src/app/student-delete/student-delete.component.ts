import { Component } from '@angular/core';

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css']
})
export class StudentDeleteComponent {
  delete=""
  readValue=()=>{
    let data={
      "Delete":this.delete
    }
    console.log(data)
  }


}
