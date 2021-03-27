export class Task {
  public id: number;
  public status: boolean;
  public description: string;
  public isActive: boolean;

  constructor(task: any, id: number) {
    this.id = id;
    this.status = task ? task.status : null;
    this.description = task ? task.description : null;
    this.isActive = task ? task.isActive : null;
  }
}
