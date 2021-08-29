import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  usersList:any[] = [];

  myForm: FormGroup;
  constructor(private fb: FormBuilder,private userService:UserService) {

    let formControls = {
      firstname : new FormControl('',[Validators.required])
    }

    this.myForm= this.fb.group(formControls);
  }
  get firstname()
  {
    return this.myForm.get('firstname');
  }
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      result => {
        this.usersList = result;
      },
      error =>{
        console.log(error);
      }
    )

  }

 

}
