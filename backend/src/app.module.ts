import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfileController } from './controllers/profile.controller';
import { ProfileService } from './services/profile.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { User } from './entities/user.entity';
import { TopicService } from './services/topic.service';
import { TopicController } from './controllers/topic.controller';
import { Topic } from './entities/topic.entity';
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: 'materdei',
      signOptions: {expiresIn: '24h'}
    }),
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '',
    database: 'prm_2023',
    synchronize: true,
    entities: [User, Topic]
  }),
  TypeOrmModule.forFeature([User, Topic])
],
  controllers: [
    AppController, 
    ProfileController, 
    UserController,
    TopicController,
    AuthController],

  providers: [AppService,
    ProfileService,
    UserService,
    TopicService,
    AuthService],
})
export class AppModule {}
