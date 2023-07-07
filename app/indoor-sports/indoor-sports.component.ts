import { Component } from '@angular/core';

@Component({
  selector: 'app-indoor-sports',
  templateUrl: './indoor-sports.component.html',
  styleUrls: ['./indoor-sports.component.scss']
})
export class IndoorSportsComponent {
showcontent4=false;
showcontent5=false;
showcontent6=false;
display4()
{
  this.showcontent4=!this.showcontent4;
}
display5()
{
  this.showcontent5=!this.showcontent5;
}
display6()
{
  this.showcontent6=!this.showcontent6;
}
}
