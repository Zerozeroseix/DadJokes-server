import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { JokesService } from 'src/jokes/services/jokes/jokes.service';

@Controller('jokes')
export class JokesController {
      constructor(private readonly jokesService: JokesService) { }

      @Get()
      async getJoke() {
            let joke = null;
            try {
                  joke = await this.jokesService.getJoke('https://icanhazdadjoke.com/');
            }
            catch (err) {
                  throw new HttpException({
                        status: HttpStatus.INTERNAL_SERVER_ERROR,
                        error: err.message
                  }, HttpStatus.INTERNAL_SERVER_ERROR);
            }
            return joke
      }

      @Get('/cats')
      getCatFacts() {
            return this.jokesService.getCatFacts();
      }



}
