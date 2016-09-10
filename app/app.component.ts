import { Component } from '@angular/core';
import { TodosComponent } from './todos/todos.component';
import { UserComponent } from './user/user.component';

@Component({
    moduleId: module.id,  // sempre que o template estiver num arquivo separado
    selector: 'my-app',
    // template: `
    //     <h1>Todo List, mobile!</h1>
    //     <todos-main></todos-main>
    // `,
    templateUrl: 'app.component.html',
    directives: [TodosComponent, UserComponent]
})
export class AppComponent { }
