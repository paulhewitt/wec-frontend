import { Component, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { TodoService } from '../../../services/todo.service';
import { Todo } from '../../../models/todo'


@Component({
    selector: 'new-todo',
    templateUrl: './new-todo.html',
    styleUrls: ['./new-todo.css']
})
export class NewTodoComponent {

    @Output() onAddTodo = new EventEmitter<Todo>();
    todo = {
        title: "",
        body: ""
    }

    constructor(private todoService: TodoService) { }

    addTodo() {
        this.todoService.create(this.todo).subscribe(res => {
            console.log(res);
            this.onAddTodo.emit(res);
        });
    }
}
