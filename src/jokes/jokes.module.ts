import { Module } from '@nestjs/common';
import { JokesController } from './controllers/jokes/jokes.controller';
import { JokesService } from './services/jokes/jokes.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [JokesController],
  providers: [JokesService]
})
export class JokesModule { }
