import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ProjectDetailsService } from '../project-details.service'

@Component({
  selector: 'app-specific-project',
  templateUrl: './specific-project.component.html',
  styleUrls: ['./specific-project.component.css']
})
export class SpecificProjectComponent implements OnInit {
  pid;
  details;fetchData:boolean;
  constructor( private route: ActivatedRoute,private router: Router,public pservics:ProjectDetailsService ) { }

  ngOnInit(): void {
    this.fetchData=true;
    this.pid=this.route.snapshot.paramMap.get('id');
    this.pservics.getSpecific(this.pid).subscribe((result)=>{
      console.log(result);
      this.details=result;
      this.fetchData=false;
    })

  }

}
