import { DataSource } from "apollo-datasource";
import { PokemonRecord } from "./models/record";

export interface Store {
  getPokemonRecords: () => PokemonRecord[];
  savePokemonRecords: (recordsToSave: PokemonRecord[]) => PokemonRecord[];
  deletePokemonRecords: (idsToDelete: string[]) => void;
}

class StoreImpl extends DataSource implements Store {
  private memory: PokemonRecord[] = [];

  constructor() {
    super();
  }

  private encodeRecord = (record: PokemonRecord): string =>
    JSON.stringify(record);

  private decodeRecord = (encodedRecord: string): PokemonRecord =>
    JSON.parse(encodedRecord);

  getPokemonRecords(): PokemonRecord[] {
    return this.memory;
  }

  savePokemonRecords(recordsToSave: PokemonRecord[]): PokemonRecord[] {
    const uniqueRecords: string[] = Array.from(
      new Set([
        ...this.memory.map(this.encodeRecord),
        ...recordsToSave.map(this.encodeRecord),
      ])
    );
    this.memory = [...uniqueRecords.map(this.decodeRecord)];
    return this.getPokemonRecords();
  }

  deletePokemonRecords(idsToDelete: string[]): void {
    this.memory = this.memory.filter(
      ({ id }) => idsToDelete.indexOf(id) === -1
    );
  }
}

export default new StoreImpl();
