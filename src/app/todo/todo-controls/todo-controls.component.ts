import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-controls',
  templateUrl: './todo-controls.component.html',
  styleUrls: ['./todo-controls.component.css']
})
export class TodoControlsComponent implements OnInit {

  todoText: string = '';
  @Output() onAddTodo = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onAdd() {
    if(this.todoText !== '') {
      this.onAddTodo.emit(this.todoText);
      this.todoText = '';
    }
  }
}
