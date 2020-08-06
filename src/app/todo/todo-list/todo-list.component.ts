import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() todos: Todo[];
  @Output() onUpdateTodo = new EventEmitter();
  @Output() onDeleteTodo = new EventEmitter();
  constructor() { }
  ngOnInit(): void {
  }

}
