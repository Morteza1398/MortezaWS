import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: any = {
    title: "Contact",
    description: "Are you working on something great? I would love to help make it happen! Drop me a letter and start your project right now! Just do it.",
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
