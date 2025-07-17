import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from '../typeorm/Todo';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private repo: Repository<Todo>,
  ) {}

  create(dto: CreateTodoDto) {
    const todo = this.repo.create(dto);
    return this.repo.save(todo);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  async update(id: number, dto: UpdateTodoDto) {
    await this.repo.update(id, dto);
    return this.repo.findOneBy({ id });
  }

  async remove(id: number) {
    await this.repo.delete(id);
    return `This action removes a #${id} todo`;
  }

  async toggle(id: number) {
    const todo = await this.repo.findOneBy({ id });
    if (!todo) {
      throw new Error(`Todo with id ${id} not found`);
    }
    await this.repo.update(id, { completed: !todo.completed });
  }
}
