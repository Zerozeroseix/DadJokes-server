import { ForbiddenException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, lastValueFrom, map } from 'rxjs';

@Injectable()
export class ApiService {
      constructor(private http: HttpService) { }
      async getBitcoinPriceUSD() {
            return this.http
                  .get('https://api.coindesk.com/v1/bpi/currentprice.json')
                  .pipe(
                        map((res) => res.data?.bpi),
                        map((bpi) => bpi?.USD),
                        map((usd) => {
                              return usd?.rate;
                        }),
                  )
                  .pipe(
                        catchError(() => {
                              throw new ForbiddenException('API not available');
                        }),
                  );
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
