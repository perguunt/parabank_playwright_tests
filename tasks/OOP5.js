//5. Задача "Музыкальные инструменты"
// Создайте базовый класс Instrument с методом play(). 
// Реализуйте подклассы Guitar и Piano, 
// которые переопределяют метод play() с различными звуками.

class Instrument{
    play(){
        console.log("play basic sound");
    }
}

class Guitar extends Instrument{
    play(){
        console.log("play Guitar sound");
    }
}

class Piano extends Instrument{
    play(){
        console.log("play Piano sound");
    }
}

const guitar = new Guitar();
guitar.play();

const piano = new Piano();
piano.play();