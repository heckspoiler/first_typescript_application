import { faker } from '@faker-js/faker';

export class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }
  markerContent(): string {
    return `<div>
    <h2>This is the company ${this.companyName}</h2>
    <h3>and their catchphrase is ${this.catchPhrase}</h3>
    <p>and they want money</p>
    </div>`;
  }
}
