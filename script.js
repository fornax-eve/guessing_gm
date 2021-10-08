'use strict';

const lert = alert("Загадывание случайного числа от 1 до 100");

const isNumber = function (num) {
    let num1 = +num.trim();
    if (num1) {
        return !isNaN(parseFloat(num) && isFinite(num))
    }
    ;
    return false;
}
const guessing = function() {

    const random_number = Math.round(100 * Math.random())
    let client_lives = 10;

    const guess = function (random) {
        console.log(random)
        let my_number = prompt("Угадай число от 1 до 100?");
        if (my_number) {
            if (isNumber(my_number)) {
                switch (true) {
                    case (my_number > random) && (my_number <= 100) :
                        client_lives--;
                        if (client_lives > 0) {
                            alert(`Загаданное число меньше, осталось попыток ${client_lives}`);
                            guess(random_number);
                        } else {
                            let conf = confirm("Попытки закончились, хотите сыграть еще?");
                            if (conf) {
                                guessing()
                            } else {
                                alert("Вы проиграли. Спасибо за игру!")
                            }
                        }
                        break;
                    case (my_number < random) && (my_number > 0) :
                        client_lives--;
                        if (client_lives > 0) {
                            alert(`Загаданное число больше, осталось попыток ${client_lives}`);
                            guess(random_number);
                        } else {
                            let conf = confirm("Попытки закончились, хотите сыграть еще?");
                            if (conf) {
                                guessing()
                            } else {
                                alert("Вы проиграли. Спасибо за игру!")
                            }
                        }
                        break;
                    case my_number == random :
                        let conf = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?")
                        if (conf) {
                            guessing()
                        } else {
                            alert("Спасибо за успешную игру!")
                        }
                        break;
                    case my_number > 100:
                        alert('Вы ввели недопустимое значение');
                        guess(random_number);
                        break;
                    case my_number < 1:
                        alert('Вы ввели недопустимое значение');
                        guess(random_number);
                        break;
                }
            } else {
                alert("Введите пожалуйста число")
                guess(random_number)
            }
        } else if ((typeof my_number) === 'string' ) {
            alert('Введите хоть что-то пожалуйста!');
            guess(random_number);
        } else {
            alert("Game over")
        }
    }

    guess(random_number);
};

guessing();
