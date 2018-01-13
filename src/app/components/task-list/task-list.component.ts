import { Component, OnInit, OnChanges } from '@angular/core';
import { TaskList } from '../../models/task-list';
import { TaskListService } from '../../services/taskList.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  DisplayState: boolean = false;
  SetState: boolean = false;
  EmptyState: boolean = true;

  taskList: TaskList;

  constructor(private taskListService: TaskListService) { }

  ngOnInit() {
  }

  ngOnChanges() {

  }

  addTask() {
    this.EmptyState = false;
    this.SetState = true;
    this.DisplayState = false;  
    
    this.taskList = new TaskList();
  }

  createTask() {
    this.EmptyState = false;
    this.SetState = false;
    this.DisplayState = true;

    this.taskListService.postTaskList(this.taskList).subscribe(result => {
      this.taskList = result;
    }
    )
  }

  deleteTask(taskListId) {
    this.EmptyState = true;
    this.SetState = false;
    this.DisplayState = false;

    this.taskListService.deleteTaskList(taskListId).subscribe(result => {
      this.taskList = result;
    })
  }
}
