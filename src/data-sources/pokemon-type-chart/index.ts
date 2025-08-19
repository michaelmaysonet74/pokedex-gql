import { RESTDataSource } from "apollo-datasource-rest";
import { Request } from "./models/request";
import { Response } from "./models/response";

export class PokemonTypeChart extends RESTDataSource {
  constructor(baseURL = "http://localhost:4001") {
    super();
    this.baseURL = baseURL;
  }

  async getPokemonEffectiveness(request: Request): Promise<Response | null> {
    try {
      return await this.post("/pokemon/effectiveness", request);
    } catch (error) {
      console.error("Error fetching Pokemon type chart:", error);
      return null;
    }
  }
}
