import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
peopleList:any[]=[
]

myConditon=false;

delete(person: { _id: String; name: string; lastname: string; phone: string; }) {
  let index = this.peopleList.indexOf(person);
  this.peopleList.splice(index, 1);
  this.userService.deleteUser(person._id).subscribe(
    res=>{
      console.log(res);
      this.toastr.error(res.message);
    },
    err =>{
      console.log(err);
    }
  )

}
  constructor(private userService:UserService,private toastr: ToastrService) { }

  

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      result=>{
        this.peopleList = result
        
      },
      error=>{
        console.log(error);
      }
    )
  }
 
}
