import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  userId:string='';
  name:string='';
  marks:string='';
  email:string='';

  
  constructor(private ps:StudentService) { }

  ngOnInit(): void {
  }
  updateData(userId:any){
    const  formdata={userId:this.userId,name:this.name,
    
  marks:this.marks,email:this.email}

    this.ps.updateStudent(userId,formdata).subscribe(data=>{
      alert('Updated Succesfully');
    })
  }

}
