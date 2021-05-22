function capitalization(str){ 
    let char = str.split(' ');
    for (let i = 0; i < char.length; i++){
      let capital = char[i].charAt(0).toUpperCase();
        char[i] = capital + char[i].substr(1);
    }
    return char.join(' ');
}

console.log(capitalization('i am pochi'));


//another way
function capitalization1(str){
let sentence = [];
let chars = str.split(' ');
for (let char of chars){
let splitChars = char.split('');
sentence.push(splitChars[0].toUpperCase() + splitChars.slice(1).join(''));
}
return sentence .join(' ');
}

console.log(capitalization1('i am koro'));

