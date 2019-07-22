export interface ServerConfig {
  port: 3000
}

export interface DbConfig {
  type: 'mysql'
  port: number
  database: string
  host: string
  username: string
  password: string
  synchronize: boolean
}

export interface JwtConfig {
  secret: string,
  expiresIn: number
}

export declare var process: {
  env: {
    RDS_HOST: string,
    RDS_PORT: number,
    RDS_USERNAME: string,
    RDS_PASSWORD: string,
    RDS_DB_NAME: string,
    TYPEORM_SYNC: boolean,
    JWT_SECRET: string
  }
}
