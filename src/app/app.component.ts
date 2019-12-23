import { Component } from '@angular/core';

enum Gender {male,female}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  flage:boolean = false;

  gender:Gender = Gender.female;

  names:Array<String> = [
    'Refaat' , 'Hussien' , 'Zyaed' , 'Ahmed' 
  ];

  getFlageColor(){
    return this.flage ? "#080" : "#F00"
  }
}
