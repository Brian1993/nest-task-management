import { Injectable, NotFoundException } from '@nestjs/common'
import { TaskStatus } from './task-status.enum'
import { CreateTaskDto } from './dto/create-task.dto'
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto'
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository)
    private taskRepository: TaskRepository
  ) {}
  // getAllTasks(): Task[] {
  //   return this.tasks
  // }

  // getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
  //   const { status, search } = filterDto
  //   let tasks = this.getAllTasks()

  //   if (status) {
  //     tasks = tasks.filter(task => task.status === status)
  //   }

  //   if (search) {
  //     tasks = tasks.filter(task =>
  //       task.title.includes(search) || task.description.includes(search)
  //     )
  //   }

  //   return tasks
  // }

    async getTaskById(id: number): Promise<Task> {
      const found = await this.taskRepository.findOne(id)
      if (!found) {
        throw new NotFoundException(`Task with ID ${id} not found`)
      }
      return found
    }
  // getTaskById(id: string): Task {
  //   const found = this.tasks.find(task => task.id === id)

  //   if (!found) {
  //     throw new NotFoundException(`Task with ID ${id} not found`)
  //   }
  //   return found
  // }

    createTask(createTaskDto: CreateTaskDto): Promise<Task> {
      return this.taskRepository.creaTask(createTaskDto)
    }

    async deleteTask(id: number): Promise<void> {
      const result = await this.taskRepository.delete(id)
      if (result.affected === 0) {
        throw new NotFoundException(`Task with ID ${id} not found`)
      }
    }

  // updateTask(id: string, status: TaskStatus) {
  //   const task = this.getTaskById(id)
  //   task.status = status
  //   return task
  // }
}
