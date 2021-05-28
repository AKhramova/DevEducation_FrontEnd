function generate(p, q, e){
    var n = p*q; 
    var Fn = (p-1)*(q-1);
    var d;
    k = Math.random(1, 10);
    for( var i = 1;  ; i++){
       if(Number.isInteger(Math.pow(e, -1) * (Fn* i + 1))){
           d = Math.pow(e, -1) * (Fn* i + 1);
           break
       }
    }
    return [[e, n], [d, n]];
    
}

function encryption(message, key) {
    var encrypt = Math.pow(message, key[0]) % key[1];
    return encrypt;
}

function decryption(mes, key){
    var decrypt = 1;
    for (let i = 0; i < key[0]; i++) {
        decrypt = (decrypt * mes) % key[1]
    }
    return decrypt;
}

module.exports = {
    generate,
    encryption,
    decryption
}