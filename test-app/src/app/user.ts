export class User {
  constructor(_name, _age, _email, _isActive, _longitude, _latitude, _photo) {
    this.name = _name;
    this.age = _age;
    this.email = _email;
    this.isActive = _isActive;
    this.longitude = _longitude;
    this.latitude = _latitude;
    this.picture = _photo;

  }

  public _id: string;
  public name: string;
  public longitude: number;
  public latitude: number;
  public email: string;
  public picture: string;
  public isActive: boolean;
  public age: number;
}
