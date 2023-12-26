import { Component, signal } from '@angular/core';
import { TodoService } from '../../../../services/todo.service';
import { Todo } from '../../../../data/interfaces/todo';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  protected todos = signal(this.todoService.getTodos());

  constructor(private todoService: TodoService) {}

  submit() {
    console.log(this.todos());
  }

  changed($event: any) {
    if ($event.target.defaultValue) {
      console.log($event.target.defaultValue);
      const newTodos: Todo[] = this.todos().map((data) =>
        data.id == $event.target.defaultValue
          ? { ...data, completed: $event.target.checked }
          : data
      );
      this.todos.set(newTodos);
    }
  }
}
