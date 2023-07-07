import { Component } from '@angular/core';

@Component({
  selector: 'app-outdoor-sports',
  templateUrl: './outdoor-sports.component.html',
  styleUrls: ['./outdoor-sports.component.scss']
})
export class OutdoorSportsComponent {
  showcontent1=false;
  showcontent2=false;
  showcontent3=false;
 display1()
 {
  this.showcontent1=!this.showcontent1;
 }
 display2()
 {
  this.showcontent2=!this.showcontent2;
 }
display3()
{
 this.showcontent3=!this.showcontent3;
}
}
