class BankAccount {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdrawal(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log("withdrawal complete");
        }
        else {
            console.log("insufficient amount");
        }
    }

    getAccountInfo() {
        return `Account Number: ${this.accountNumber}\nCurrent Balance: $${this.balance.toFixed(2)}`;
    }
}

const bankAccount = new BankAccount("123456789", 1000);
const regelAccount = new BankAccount("987654321", 6000);

console.log(bankAccount.getAccountInfo());
console.log(regelAccount.getAccountInfo());

regelAccount.deposit(500);
console.log(regelAccount.getAccountInfo());

regelAccount.withdrawal(6599);
console.log(regelAccount.getAccountInfo());

bankAccount.deposit(10000);
console.log(bankAccount.getAccountInfo());