import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos$!: Observable<Todo[]>;

  constructor(private todoServices: TodoService) { }

  ngOnInit(): void {
    this.todos$ = this.todoServices.todos$;
  }

  onChangeTodoStatus(todo: Todo) {
    this.todoServices.changeTodoStatus(todo.id, todo.isCompleted);
  }

  onEditTodo(todo: Todo): void {
    this.todoServices.editTodo(todo.id, todo.content);
  }

  onDeleteTodo(todo: Todo): void {
    this.todoServices.deleteTodo(todo);
  }
}
