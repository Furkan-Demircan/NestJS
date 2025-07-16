import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './interfaces/todo.interface';
import { todo } from 'node:test';

interface newTodo {
  id: number;
  title: string;
  completed?: boolean;
}

@Injectable()
export class TodoService {
  private todos: Todo[] = [];

  create(createTodoDto: CreateTodoDto) {
    const newTodo: newTodo = {
      id: this.todos.length + 1,
      completed: false,
      title: createTodoDto.title,
    };
    this.todos.push(newTodo);
    return 'Todo created successfully';
  }

  findAll() {
    return this.todos;
  }

  findOne(id: number) {
    const todo = this.todos.find((todo) => todo.id === id);
    if (!todo) {
      return `Todo with id ${id} not found`;
    }
    return todo;
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    const todo = this.todos.find((todo) => todo.id == id);
    if (!todo) {
      return `Todo with id ${id} not found`;
    }
    todo.title = updateTodoDto.title || todo.title;
    todo.completed = updateTodoDto.completed
      ? updateTodoDto.completed
      : todo.completed;
  }

  remove(id: number) {
    const todo = this.todos.find((todo) => todo.id === id);
    if (!todo) {
      return `Todo with id ${id} not found`;
    }
    this.todos = this.todos.filter((todo) => todo.id !== id);
    return `Todo with id ${id} removed successfully`;
  }
}
