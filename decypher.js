//Allows digitalDecipger to be executed//
function digitalDecipher(eMessage,key){
//Command for the decypher//
    for(let i = 0; i < eMessage.length; i++){
        eMessage[i] -= parseInt(key.toString()[i % key.toString().length]);
    }
//Set string//
    const a = "abcdefghijklmnopqrstuvwxyz";
    var out = "";
    for(let i = 0; i < eMessage.length; i++){
        out += alphabet[eMessage[i] - 1];
    }
    return out;

}