function foo(str){
    let regex =   /^[a-zA-Z0-9]+$/;
    return regex.test(str);
}

console.log(foo("qwertyuiop"))
console.log(foo("qwer123tyuiop"))
console.log(foo("qwer!a"))
console.log(foo("qweryui"))
console.log(foo("qwertyu/.iop"))