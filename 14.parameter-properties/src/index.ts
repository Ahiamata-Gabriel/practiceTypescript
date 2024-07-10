// *** classes are blueprints for creating objects (like an object factory) ***
class Account {
  nickname?: string;

  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {}

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    this._balance += amount;
  }
}

let account = new Account(1, "Mogul", 1000);
