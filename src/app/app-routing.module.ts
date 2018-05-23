import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { MembersComponent } from './members/members.component';
import { ProfessorComponent } from './members/professor/professor.component';
import { OverallComponent } from './members/overall/overall.component';
import { StudentsComponent } from './members/students/students.component';
import { ResearchComponent } from './research/research.component'


const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'members', component: MembersComponent,
    children: [
      { path: '', redirectTo: 'overall', pathMatch: 'full' },
      { path: 'overall', component:  OverallComponent},
      { path: 'professor', component:  ProfessorComponent},
      { path: 'students', component: StudentsComponent },
      { path: 'alumni', component: StudentsComponent }
    ]
  },
  { path: 'research', component: ResearchComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
