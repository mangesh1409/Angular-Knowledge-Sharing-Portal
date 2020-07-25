import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './bbok'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  url="http://localhost:3000/booksdetails";
  collection; data:Book;
  fetchData:boolean; addMessege:boolean; deleteMessege:boolean;
  constructor( private _http:HttpClient) { }

  ngOnInit(): void {
    this.fetchData=true;
     this._http.get(this.url)
       .subscribe((result)=>{
       console.log(result);
       this.collection=result;
       this.fetchData=false;
     });
  }
  sendData(book){
    // console.log(book.bname);
    this.data=book.value;
    this._http.post(this.url,this.data).subscribe((result)=>{
      console.log(result);
      this.addMessege=true;
      this.fetchData=true;
      book.reset();
      this.ngOnInit();
      })
      setTimeout(() => {
        this.addMessege=false;
      },3000);
  }
  deleteEntry(id){
    console.log(id);
    this._http.delete(this.url+"/"+id).subscribe((result)=>{
      this.deleteMessege=true;
      this.fetchData=true;
      this.ngOnInit();
      })
      setTimeout(() => {
        this.deleteMessege=false;
      },3000);
  }
}
