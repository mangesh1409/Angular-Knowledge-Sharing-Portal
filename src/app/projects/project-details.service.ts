import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from './projectModel';


@Injectable({
  providedIn: 'root'
})
export class ProjectDetailsService {
  url="http://localhost:3000/projectDetails";
  constructor(private _http:HttpClient) { }

  getAllProjects(){
    return this._http.get(this.url)
  }
  getSpecific(id){
    return this._http.get(`${this.url}/${id}`);
  }
  saveProject(data){
    return this._http.post(this.url,data);
  }

}
