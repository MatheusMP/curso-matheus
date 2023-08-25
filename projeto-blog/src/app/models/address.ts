import { Geo } from "./geo";

export class Address {

  public street: string
  public suite: string
  public city: string
  public zipcode: string
  public geo: Geo

  constructor(){
    this.street = ''
    this.suite = ''
    this.city = ''
    this.zipcode = ''
    this.geo = new Geo()
  }

}
