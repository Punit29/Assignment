function charCount(letter,str){
    var count=0;
    for(var i=0;i<str.length;i++){
        if(str.charAt(i)== letter){
            count++;
        }
    }
    return count;
}

let letter = "e";
let str = "Chamber of Secrets";
console.log(charCount(letter,str));

function addUp(n){
    var sum=0;
    for(var i=1;i<=n;i++){
        sum+=i;
    }
    return sum;
}

console.log(addUp(600));


function replaceVowel(str2){
    for(var i=0;i<str2.length;i++){
        if(str2.charAt(i)=='a'){
            str2 = str2.replace(/a/g,"1");
        }
        if(str2.charAt(i)=='e'){
            str2 = str2.replace(/e/g,"2");
        }
        if(str2.charAt(i)=='i'){
            str2 = str2.replace(/i/g,"3");
        }
        if(str2.charAt(i)=='o'){
            str2 = str2.replace(/o/g,"4");
        }
        if(str2.charAt(i)=='u'){
            str2 = str2.replace(/u/g,"5");
        }
    }
    return str2;
}

let str2 = "aeiou";
console.log(replaceVowel(str2));
