import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../models/task-list';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  DisplayState: boolean = false;
  SetState: boolean = false;
  EmptyState: boolean = true;

  taskList: TaskList[];

  constructor() { }

  ngOnInit() {
  }

  addTask() {
    this.EmptyState = false;
    this.SetState = true;
    this.DisplayState = false;        
  }

  createTask() {
    this.EmptyState = false;
    this.SetState = false;
    this.DisplayState = true;

    
  }

  deleteTask() {
    this.EmptyState = true;
    this.SetState = false;
    this.DisplayState = false;
  }

  // deleteFrequency(frequencyId) {
  //   this.registrationTypeService.deleteFrequency(this.locationId, this.tenantId, this.registrationTypeId, frequencyId).subscribe(result => {
  //     this.ngOnChanges();
  //   },
  //     (error: Response) => {
  //       this.errorModal.openWithError(error);
  //     });
  // }
}
