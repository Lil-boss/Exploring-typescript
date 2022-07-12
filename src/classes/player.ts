export class player {
  constructor(
    private name: string,
    public age: number,
    readonly country: string
  ) {}

  play() {
    console.log(`${this.name} age is ${this.age}, from ${this.country}`);
  }
}
