import { Component } from '@angular/core';

import { TodosService } from './todos.service';

@Component({
  moduleId: module.id,  // sempre que o template estiver num arquivo separado
  selector: 'todos-main',
  templateUrl: 'todos.component.html',
  providers: [TodosService]
})

export class TodosComponent {
  todoTitle = "";
  todos:any;
  todosService:any;

  constructor(todosService: TodosService){
    this.todosService = todosService;
    this.todos = this.todosService.getTodos();
  }

  newTodo() {
    if (this.todoTitle) {
      this.todosService.createTodo(this.todoTitle);
      this.todoTitle = "";
    }
  }
}
