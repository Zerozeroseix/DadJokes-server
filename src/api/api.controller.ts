import { Controller, Get } from "@nestjs/common";
import { ApiService } from "./api.service";

@Controller("api")
export class ApiController {
      constructor(private apiService: ApiService) { }

      @Get("price/bitcoin")
      getBitcoinPrice() {
            return this.apiService.getBitcoinPriceUSD();
      }

      @Get('facts/cats')
      getCatFacts() {
            return this.apiService.getCatFacts();
      }
}
