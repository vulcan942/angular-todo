import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss'],
})
export class TodoDashboardComponent implements OnInit {
  public tasks!: Task[];
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  public createTask(task: any) {
    this.todoService.createTask(task);
    this.getTasks();
  }

  private getTasks() {
    this.tasks = this.todoService.getTasks();
    console.log(this.tasks);
  }
  public updateTask(task: Task) {
    this.todoService.updateTask(task.id, task);
    this.getTasks();
  }
}
