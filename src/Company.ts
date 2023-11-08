import { faker } from "@faker-js/faker";

export class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

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