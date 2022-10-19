import { ProfileModel } from "src/app/models/Models/ProfileModel";

export class PokedexResponse {
  count: number | undefined;
  next: string | undefined;
  previous: string | undefined;
  results: ProfileModel[] = [];
}
