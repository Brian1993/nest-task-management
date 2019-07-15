import { TypeOrmModuleOptions } from '@nestjs/typeorm'

export const typeOrmCofig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'taskmanagment',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  // not recommanded at production mode
  synchronize: true
}
