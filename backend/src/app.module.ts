import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Topic } from './topics/topic.entity';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from './users/user.module';
import { TopicModule } from './topics/topic.module';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profiles/profile.module';
import { CommentModule } from './comments/comment.module';
import { RepostModule } from './reposts/repost.module';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: 'materdei',
      signOptions: { expiresIn: '24h' }
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'newpass',
      database: 'prm_2023',
      synchronize: true,
      autoLoadEntities: true
    }),

    UserModule,
    TopicModule,
    AuthModule,
    ProfileModule,
    CommentModule,
    RepostModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
