//2.Задача "Графические формы"
// Создайте абстрактный класс Shape с методом draw(), 
// который будет выводить сообщение в консоль. 
// Реализуйте два подкласса Circle и Rectangle, 
// которые переопределяют метод draw() 
// и выводят уникальные сообщения, соответствующие их форме.

class Shape{
    draw(){
        console.log("draw any shape");
    }
}

class Circle extends Shape{
    draw(){
        console.log("draw Circle");
    }
}

class Rectangle extends Shape{
    draw(){
        console.log("draw Rectangle");
    }
}

const circle = new Circle();
const rectangle = new Rectangle();

circle.draw();
rectangle.draw();