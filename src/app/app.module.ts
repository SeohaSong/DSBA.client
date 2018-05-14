import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MemberComponent } from './member/member.component';
import { ProfessorComponent } from './member/professor/professor.component';
import { OverallComponent } from './member/overall/overall.component';
import { StudentsComponent } from './member/students/students.component';
import { AlumniComponent } from './member/alumni/alumni.component';

import { MemberService } from './member/member.service';
import { ResearchComponent } from './research/research.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProfessorComponent,
    MemberComponent,
    OverallComponent,
    StudentsComponent,
    AlumniComponent,
    ResearchComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'DSBA'}),
    AppRoutingModule
  ],
  providers: [
    MemberService
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
