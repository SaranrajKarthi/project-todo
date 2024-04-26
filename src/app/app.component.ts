import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My Task List';
  taskList: string[] = [];


  ngOnInit(): void {
    if (localStorage.getItem('task')) {
      this.taskList = JSON.parse(localStorage.getItem('task'));
    }
  }
}
