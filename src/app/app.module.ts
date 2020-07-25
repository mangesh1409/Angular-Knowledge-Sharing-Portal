import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BooksComponent } from './books/books.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectlistComponent } from './projects/projectlist/projectlist.component';
import { ProjectDetailsService } from './projects/project-details.service';
import { SpecificProjectComponent } from './projects/specific-project/specific-project.component';
import { AddProjectComponent } from './projects/add-project/add-project.component';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, FooterComponent, HomeComponent, AboutusComponent,
    BooksComponent, PagenotfoundComponent, ProjectsComponent, ProjectlistComponent,
    SpecificProjectComponent, AddProjectComponent ],
  imports: [
    BrowserModule,HttpClientModule,ReactiveFormsModule,
    AppRoutingModule,FormsModule
  ],
  providers: [ProjectDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
