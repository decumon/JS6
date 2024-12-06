function foo(str){
    let regex =   /^[a-zA-Z]{10,}$/;
    return regex.test(str);
}

console.log(foo("qwertyuiop"))
console.log(foo("qwer123tyuiop"))
console.log(foo("qwer12za"))
console.log(foo("qweryui"))
console.log(foo("qwertyu/.iop"))