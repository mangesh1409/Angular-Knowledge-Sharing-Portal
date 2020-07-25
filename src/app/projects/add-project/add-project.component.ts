;import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { ProjectDetailsService } from '../project-details.service'

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  status:boolean;
  constructor(private fb:FormBuilder, private projectService:ProjectDetailsService) { }
  addProjectForm=this.fb.group({
    name:['',[Validators.required,Validators.minLength(3)]],
    technology:['',[Validators.required]],
    description:['',[Validators.required,Validators.minLength(3)]],
    referances:['',[Validators.required,Validators.minLength(3)]]
  });
  ngOnInit(): void {
  }
  addProject(){
    // console.log("Form sub");
      // console.log(this.addProjectForm.value);
      this.projectService.saveProject(this.addProjectForm.value).subscribe((result)=>{
        console.log(result);
      })
      this.status=true;
      this.addProjectForm.reset();
  }


}
