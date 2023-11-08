import { faker } from "@faker-js/faker";
import { MapInstance } from "./CustomMap";

export class User implements MapInstance {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';

  constructor() {
    this.name = faker.person.firstName();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude()
    }
  }

  markerContent(): string {
    return `User name: ${this.name}`
  }
}
