//Q1.

function realType(v){
    if(v===undefined)return 'undefined';
    else if(v=== null)return null;
    else{
        return v.constructor.name.toLowerCase();
    }
}

// console.log(realType(undefined));
// console.log(realType("a"));
// console.log(realType(1));
// console.log(realType(true));
// console.log(realType([]));
// console.log(realType(null));


//Q2
