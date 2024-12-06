function foo(str) {
    const regex = /^[a-zA-Z_][a-zA-Z0-9_]*$/;
    return regex.test(str);
}

console.log("var_name\t"+foo("var_name"));   
console.log("_var123 \t"+ foo("_var123"));     
console.log("123var  \t" + foo("123var"));     
console.log("var namet\t" +foo("var name"));    
console.log("var-name\t" + foo("var-name"));    
console.log("\t\t\t" + foo( ""));           
