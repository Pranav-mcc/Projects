import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.scss']
})
export class AdmissionComponent {
  //Admission: https://retoolapi.dev/s5InKD/data
  constructor(private http:HttpClient){}
    Name:String="";
     Number:String="";
   Email:String="";
     City:String="";
   Sports:String="";
  Admission()
  {
    let name:any=this.Name;
    let namepattern=/^[A-Za-z\s]+$/;
    let nametest=namepattern.test(name);
    let num:any=this.Number;
    let numpattern=/^[6-9]\d{9}$|^[0-9]{10}$/; 
    let numtest=numpattern.test(num);
    let email:any=this.Email;
    let emailpattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;;
    let emailtest:any=emailpattern.test(email);
    let city:any=this.City;
    let citypattern=/^[A-Za-z]+$/;
    let citytest=citypattern.test(city);
    let sports:any=this.Sports;
    let sportspattern=/^[A-Za-z\s]+$/;
    let sportstest=sportspattern.test(sports);
    if(nametest==true&&numtest==true&&emailtest==true&&citytest==true&&sportstest==true)
    {
    const lists={
     'Name':this.Name,
     'Number':this.Number,

     'Email':this.Email,
     'City':this.City,
     'Sports':this.Sports
    }
    let id:any=localStorage.getItem('Id');
    if(id==null||id==0)
    {
          id=1;
          localStorage.setItem('Id',id);
          let url:String="https://retoolapi.dev/s5InKD/data";
        this.http.put("https://retoolapi.dev/s5InKD/data/"+id,lists).subscribe(
        ()=>{
  
          alert("Details sent successfully... we will get to you soon.. ");
      },
      err=>{
        let a:any=Number(localStorage.getItem('Id'));
        a--;
        localStorage.setItem('Id',a)
        console.log(err);
        alert("Error Occured Please Try Again Later...");
      })}
    else
    {
        let a:any=Number(localStorage.getItem('Id'));
        a++;
        let url:String="https://retoolapi.dev/s5InKD/data";
        localStorage.setItem('Id',a);
        this.http.put("https://retoolapi.dev/s5InKD/data/"+a,lists).subscribe(
        ()=>{
        alert("Details sent successfully... we will get to you soon.. ");
      },
      err=>{
        let a:any=Number(localStorage.getItem('Id'));
        a--;
        localStorage.setItem('Id',a);
        console.log(err);
        alert("Error Occured Please Try Again Later...");
      })}
     this.Name="";
     this.Number="";
     this.Email="";
     this.City="";
     this.Sports="";
  }
  else
  {
    alert("Something Caught Wrong.. Please check the Entered Details");
  }
  console.log(nametest,numtest,emailtest,citytest,sportstest);
}
}