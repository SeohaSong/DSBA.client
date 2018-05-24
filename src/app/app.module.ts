import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MembersComponent } from './members/members.component';
import { ProfessorComponent } from './members/professor/professor.component';
import { OverallComponent } from './members/overall/overall.component';
import { StudentsComponent } from './members/students/students.component';
import { ResearchComponent } from './research/research.component';

import { DisplayService } from './_services/display.service';
import { DatabaseService } from './_services/database.service';
import { UtilsService } from './_services/utils.service';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProfessorComponent,
    OverallComponent,
    StudentsComponent,
    ResearchComponent,
    MembersComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'DSBA'}),
    AppRoutingModule,
  ],
  providers: [
    DisplayService,
    DatabaseService,
    UtilsService,
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
