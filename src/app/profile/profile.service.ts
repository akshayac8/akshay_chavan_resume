import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  skillsData: any = [
    {
      'id': '1',
      'skill': 'Java',
      'progress': '70%'
    },
    {
      'id': '2',
      'skill': 'Spring MVC + Spring Boot',
      'progress': '70%'
    },
    {
      'id': '3',
      'skill': 'AWS',
      'progress': '40%'
    },
    {
      'id': '4',
      'skill': 'Angular 6',
      'progress': '60%'
    },
    {
      'id': '5',
      'skill': 'HTML, CSS, Javascript, Jquery',
      'progress': '70%'
    },
    {
      'id': '6',
      'skill': 'Linux & Shell Scripting',
      'progress': '60%'
    },
    {
      'id': '7',
      'skill': 'Jenkins',
      'progress': '75%'
    },
    {
      'id': '8',
      'skill': 'Groovy',
      'progress': '70%'
    },
    {
      'id': '9',
      'skill': 'MS SQL & Postgresql',
      'progress': '75%'
    }
  ];

  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2010 - 2013',
      'education': 'Bachelor\'s Degree',
      'stream': 'Bachelor of Engineering In Information Technology',
      'institution': 'VIVEKANAND EDUCATION SOCIETY\'S INSTITUTE OF TECHNOLOGY, MUMBAI, INDIA'
    },
    {
      'id': '2',
      'from_to_year': '2010 - 2013',
      'education': 'Diploma Degree',
      'stream': 'Diploma In Computer Technology',
      'institution': 'VIVEKANAND EDUCATION SOCIETY\'S POLYTECHNIC, MUMBAI, INDIA'
    }
  ];

  exprienceData: any = [
    {
      'id': '1',
      'from_to_month_year': 'JULY 2017 - TILL DATE',
      'organization': 'Gracenote A Nielsen Company',
      'designation': 'Software Engineer',
      'details': `Created fully functional projects for <strong>Gracenote A Nielsen Company<\/strong> in Agile-Scrum driven environment.
      Redesigned and maintained application to handle ETL processing of video and music
      metadata. Configured functionalities to consume/send messages from and to
      ActiveMQ. Created functionalities to parse raw data into models. Developed shell
      scripts to monitor ETL processing. Handled deployment pipeline using Jenkins.`
    },
    {
      'id': '2',
      'from_to_month_year': 'NOVEMBER 2013 - MAY 2017',
      'organization': 'ACCENTURE SOLUTIONS PVT. LTD.',
      'designation': 'Application Development Analyst',
      'details': `Developed and maintained the application that deals with telecommunication sector. 
      Designed and developed UI using javascript and jquery. 
      Handled deployment activities on Linux servers. 
      Created test plans and documents. 
      Successfully migrated the application from Struts 2 to Spring 3.`
    }
  ];
  contactus(data: any): Observable<any> {
    return this.http.post(this.baseUrl + 'contact', data);
  }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }
}
