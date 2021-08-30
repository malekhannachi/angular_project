import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']

  
}

)

export class HeaderComponent implements OnInit {
  isLoggedIn!: Boolean;
  constructor(private userService:UserService,private router :Router) { }

  ngOnInit(): void {
    this.isLoggedIn = this.userService.isLoggedIn();
  }

  logout(){
    localStorage.removeItem("myToken");
    this.router.navigate(['/login']);

  }

}
