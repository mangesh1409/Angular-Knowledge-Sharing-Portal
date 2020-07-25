import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { contact } from './contact';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  url="http://localhost:3000/contactus";
  details:contact;addMessege;
  constructor(private _http:HttpClient) { }

  ngOnInit(): void {
    this._http.get(this.url).subscribe((result)=>{
      console.log(result);
    })
  }
  sendQuery(data){
    // console.log(data);
    this.details=data.value;
    this._http.post(this.url,this.details).subscribe((result)=>{
      this.addMessege=true;
      data.reset();
      this.ngOnInit();
      })
      setTimeout(() => {
        this.addMessege=false;
      },3000);
  }

}
