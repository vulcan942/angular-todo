import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;
  taskForm!: FormGroup;
  @Output() remove = new EventEmitter<any>();
  @Output() update = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {
    this.createTaskFrom();
  }

  createTaskFrom() {
    this.taskForm = new FormGroup({
      id: new FormControl(this.task.id),
      status: new FormControl(this.task.status),
      description: new FormControl(this.task.description),
      isActive: new FormControl(this.task.isActive),
    });
  }

  removeTask() {
    this.taskForm.get('isActive')?.setValue(false);
    this.remove.emit(this.taskForm.value);
  }

  updateTask() {
    this.update.emit(this.taskForm.value);
  }
}
