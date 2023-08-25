import { Company } from "./company"
import { Address } from "./address"

export class Users {

  public id: number
  public name: string
  public username: string
  public email: string
  public phone: string
  public website: string
  public address: Address
  public company: Company

  constructor(){
    this.id = 0
    this.name = ''
    this.username = ''
    this.email = ''
    this.phone = ''
    this.website = ''
    this. address = new Address()
    this.company = new Company()
  }

}