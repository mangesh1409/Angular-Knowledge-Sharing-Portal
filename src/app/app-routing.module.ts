import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component'
import { BooksComponent } from './books/books.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectlistComponent } from './projects/projectlist/projectlist.component';
import { SpecificProjectComponent } from './projects/specific-project/specific-project.component'
import { AddProjectComponent } from './projects/add-project/add-project.component';

const routes: Routes = [
  { path:'',component:HomeComponent },
  { path:'about',component:AboutusComponent },
  { path:'books',component:BooksComponent},
  { path:'project',children:[
      { path:'',component:ProjectlistComponent },
      { path:'projectspec/:id',component:SpecificProjectComponent },
      { path:'addproject',component:AddProjectComponent}
    ]
  },




  {
    path:'**',component:PagenotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
