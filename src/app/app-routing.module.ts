import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { MembersComponent } from './members/members.component';
import { OverallComponent } from './members/overall/overall.component';
import { ProfessorComponent } from './members/professor/professor.component';
import { StudentsComponent } from './members/students/students.component';
import { ResearchesComponent } from './researches/researches.component'
import { PublicationsComponent } from './publications/publications.component';
import { ProjectsComponent } from './projects/projects.component';
import { BoardComponent } from './board/board.component';


const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'members', component: MembersComponent,
    children: [
      { path: '', redirectTo: 'overall', pathMatch: 'full' },
      { path: 'overall', component: OverallComponent},
      { path: 'professor', component: ProfessorComponent},
      { path: 'students', component: StudentsComponent },
      { path: 'alumni', component: StudentsComponent }
    ]
  },
  { path: 'researches', component: ResearchesComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'publications', component: PublicationsComponent,
    children: [
      { path: 'international-journal', component: PublicationsComponent},
      { path: 'domestic-journal', component: PublicationsComponent},
      { path: 'international-conference', component: PublicationsComponent },
      { path: 'domestic-conference', component: PublicationsComponent }
    ]
  },
  { path: 'board', component: BoardComponent,
    children: [
      { path: 'news', component: BoardComponent },
      // { path: 'news/:id', component: BoardComponent }
    ]
  }
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
