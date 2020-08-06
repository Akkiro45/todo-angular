import { Component, OnInit } from '@angular/core';

import { Todo } from './todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  list: Todo[];
  
  constructor() { }

  ngOnInit(): void {
    this.list = [];
  }
  onAddTodo(todoText: string) {
    this.list.unshift({
      id: new Date().getTime(),
      value: todoText,
      isDone: false
    });
  }
  onUpdateTodo(id) {
    const todo = this.list.find(todo => todo.id === id);
    if(todo) {
      todo.isDone = !todo.isDone;
    }
  }
  onDeleteTodo(id) {
    this.list = this.list.filter(todo => todo.id !== id);
  }
}
