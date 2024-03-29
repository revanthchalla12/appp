import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  sidebarHidden = true;

  constructor(private router:Router) { }

  ngOnInit() {
  }
  onlogout(){
    this.router.navigate(['/login'])
  }
  toggleSidebar() {
    this.sidebarHidden = !this.sidebarHidden;
  }

}
