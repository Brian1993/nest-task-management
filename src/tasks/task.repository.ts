import { Repository, EntityRepository } from 'typeorm'
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskStatus } from './task-status.enum'

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {
  async creaTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const { title, description } = createTaskDto
    const task = new Task()
    task.title = title
    task.desciption = description
    task.status = TaskStatus.OPEN
    await task.save()
    return task
  }
}
