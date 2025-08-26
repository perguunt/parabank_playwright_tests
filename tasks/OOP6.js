//2.Задача "Животные"
//Создайте базовый класс Animal с такими свойствами, 
// как name и age, и методами eat() и sleep(). 
// Создайте два класса-наследника: Dog и Cat, 
// которые наследуют свойства и методы от Animal, 
// но добавляют свои собственные особенности:
// например, метод bark() для Dog и метод meow() для Cat.

class Animal{

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        console.log(this.name, "eat");
    }

    sleep(){
        console.log("метод должен быть переопределен в дочернем классе");
    }
}

class Dog extends Animal{
    
    bark(){
        console.log(this.name, "barking");
    }
}

class Cat extends Animal{
    
    constructor(){
        super("Torwald", 15);
    }

    meow(){
        console.log(this.name, "meowing");
    }
}

const dog = new Dog("bob", 32);
dog.bark();

const cat = new Cat();
cat.meow();