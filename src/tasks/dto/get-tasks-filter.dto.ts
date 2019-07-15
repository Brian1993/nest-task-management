import { TaskStatus } from 'dist/tasks/task.model';

export class GetTasksFilterDto {
  status: TaskStatus
  search: string
}
