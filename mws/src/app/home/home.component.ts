import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  home: any = {
    hi: "Hi This is",
    name: "Morteza Esmailpour",
    job: "Full Stack Developer",
    facebook: "http://91.98.46.192f",
    twitter: "http://91.98.46.192t",
    instagram: "http://91.98.46.192i",
    linkedin: "http://91.98.46.192l",
    google: "http://91.98.46.192g",
    btn: "Get a Free Quote",
  };

  constructor() { }

  ngOnInit() {
  }

}
