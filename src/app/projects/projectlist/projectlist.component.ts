import { Component, OnInit } from '@angular/core';
import { ProjectDetailsService } from '../project-details.service';
import { Project } from '../projectModel';

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.css']
})
export class ProjectlistComponent implements OnInit {
  projectCollection;desc:string;
  fetchData:boolean;
  constructor(private projectServeice:ProjectDetailsService) { }

  ngOnInit(): void {
    this.fetchData=true;
    this.projectServeice.getAllProjects().subscribe((result)=>{
      console.log(result);
      this.fetchData=false;
      this.projectCollection=result;
      // this.desc=truncate(this.projectCollection.description,15);

    });
  }

}
