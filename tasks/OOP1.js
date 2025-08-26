//1.Задача "Управление светом"
//Создайте класс Light, который будет представлять лампу. 
// У лампы есть приватное поле isOn (состояние лампы, включена или выключена). 
// Реализуйте методы:
// turnOn(), чтобы включить свет.
// turnOff(), чтобы выключить свет.

class Light {
    #isOn;

    constructor(){
        this.#isOn = false;
    }

    turnOn(){
        this.#isOn = true;
        console.log("Light is on");
    }

    turnOff(){
        this.#isOn = false;
        console.log("Light is off");
    }

    checkState(){
        if (this.#isOn)
            console.log("Light is on")
        else
            console.log("Light is off")
    }
}

let lamp = new Light();

lamp.turnOn();
lamp.turnOff();
lamp.checkState();

console.log("test");