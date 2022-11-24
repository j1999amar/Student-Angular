import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentEntryComponent } from './student-entry/student-entry.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StudentSearchComponent } from './student-search/student-search.component';
import { Routes, RouterModule } from '@angular/router';

const myRouter:Routes=[{
  path:"",
  component:StudentEntryComponent
},
{
  path:"search",
  component:StudentSearchComponent
}
]

@NgModule({
  declarations: [
    AppComponent,
    StudentEntryComponent,
    NavbarComponent,
    StudentEntryComponent,
    StudentSearchComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule.forRoot(myRouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
