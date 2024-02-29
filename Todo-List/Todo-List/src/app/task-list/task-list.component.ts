import { Component, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  @Input() task:any;
  @Output() deltask:any;

  deleteTask(task:any) {
    const filter = this.task.filter((t: any) => t !== task)
    console.log("Filtered :----> ",filter);
    // this.deltask.emit(this.task);
  }
}
