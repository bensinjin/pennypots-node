function Pot(balance) {
  this.balance = balance;
}

Pot.prototype.getBalance = function() {
    return balance;
}

Pot.prototype.setBalance = function(balance) {
  this.balance = balance;
}

Pot.prototype.incrementBalance = function(amount) {
    this.balance += amount;
}

module.exports = Pot;
