//! ===================================================
//!                 TWS - 2
//! ===================================================

//https://w3resource.com/javascript-exercises/oop/javascript-oop-exercise-11.php

//? ANSWER 1 :

//? ANSWER 2 :
//* WHAT IS NODEJS :
//!Node.js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser.  With this help, you can create a dynamic web page. it creates an environment to run JavaScript in the server. You can use JavaScript as a server-side language in Node js.

//* WHAT CAN WE DO WITH NODEJS:
//! Through Node js, you can generate dynamic page content.
//! Through this, you can create, open, read, write, delete and close the file, etc.
//! For Node js, you can add, delete, modify data in your database.
//! With this help, you can create an ultra-fast application.
//! It can be used to create server-side applications.
//! Performing CRUD operations on File and Database servers is very easy.
//! It is also very easy to learn.
//! With its help, you can handle your project easily.
//! In this, you can also create your own custom modules and use them in your project.

//* WHY WE USE NODEJS:
//! Node js uses Asynchronous Programming. This language is non-blocking.The speed of fetching data of Node js is high.

//? ANSWER 3.
//! name class
class Person {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    return this.name;
  }
}

//! bank account class

class BankAccount extends Person {
  constructor(name, balance, accountNumber) {
    super(name);
    this.balance = balance;
    this.accountNumber = accountNumber;
  }
  #balance() {}

  deposit(money) {
    this.balance += money;
    console.log(
      `Money $${money} deposited into account ${this.accountNumber}.`
    );
  }

  withdraw(money) {
    if (this.balance >= money) {
      this.balance -= money;
      console.log(
        `Withdraw is sucsessfull new balance is ${this.balance} for accoutn ${this.accountNumber}`
      );
    } else {
      console.log(`Insufficient balance in account ${this.accountNumber}.`);
    }
  }

  displayBalance() {
    console.log(`Account ${this.accountNumber} balance: $${this.balance}`);
  }

  transfer(money, recipientAccount) {
    if (money <= this.balance) {
      this.balance -= money;
      recipientAccount.deposit(money);
      console.log(
        `Money $${money} transferred from account ${this.accountNumber} to account ${recipientAccount.accountNumber}.`
      );
    } else {
      console.log(
        `Insufficient balance in account ${this.accountNumber} for transfer.`
      );
    }
  }
}

const account1 = new BankAccount("SB-012", "Karishma Hedy", 2000);
const account2 = new BankAccount("SB-019", "Phokas Intan", 3000);

// Transactions on the bank accounts
account1.displayBalance(); // Account SB-012 balance: $2000
account2.displayBalance(); // Account SB-019 balance: $3000

account1.deposit(500); // Amount $500 deposited into account SB-012.
account1.displayBalance(); // Account SB-012 balance: $2500

account1.withdraw(200); // Amount $200 withdrawn from account SB-012.
account1.displayBalance(); // Account SB-012 balance: $2300

account1.transfer(700, account2); // Amount $700 transferred from account SB-01 to account SB-019.
account1.displayBalance(); // Account SB-012 balance: $1600
account2.displayBalance(); // Account SB-019 balance: $3700
