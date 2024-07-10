"use strict";
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
    set balance(amount) {
        if (amount < 0)
            throw new Error("Invalid value");
        this._balance += amount;
    }
}
let account = new Account(1, "Mogul", 1000);
//# sourceMappingURL=index.js.map