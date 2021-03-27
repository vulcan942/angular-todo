import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [TodoDashboardComponent, TaskCreateComponent, TaskComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule, ReactiveFormsModule],
})
export class HomeModule {}
