import { HttpService } from '@nestjs/axios';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { catchError, lastValueFrom, map } from 'rxjs';


@Injectable()
export class JokesService {
      constructor(private http: HttpService) { }

      async getJoke(url: string) {
            // const options: AxiosRequestConfig = {
            //       url: url,
            //       method: 'GET',
            //       headers: {
            //             'Accept': 'application/json',
            //             // "content-type": "application/json"
            //       }
            // };
            // const joke = await axios.default.request(options);
            // console.log(joke.data)
            // return joke.data;

            const config = { headers: { Accept: 'application/json' } };
            const res = await fetch(url, config);
            if (!res.ok) {
                  throw new Error('Something went wrong!');
            }
            const joke = await res.json();
            console.log(joke.data)
            return joke

      }

      async getCatFacts() {
            const request = this.http
                  .get('https://catfact.ninja/fact')
                  .pipe(map((res) => res.data?.fact))
                  .pipe(
                        catchError(() => {
                              throw new ForbiddenException('API not available');
                        }),
                  );

            const fact = await lastValueFrom(request);

            return {
                  data: {
                        fact,
                  },
            };
      }
}
