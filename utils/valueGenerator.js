export default class ValueGenerator {
    constructor() {
        this.baseString = "qwertyuiopasdfghjklzxcvbnm1234567890";
    }

    valueGenerator(length = 6) {
        let value = '';
        for (let i = 0; i < length; i++) {
            let position = Math.floor(Math.random() * this.baseString.length);
            value += this.baseString[position];
        }
        return value;
    }

userDataGenerator() {
        const userData = {};

        userData.firstName = this.valueGenerator();
        userData.lastName = this.valueGenerator();
        userData.street = this.valueGenerator();
        userData.city = this.valueGenerator();
        userData.state = this.valueGenerator();
        userData.zipCode = this.valueGenerator();
        userData.phoneNumber = this.valueGenerator();
        userData.ssn = this.valueGenerator();
        userData.username = this.valueGenerator();
        userData.password = this.valueGenerator();

        return userData;
    }
}

// const value = new ValueGenerator();
// let randomValue = value.valueGenerator();
// let userData = value.userDataGenerator();
// console.log(userData);