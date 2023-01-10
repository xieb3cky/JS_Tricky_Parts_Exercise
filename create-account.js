function createAccount(pin, amount = 0) {
    return {
        checkBalance(userPin) {
            if (userPin !== pin) {
                return "Invalid PIN.";
            }
            return `$${amount}`;
        },
        deposit(userPin, addedAmount) {
            if (userPin !== pin) {
                return "Invalid PIN.";
            }
            amount += addedAmount;
            return `Succesfully deposited $${addedAmount}. Current balance: $${amount}.`;
        },
        withdraw(userPin, withdrawAmt) {
            if (userPin !== pin) {
                return "Invalid PIN.";
            }
            if (withdrawAmt > amount) {
                return "Withdrawal amount exceeds account balance. Transaction cancelled.";
            }
            amount -= withdrawAmt;
            return `Succesfully withdrew $${withdrawAmt}. Current balance: $${amount}.`;
        },
        changePin(userPin, newPin) {
            if (userPin !== pin) return "Invalid PIN."
            pin = newPin;
            return "PIN successfully changed!"
        }
    }

}
module.exports = { createAccount };
