function foo(str) {
    let regex = /^(http:\/\/)([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\/[a-zA-Z0-9-._~:\/?#[\]@!$&'()*+,;=]*)?$/;
    return regex.test(str);
}

console.log(foo("http://example.com"));  
console.log(foo("example.com"));        
console.log(foo("http://example"));     
console.log(foo("example.com/abc/def")); 
console.log(foo("http:/example.com"));   
console.log(foo("http://example.com/abc/def?query=1#fragment"));

