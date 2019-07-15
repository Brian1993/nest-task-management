import { Module } from '@nestjs/common'
import { TasksModule } from './tasks/tasks.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { typeOrmCofig } from './config/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmCofig),
    TasksModule
  ]
})

export class AppModule { }
