import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
 name ='malek';
imageUrl ="./../../assets/img/training.jpg";
  constructor() { }
hello(myname:String)
{
  alert('hello , my name is  :'+myname);
}

  ngOnInit(): void {
  }

}
