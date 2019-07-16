import { Module } from '@nestjs/common'
import { TasksModule } from './tasks/tasks.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { typeOrmCofig } from './config/typeorm.config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmCofig),
    TasksModule,
    AuthModule
  ]
})

export class AppModule { }
