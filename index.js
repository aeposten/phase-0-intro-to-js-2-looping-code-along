const thankYou = [];
function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
        thankYou.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return thankYou;
}
function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}