import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../services/user.service';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo';


@Component({
    selector: 'todo-component',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

    @Input() todo: Todo;
    @Output() onDeleteSelf = new EventEmitter<Number>();

    constructor(private todoService:TodoService) {}

    ngOnInit() {
    }

    deleteSelf() {
        this.onDeleteSelf.emit(this.todo._id);
    }
}
