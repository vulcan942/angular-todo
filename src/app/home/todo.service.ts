import { Injectable } from '@angular/core';
import { Task } from './models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  tasks: Task[] = [];
  constructor() {}

  public createTask(task: any) {
    const newTask = new Task(task, this.tasks.length);
    this.tasks.push(newTask);
  }

  public getTasks() {
    return this.tasks;
  }

  updateTask(id: number, task: Task) {
    this.tasks[id] = new Task(task, id);
  }
}
