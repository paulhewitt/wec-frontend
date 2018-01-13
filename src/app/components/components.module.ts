import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, Router, ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { FeatureSelectorComponent } from './feature-selector/feature-selector.component';
import { TaskListComponent } from './task-list/task-list.component';

export const routes: Routes = [
    {
      path: 'select',
      component: FeatureSelectorComponent,
      data: {
        title: 'Select Features'
      }
    },
    // {
    //   path: '',
    //   component: ListCompaniesComponent,
    //   data: {
    //     title: 'Companies'
    //   }
    // }
    
  ];
  
  @NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(routes),
      FormsModule
    ],
    declarations: [FeatureSelectorComponent, TaskListComponent]
  })
  export class ComponentModule { }