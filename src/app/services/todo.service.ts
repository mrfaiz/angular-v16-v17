import { Injectable } from '@angular/core';
import { Todo } from '../data/interfaces/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [];
  constructor() {
    this.initTodos();
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  initTodos() {
    this.todos = [
      {
        id: 0,
        completed: false,
        title: 'Todo 1',
      },
      {
        id: 2,
        completed: false,
        title: 'Todo 3',
      },
      {
        id: 4,
        completed: true,
        title: 'Todo 5',
      },
      {
        id: 6,
        completed: false,
        title: 'Todo 7',
      },
      {
        id: 8,
        completed: false,
        title: 'Todo 9',
      },
      {
        id: 10,
        completed: false,
        title: 'Todo 11',
      },
      {
        id: 12,
        completed: false,
        title: 'Todo 13',
      },
    ];
  }
}
