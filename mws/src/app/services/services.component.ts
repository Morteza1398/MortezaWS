import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  serv: any = {
    title: "What I Do",
    services : [
      { 
        icon: 'icon-grid', 
        title: 'UI/UX DESIGN', 
        description: 'Tehran', 
      },
      { 
        icon: 'icon-layers', 
        title: 'WEB DESIGN', 
        description: 'Tehran', 
      },
      { 
        icon: '2010', 
        title: 'University', 
        description: 'Tehran', 
      },
      { 
        icon: '2010', 
        title: 'University', 
        description: 'Tehran', 
      },
    ],
  };

  constructor() { }

  ngOnInit() {
  }

}
