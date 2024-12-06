function foo(str) {
    let bukv = str.match(/[a-zA-Z]/gu);
    let bukvKolvo = bukv ? bukv.length : 0;

    let chisla = str.match(/[0-9]/gu);
    let chislaKolvo = chisla ? chisla.length : 0;

    return {bukv: bukvKolvo, chisla: chislaKolvo}
}

let slovo="Avs12ad551zxc";
let result=foo(slovo)
console.log(slovo)
console.log(`Количество букв: ${result.bukv}`)
console.log(`Количество цифр: ${result.chisla}`)