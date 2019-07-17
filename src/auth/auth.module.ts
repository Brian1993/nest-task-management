import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserRepository } from './user.repository'
import KEYS from '../config/keys'
@Module({
  imports: [
    JwtModule.register({
      secret: KEYS.JWT_SECRET
    }),
    TypeOrmModule.forFeature([ UserRepository ])
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
