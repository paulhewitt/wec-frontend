import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo';


@Component({
    selector: 'app-root',
    templateUrl: './todo-list.html',
    styleUrls: ['./todo-list.css']
})
export class TodoListComponent implements OnInit {

    todos: Todo[] = new Array<Todo>();
    addNew = false

    constructor(private todoService: TodoService) { }

    ngOnInit() {
        this.todoService.getMine().subscribe(res => {
            this.todos = res;
        });
    }

    deleteTodo(todoId) {
        this.todoService.delete(todoId).subscribe(res => {
            console.log(res)
        });
        this.todos = this.todos.filter(todo => {
            return todo._id != todoId;
        })
    }

    addTodo(todo) {
        this.todos.push(todo);
        this.addNew = false;
    }
}
