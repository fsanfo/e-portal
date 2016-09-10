import { Injectable } from '@angular/core';

@Injectable()

export class TodosService {
    todos = [
      {id: 1, title: 'Comprar Café', flag: false},
      {id: 2, title: 'Comprar Pão', flag: false},
      {id: 3, title: 'Lavar o Carro', flag: false},
    ];

    getTodos(){
      return this.todos;
    };

    createTodo(title: any){
      const nextId = this.todos.length + 1;
      this.todos.push({
        id: nextId,
        title: title,
        flag: false
      });
    }
}
