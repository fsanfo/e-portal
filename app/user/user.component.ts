import { Component } from '@angular/core';

import { UserService } from './user.service';

@Component({
  moduleId: module.id,  // sempre que o template estiver num arquivo separado
  selector: 'user-component',
  templateUrl: 'user.component.html',
  providers: [UserService]
})
export class UserComponent {

  userService:any;

  constructor(userService: UserService) {
    this.userService = userService;
  }

}
