import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: String = "Refaat Aish";
  btnStatus: boolean = false;
  textSuccess:String = "text-success";
  hasError : boolean = true;
  titleStyleObj:object = {
    fontStyle : "italic",
    color : "blue",
    fontWeight : "bold"
  }
  
  activeBtn() {
    this.btnStatus = true;
  }
  changeName(event: Event) {
    this.name = (<HTMLInputElement>event.target).value;
  }

  LoginData(username,password){
    console.log(`username is ${username} , password = ${password}`);
  }
}
