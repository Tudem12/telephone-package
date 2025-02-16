class Telephone {
    constructor() {
        this.phoneNumbers = new Set(); // Store phone numbers
        this.observers = new Set(); // Store observers
    }

    // Method to add a new phone number
    addPhoneNumber(number) {
        this.phoneNumbers.add(number);
        console.log(`Phone number ${number} added.`);
    }

    // Method to remove a phone number
    removePhoneNumber(number) {
        if (this.phoneNumbers.has(number)) {
            this.phoneNumbers.delete(number);
            console.log(`Phone number ${number} removed.`);
        } else {
            console.log(`Phone number ${number} not found.`);
        }
    }

    // Method to dial a phone number
    dialPhoneNumber(number) {
        if (this.phoneNumbers.has(number)) {
            console.log(`Dialing ${number}...`);
            this.notifyObservers(number);
        } else {
            console.log(`Cannot dial ${number}. Number not found.`);
        }
    }

    // Method to add an observer
    addObserver(observer) {
        this.observers.add(observer);
    }

    // Method to remove an observer
    removeObserver(observer) {
        this.observers.delete(observer);
    }

    // Notify observers when a number is dialed
    notifyObservers(number) {
        this.observers.forEach(observer => observer.update(number));
    }
}

// Example observer class
class CallLogger {
    update(number) {
        console.log(`Logging call to: ${number}`);
    }
}

// Example usage
const phone = new Telephone();
const logger = new CallLogger();

phone.addObserver(logger);
phone.addPhoneNumber("123-456-7890");
phone.dialPhoneNumber("123-456-7890"); // Should notify observer
phone.removePhoneNumber("123-456-7890");
phone.dialPhoneNumber("123-456-7890"); // Should not be able to dial
