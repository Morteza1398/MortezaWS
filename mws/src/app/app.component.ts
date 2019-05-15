import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Morteza';
  home: any = {
    hi: "HI, IAM",
    name: "Morteza",
    job: "Full Stack Developer",
    facebook: "https://www.facebook.com/morteza.esmailpour.9",
    twitter: "https://twitter.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/in/morteza-esmailpour/",
    google: "https://plus.google.com/u/0/111316970931828916064",
  };
  navbar: any = {
    home: "HOME",
    about: "ABOUT ME",
    portfolio: "PORTFOLIO",
    resume: "RESUME",
    blog: "Blog",
    contact: "Contact Me"
  };
  navbar_fa: any = {
    home: "خانه",
    about: "درباره من",
    portfolio: "نمونه کارها",
    resume: "رزومه",
    blog: "بلاگ",
    contact: "تماس با من"
  };
  about: any = {
    title: "About Me",
    know: "Kmow Me",
    img: "assets/images/11.jpg",
    hi: "Hi Guys!",
    description: "I am a Full Stack Developer located in Tehran, Shahran. I currently work as a part time Remote Developer for EnekasEdalat, located in Babol. I am looking to take on more work and to increase my skills as a Developer.",
    service: "Service",
    services: [
      { 
        title: 'Web Design', 
        description: 'Computer Engineering (Architecture)', 
        icon: 'pe-7s-monitor', 
      },
      { 
        title: 'Responsive UI', 
        description: 'Computer Engineering (Architecture)', 
        icon: 'pe-7s-phone', 
      },
      { 
        title: 'DB Design', 
        description: 'Computer Engineering (Architecture)', 
        icon: 'pe-7s-server', 
      },
      { 
        title: 'Product Design', 
        description: 'Computer Engineering (Architecture)', 
        icon: 'fa fa-laptop', 
      },
    ],
    client: "My Clients",
    clients:  [
      { 
        lnk: 'Computer1', 
        img: 'assets/images/client/client_1.png', 
      },
      { 
        lnk: 'Computer2', 
        img: 'assets/images/client/client_2.png', 
      },
      { 
        lnk: 'Computer3', 
        img: 'assets/images/client/client_3.png', 
      },
      { 
        lnk: 'Computer4', 
        img: 'assets/images/client/client_4.png', 
      },
      { 
        lnk: 'Computer5', 
        img: 'assets/images/client/client_5.png', 
      },
      { 
        lnk: 'Computer Engineering (Architecture)', 
        img: 'assets/images/client/client_6.png', 
      },
    ],
    fact: "Awesome Facts",
    facts:   [
      { 
        title: 'PROJECTS', 
        amount: 500, 
        icon: 'pe-7s-display1', 
      },
      { 
        title: 'Work Hours', 
        amount: 750, 
        icon: 'pe-7s-alarm', 
      },
      { 
        title: 'Customer SUPPORT', 
        amount: 150, 
        icon: 'pe-7s-headphones', 
      },
      { 
        title: 'Happy Clients', 
        amount: 820, 
        icon: 'pe-7s-smile', 
      },
    ],
    testimonial: "Testimonials",
    testimonials:  [
      { 
        title: 'Saad Tarek', 
        job: 'Designer at Upwork', 
        description: 'Desdsdddddddddddddfsdfsdfdssigner at Upwork', 
        img: 'assets/images/11.png', 
      },
      { 
        title: 'Amanda Catmull', 
        job: 'Designer at ProGlyphs', 
        description: 'Praesent et purus ac libero euismod egestas. Aliquam feugiat luctus eros nec semper odio non efficitur congue.', 
        img: 'assets/images/1.jpg', 
      },
      { 
        title: 'Bill Fox', 
        job: 'Designer at Amanidax', 
        description: 'Desdsdddigner at Upwork', 
        img: 'assets/images/2.jpg', 
      },
      { 
        title: 'Joey Higgins', 
        job: 'CEO Higgins&Geox', 
        description: 'Desdsdddddddddddsdddddddddddddddddddfsdfsdfdssigner at UpworkDesdsddddddddddfsdfsdfdssigner at UpworkDesdsfsdfsdfdssigner at UpworkDesdsdddddddddddddfsdfsdfdssigner at UpworkDesdsdddddddddddddfsdfsdfdssigner at UpworkDesdsdddddddddddddfsdfsdfdssigner at Upwork', 
        img: 'assets/images/3.jpg', 
      },
      { 
        title: 'Joey Higgins', 
        job: 'CEO Higgins&Geox', 
        description: 'Desdsdddddddddddsdddddddddddddddddddfsdfsdfdssigner at UpworkDesdsddddddddddfsdfsdfdssigner at UpworkDesdsfsdfsdfdssigner at UpworkDesdsdddddddddddddfsdfsdfdssigner at UpworkDesdsdddddddddddddfsdfsdfdssigner at UpworkDesdsdddddddddddddfsdfsdfdssigner at Upwork', 
        img: 'assets/images/3.jpg', 
      },
    ],
    age: "31 Years",
    experience: "6 Years",
    country: "Iran",
  };
  
  resume: any = {
    title: "RESUME",
    experience: "My Experience",
    education: "Education",
    education_description: 'All my life I have been driven by my strong belief that education is important. I try to learn something new every single day.',
    educations : [
      { 
        uni: 'University of Tehran', 
        city: 'Tehran', 
        years: '2010 - 2013', 
        field: 'Computer Engineering (Architecture)', 
        level: 'Master (MSc/MA)', 
      },
      { 
        uni: 'Nooshirvani University of Technology', 
        city: 'Babol', 
        years: '2006 - 2010', 
        field: 'Computer Engineering (Hardware)', 
        level: 'Bachelor (BSc/BA)', 
      },
      { 
        uni: 'Shahid Beheshti (SAMPAD)', 
        city: 'Babol', 
        years: '1999 - 2006', 
        field: 'Riazi Fizik', 
        level: 'diplom', 
      },
    ],
    work: "Work History",
    work_description: "I partner with startups, organizations and companies to build digital products that help clients overcome challenges and create lasting connections with millions of people every day.",
    works :  [
      { 
        title: 'Full Stack Developer', 
        company: 'EnekasEdalat', 
        years: 'MAR 2018 – PRESENT',
        descriptions : [
          'Performing discussed, analyzed and strategized product design', 
          'Designing, creating and managing content across multiple communication platforms', 
          'Developing coordinated server products', 
          'Building websites', 
          'Creating documentation for clients', 
        ],
      },
      { 
        title: 'Android Developer', 
        company: 'Salamat Pardazan Hamrah', 
        years: 'FEB 2017 – FEB 2018',
        descriptions : [
          'Designing, building, and maintaining high performance, reusable, and reliable Java code', 
          'Identifying and correcting bottlenecks and fixing bugs', 
          'Ensuring the best possible performance, quality, and responsiveness of the application', 
          'Gaining strong knowledge of Android SDK, different versions of Android, and how to deal with different screen sizes', 
          'Working with RESTful APIs to connect Android applications to back-end services', 
          'Coordinating team members to create client apps in an organized and deadline-oriented environment', 
        ],
      },
      { 
        title: 'Developer', 
        company: 'Hyper Blue Cube', 
        years: 'SEP 2014 – FEB 2017',
        descriptions : [
          'Establishing a detailed program specification through discussion with clients; clarifying what actions the program is intended to perform', 
          'Breaking down program specification into its simplest elements and translating this logic into a programming language', 
          'Devising possible solutions to anticipated problems', 
          'Working as part of a team, which may be established purely for a particular project to write a specific section of the program', 
          'Combining all elements of the program design and testing it', 
          'Testing sample data-sets to check that output from the program works as intended', 
          'Conducting testing and installing the program into production', 
          'Reacting to problems and correcting the program as necessary', 
          'Evaluating and increasing the program\'s effectiveness', 
          'Adapting the program to new requirements, as necessary', 
          'Conducting user-acceptance testing to ensure the program can be used easily, quickly and accurately', 
          'Writing detailed documentation for the operation of the program by users and computer operators', 
          'Updating, repairing, modifying and developing existing software and generic applications', 
          'Writing high-quality code to program complete applications on schedule', 
        ],
      },
      { 
        title: 'Software Security Developer', 
        company: 'Amnpardaz ', 
        years: 'MAR 2012 – AUG 2013',
        descriptions : [
          'Implement, test and operate advanced software security techniques in compliance with technical reference architecture', 
          'Perform on-going security testing and code review to improve software security', 
          'Troubleshoot and debug issues that arise', 
          'Provide engineering designs for new software solutions to help mitigate security vulnerabilities', 
          'Maintain technical documentation', 
          'Consult team members on secure coding practices', 
          'Reverse engineering malware codes to familiarize with their functions and threats', 
        ],
      },
    ],
    softskill: "Soft Skills",
    softskills: [
      { 
        title: 'Communication', 
        amount: 80, 
      },
      { 
        title: 'Work In Team', 
        amount: 50, 
      },
      { 
        title: 'Speed', 
        amount: 60, 
      },
      { 
        title: 'Creativity', 
        amount: 70, 
      },
    ],
    techskill: "Technical Skills",
    techskills: [
      { 
        title: 'C#', 
        amount: 80, 
      },
      { 
        title: 'WPF', 
        amount: 80, 
      },
      { 
        title: 'AXML', 
        amount: 80, 
      },
      { 
        title: 'ASP', 
        amount: 70, 
      },
      { 
        title: 'Xamarin', 
        amount: 60, 
      },
      { 
        title: 'SQL Server', 
        amount: 60, 
      },
      { 
        title: 'Java', 
        amount: 70, 
      },
      { 
        title: 'Android', 
        amount: 70, 
      },
      { 
        title: 'Node.js', 
        amount: 40, 
      },
      { 
        title: 'Angular', 
        amount: 60, 
      },
      { 
        title: 'React', 
        amount: 40, 
      },
      { 
        title: 'Python', 
        amount: 50, 
      },
      { 
        title: 'Django', 
        amount: 40, 
      },
      { 
        title: 'MongoDB ', 
        amount: 50, 
      },
    ],
    techssskill: "Technical Skills",
  };
  portfolio: any = {
    title: "PORTFOLIO",
    title2: "My Work",
    app: "Mobile Apps",
    website: "Web Sites",
    product: "Other Product",
    email: "morteza.esmailpoor@gmail.com",
  };
  contact: any = {
    title: "CONTACT ME",
    title2: "Get In Touch",
    location: "Tehran, Shahran",
    phone: "+ (98) 911 118 5062",
    email: "morteza.esmailpoor@gmail.com",
  };

}
