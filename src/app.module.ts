import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './todo/entity/todo.entity';

@Module({
  imports: [
    TodoModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'nest',
      password: 'nest',
      database: 'nest',
      entities: [Todo],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
