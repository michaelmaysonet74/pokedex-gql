import { RESTDataSource } from "apollo-datasource-rest";
import { Request } from "./models/request";
import { Response } from "./models/response";

export class PokemonTypeChart extends RESTDataSource {
  constructor(baseURL = "http://localhost:4001") {
    super();
    this.baseURL = baseURL;
  }

  async getPokemonTypeChart(request: Request): Promise<Response> {
    return this.post("/pokemon/type-charts", request);
  }
}
