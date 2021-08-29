import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
peopleList=[
  {id :1,name :"malek",lastname:"hannachi",phone :"20 741 701" },
  {id :2,name :"salma",lastname:"salouma",phone :"90 457 701" },
  {id :3,name :"ahmed",lastname:"ahmed50",phone :"50 545 221" },
  {id :4,name :"noura",lastname:"noura123",phone :"94 545 701" }
]

myConditon=false;

delete(person: { id: number; name: string; lastname: string; phone: string; }) {
  let index = this.peopleList.indexOf(person);
  this.peopleList.splice(index, 1);

}
  constructor() { }

  

  ngOnInit(): void {
  }

}
