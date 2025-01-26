import { Component } from '@angular/core';
import { TodoComponent } from './todo/todo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>My To-Do List</h1>
    <app-todo></app-todo>
  `,
  imports: [TodoComponent],
})
export class AppComponent {}