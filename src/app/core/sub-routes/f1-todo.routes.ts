import { Routes } from "@angular/router";
import { TodoComponent } from "../../features/f1-todo/pages/todo/todo.component";

export const todoRoutes: Routes = [
    {
        path: 'todo',
        component: TodoComponent,
        title: "Todo"
    }
];
