import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbar: any = {
    home: "HOME",
    about: "ABOUT",
    services: "SERVICES",
    resume: "RESUME",
    contact: "CONTACT"
  };


  constructor() { }

  ngOnInit() {
  }

}
