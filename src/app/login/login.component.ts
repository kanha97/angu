import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-dashboard',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {  
  // events
  public onLoginClicked(username:String,password:String):void {
    console.log("On Clicked UserName : "+username+"  Password : "+password);
    
  }
  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
