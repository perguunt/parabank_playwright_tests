//2.Задача "Автоматический дверной замок"
// Создайте класс DoorLock, 
// который имеет приватное поле isLocked (состояние замка). 
// Реализуйте публичные методы lock() и unlock(), 
// которые изменяют состояние замка.

class DoorLock{
    #isLocked;

    constructor(){
        this.#isLocked = false;
    }

    lock(){
        this.#isLocked = true;
        console.log("dorr is locked");
    }

    unlock(){
        this.#isLocked = false;
        console.log("dorr is unlocked");
    }

    doorState(){
        if (this.#isLocked){
            console.log("the door is locked");
        } else{
            console.log("the door is unlocked");
        }
    }
}

const door = new DoorLock();
door.doorState();
door.lock();
door.unlock();
door.doorState();
