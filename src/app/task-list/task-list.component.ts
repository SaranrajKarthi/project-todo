import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @Input() tasks;
  constructor() { }

  ngOnInit(): void {
  }
  deleteTask(i) {
    this.tasks.splice(i, 1);
    localStorage.setItem('task', JSON.stringify(this.tasks));
  }

}
