import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';

import { MemberComponent } from './member/member.component';
import { ProfessorComponent } from './member/professor/professor.component';
import { OverallComponent } from './member/overall/overall.component';
import { StudentsComponent } from './member/students/students.component';
import { AlumniComponent } from './member/alumni/alumni.component';

import { ResearchComponent } from './research/research.component'

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'member', component: MemberComponent,
    children: [
      { path: '', redirectTo: 'overall', pathMatch: 'full' },
      { path: 'overall', component:  OverallComponent},
      { path: 'professor', component:  ProfessorComponent},
      { path: 'students', component: StudentsComponent },
      { path: 'alumni', component: AlumniComponent }
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