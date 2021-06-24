



let number = Number(prompt('Введите число для проверки'));
let a = 'true';
if (number > 0) {

    for (let i = 2; i < number; i++) {
        console.log(i);
        if (number % i === 0) {
            console.log(i);
            a = 'false';
            break;

        }
    }






} else {
    a = 'false';
}
console.log(`${number} = ${a}`);

