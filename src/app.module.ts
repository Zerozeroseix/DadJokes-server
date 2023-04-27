import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { JokesModule } from './jokes/jokes.module';
import { ApiModule } from './api/api.module';


@Module({
  imports: [UsersModule, JokesModule, ApiModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
