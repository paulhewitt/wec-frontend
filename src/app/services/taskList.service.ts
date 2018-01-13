import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { UserService } from "./user.service";
import { TaskList } from "../models/task-list";

@Injectable()
export class TaskListService {

    constructor(private http: HttpClient,
        private userService: UserService) { }

    public postTaskList(taskList: TaskList): Observable<TaskList> {
        return this.http.post<TaskList>('http://localhost:3000', taskList)
    }

    public getTaskList(taskListId: number): Observable<TaskList> {
        return this.http.get<TaskList>('http://localhost:3000')
    }

    public putTaskList(taskListId: number, taskList: TaskList) : Observable<TaskList> {
        return this.http.put<TaskList>('http://localhost:3000', taskList);   
    }

    public deleteTaskList(taskListId: number): Observable<any>  {
        return this.http.delete<any>('http://localhost:3000')
    }

}