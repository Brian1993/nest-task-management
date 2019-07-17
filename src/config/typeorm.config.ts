import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import KEYS from './keys'

export const typeOrmCofig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: KEYS.DB_PASSWORD,
  database: 'task_mangement',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  // not recommanded at production mode
  synchronize: true
}
