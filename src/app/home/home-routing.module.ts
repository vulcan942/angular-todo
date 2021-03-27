import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';

const routes: Routes = [
  {
    path: 'todo',
    component: TodoDashboardComponent,
  },
  {
    path: '**',
    redirectTo: 'todo',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
