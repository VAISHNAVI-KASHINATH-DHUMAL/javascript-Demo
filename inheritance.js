/* JavaScript code example that demonstrates a basic bank account system with
   credit and debit transactions using inheritance */

class BankAccount {
    constructor(accountNumber, accountHolder, balance = 0) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    credit(amount) {
        this.balance += amount;
        console.log(`Credited ${amount} to ${this.accountHolder}'s account. New balance: $${this.balance}`);
    }

    debit(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Debited ${amount} from ${this.accountHolder}'s account. New balance: $${this.balance}`);
        } else {
            console.log(`Insufficient funds for ${this.accountHolder}'s account. Current balance: $${this.balance}`);
        }
    }
}

class SavingsAccount extends BankAccount {
    constructor(accountNumber, accountHolder, balance = 0, interestRate) {
        super(accountNumber, accountHolder, balance);
        this.interestRate = interestRate;
    }

    addInterest() {
        const interest = this.balance * (this.interestRate / 100);
        this.credit(interest);
        console.log(`Interest of $${interest.toFixed(2)} added to ${this.accountHolder}'s account.`);
    }
}

// Create a savings account
const savingsAccount = new SavingsAccount("SA12345", "John Doe", 1000, 2);

// Perform transactions
savingsAccount.credit(500);
savingsAccount.debit(200);
savingsAccount.addInterest();
