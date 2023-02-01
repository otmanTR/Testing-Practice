const reverseString = (string) => {
    let newStreng = "";
    for (let i = string.length -1; i >= 0; i -= 1){
        newStreng += string[i];
    }
    return newStreng;
}

module.exports = reverseString;