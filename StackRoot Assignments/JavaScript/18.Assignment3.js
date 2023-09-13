// Question 1
// Define a person class with properties like name and age. 
// Create instances of this class and display their information.   
// Define the Person class
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // Method to display information
    displayInfo() {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
  }
  
//   // Create instances of the Person class
  const person1 = new Person("Alice", 30);
  const person2 = new Person("Bob", 25);
  
//   // Display information about the persons
  person1.displayInfo();
  person2.displayInfo();
  

// Question 2 & Question 3
// Create a bank account class with methods for deposit, withdraw and checking the balance.
// Extend the Bank Account class to create a Savings Account class and
// implement an interest calculation method specific to savings account.

// Bank Account class
class BankAccount {
    constructor(accountNumber, accountHolder, balance = 0) {
      this.accountNumber = accountNumber;
      this.accountHolder = accountHolder;
      this.balance = balance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited $${amount}.\nNew balance: $${this.balance}`);
      } else {
        console.log("Invalid deposit amount.");
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawn $${amount}.\n New balance: $${this.balance}`);
      } else {
        console.log("Invalid withdrawal amount or insufficient balance.");
      }
    }
  
    checkBalance() {
      console.log(`Account Balance for ${this.accountHolder}: $${this.balance}`);
    }
  }
  
  // Savings Account class (extends BankAccount)
  class SavingsAccount extends BankAccount {
    constructor(accountNumber, accountHolder, balance = 0, interestRate) {
      super(accountNumber, accountHolder, balance);
      this.interestRate = interestRate;
    }
  
    calculateInterest() {
      const interest = (this.balance * this.interestRate) / 100;
      this.deposit(interest);
      console.log(`Interest calculated and deposited: $${interest}`);
    }
  }
  

  const bankAccount = new BankAccount(515307, "Som Paul");
  bankAccount.deposit(50000);
  bankAccount.withdraw(15000);
  bankAccount.checkBalance();
  
  const savingsAccount = new SavingsAccount(143900, "karna lak", 20000, 2);
  savingsAccount.checkBalance();
  savingsAccount.calculateInterest();
  savingsAccount.checkBalance();
  