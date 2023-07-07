import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(private http:HttpClient){}
  Names:String="";
  Emails:String="";
  Numbers:String="";
  Message:String="";
  message()
  {
    let names:any=this.Names;
    let namespattern=/^[A-Za-z\s]+$/;
    let namestest=namespattern.test(names);
    let emails:any=this.Emails;
    let emailspattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let emailstest=emailspattern.test(emails);
    let numbers:any=this.Numbers;
    let numberspattern=/^[6-9]\d{9}$|^[0-9]{10}$/;
    let numberstest=numberspattern.test(numbers);
    let msg:any=this.Message;
    let messagepattern=/^[A-Za-z\s]+$/;
    let msgtest=messagepattern.test(msg);
    if(namestest==true&&emailstest==true&&numberstest==true&&msgtest==true)
    {
        const list={
     'Name':this.Names,
    'email':this.Emails,
  'Number':this.Numbers,
    'Message':this.Message
  }
  let count:any=localStorage.getItem('Id');
    if(count==null||count==0)
    {
          count=1;
          localStorage.setItem('Count',count);
          let url:String="https://retoolapi.dev/wSJBuB/Contact";
        this.http.put("https://retoolapi.dev/wSJBuB/Contact/"+count,list).subscribe(
        ()=>{
  
          alert("Message sent successfully... we will get to you soon.. ");
      },
      err=>{
        let a:any=Number(localStorage.getItem('Count'));
        a--;
        console.log(err);
        alert("Error Occured Please Try Again Later...");
      })}
    else
    {
        let a:any=Number(localStorage.getItem('Count'));
        a++;
        let url:String="https://retoolapi.dev/wSJBuB/Contact";
        localStorage.setItem('Id',a);
        this.http.put("https://retoolapi.dev/wSJBuB/Contact/"+a,list).subscribe(
        ()=>{
        alert("Message sent successfully... we will get to you soon.. ");
      },
      err=>{
        let a:any=Number(localStorage.getItem('Count'));
        a--;
        console.log(err);
        alert("Error Occured Please Try Again Later...");
      })}
     this.Names="";
     this.Emails="";
     this.Numbers="";
     this.Message="";
  }
  else
  {
    alert("Something Caught Wrong.. Please check the Entered Details");
  }
  console.log(namestest,numberstest,emailstest,msgtest);
}
  }


