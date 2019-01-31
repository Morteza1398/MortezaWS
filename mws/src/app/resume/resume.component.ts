import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  resume: any = {
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
    experience: "Experience",
    experience_description: "I partner with startups, organizations and companies to build digital products that help clients overcome challenges and create lasting connections with millions of people every day.",
    experiences : [
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
  };

  constructor() { }

  ngOnInit() {
  }

}
