import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about: any = {
    title: "Hi Guys!",
    description: "I am a Full Stack Developer located in Tehran, Shahran. I currently work as a part time Remote Developer for EnekasEdalat, located in Babol. I am looking to take on more work and to increase my skills as a Developer.",
    name: "Name",
    age: "Age",
    experience: "Experience",
    country: "Country",
    location: "Location",
    email: "e-mail",
    phone: "Phone",
    btn1: "Download Resume",
    btn2: "Contact Me",
    btn12lnk: "sfsf",
    btn2lnk: "#contact",
    myname: "Morteza Esmailpour",
    myage: "31 Years",
    myexperience: "6 Years",
    mycountry: "Iran",
    mylocation: "Tehran, Shahran",
    myemail: "morteza.esmailpoor@gmail.com",
    myphone: "+ (98) 911 118 5062",
  };

  constructor() { }

  ngOnInit() {
  }

}
