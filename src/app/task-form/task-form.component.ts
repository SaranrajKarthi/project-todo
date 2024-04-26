import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  constructor() { }
  @Input() taskList;
  newList: string;
  ngOnInit(): void {
  }
  addTodo() {
    this.taskList.push(this.newList);
    localStorage.setItem('task', JSON.stringify(this.taskList));
    this.newList = '';
  }

}
