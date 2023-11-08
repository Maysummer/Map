import { faker } from "@faker-js/faker";
import { MapInstance } from "./CustomMap";

export class Company implements MapInstance{
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'blue';

  constructor() {
    this.companyName= faker.company.name();
    this.catchPhrase= faker.company.catchPhrase();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude()
    }

  }

  markerContent(): string {
    return `
      <div>
        <h3>Company name: ${this.companyName}</h3>
        <h5>Catchphrase: ${this.catchPhrase}</h5>
      </div>
   `;
  }
}