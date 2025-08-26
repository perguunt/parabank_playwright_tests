//3. Задача "Электронные устройства"
// Создайте абстрактный класс ElectronicDevice с методом turnOn(). 
// Реализуйте подклассы Laptop и Smartphone, 
// добавьте уникальные методы для каждого из них, например, browseInternet() и makeCall().

class ElectronicDevice{
    
    turnOn(){
        throw new Error("turnOn() must be implemented in inherited classes");
    }
}

class Laptop extends ElectronicDevice{

    turnOn(){
        console.log("Laptop is turning on");
    }

    browseInternet(){
         console.log("open browser and surf in the Internet");
    }
}

class Smartphone extends ElectronicDevice{

        turnOn(){
        console.log("Smartphone is turning on");
    }

    makeCall(){
        console.log("make call to friend");
    }
}

const macbook = new Laptop();
macbook.turnOn();
macbook.browseInternet();

const phone = new Smartphone();
phone.turnOn();
phone.makeCall();