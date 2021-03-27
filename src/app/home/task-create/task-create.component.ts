import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.scss'],
})
export class TaskCreateComponent implements OnInit {
  taskForm!: FormGroup;
  @Output() createTask = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {
    this.taskForm = new FormGroup({
      status: new FormControl(false),
      description: new FormControl('', Validators.required),
      isActive: new FormControl(true),
    });
  }

  onEnterPressed() {
    if (this.taskForm.valid) {
      this.createTask.emit(this.taskForm.value);
      this.resetTaskForm();
    }
  }
  resetTaskForm() {
    this.taskForm.get('status')?.setValue(false);
    this.taskForm.get('description')?.setValue('');
    this.taskForm.get('isActive')?.setValue(true);
  }
}
