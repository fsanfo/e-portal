"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var TodosService = (function () {
    function TodosService() {
        this.todos = [
            { id: 1, title: 'Comprar Café', flag: false },
            { id: 2, title: 'Comprar Pão', flag: false },
            { id: 3, title: 'Lavar o Carro', flag: false },
        ];
    }
    TodosService.prototype.getTodos = function () {
        return this.todos;
    };
    ;
    TodosService.prototype.createTodo = function (title) {
        var nextId = this.todos.length + 1;
        this.todos.push({
            id: nextId,
            title: title,
            flag: false
        });
    };
    TodosService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TodosService);
    return TodosService;
}());
exports.TodosService = TodosService;
//# sourceMappingURL=todos.service.js.map