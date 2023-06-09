import { Mappable } from "./CustomMap";
import { faker } from "@faker-js/faker";

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location:{
    lat: number;
    lng: number;
  };
  color: string = 'purple';

  constructor(){
    this.companyName= faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  markerContent(): string{
    return `
    <div>
      <h1>Company Name: ${this.companyName}</h1>
      <h2>Catch Phrase: ${this.catchPhrase}</h2>
    </div>
    `;
  }

}