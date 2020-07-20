//Q1.
function specialReverse(str,letter){
    let array = str.split(' ');
    let strComplete= "";
    for(var i=0;i<array.length;i++){
        let arr = array[i].split('');
        let reversedArray = arr;
        if(arr[0]==letter){
            reversedArray = arr.reverse().join('');
        }
        else{
            reversedArray = arr.join('');
        }
        strComplete  = strComplete + reversedArray + ' ';
    }
    return strComplete;
}

let str = "first man to walk on the moon";
let letter = "m";
console.log(specialReverse(str,letter));

//Q2.
function testJackpot(slots){
    for(var i=0;i<slots.length -1;i++){
        if(slots[i]!=slots[i+1]){
            return false;
        }
        else{
            return true;
        }
    }
}

//let slots = ["@","@","@","@"];
// let slots = ["&&","&","&&&","&&&&"];
let slots = ["abc","abc","abc","abc"];
console.log(testJackpot(slots));

//Q3
function removeDups(a){
    let a1 = Array.from(new Set(a));
    return a1;
}
//let a = [1,0,1,0];
//let a = ["the", " big", "cat"];
let a = ["John", "taylor", "John"];
console.log(a);
console.log(removeDups(a));
