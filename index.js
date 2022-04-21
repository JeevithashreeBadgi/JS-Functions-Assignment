console.log("working");


//Problem 1
function narrow(){
    console.log("Function");
}
narrow();

//Problem 2
function add(){
    const val1 = 3;
    const val2 = 4;
    const res = val1 + val2;
    // return res;
    console.log(`Sum of ${val1}, ${val2} is ${res}`);
}
add();

//Problem 3
hello = () =>{
    console.log("Hello!");
}
hello();

//Problem 4
var x=21;
var girl = function (){
    console.log(x);
    var x= 20;
};
girl();

//Problem 5
var x= 21;
girl();
console.log(x);
function girl(){
    console.log(x);
    var x = 20;
};


//Problem 6
var x = 21;
// a();
// b();
// console.log(a);
 let a = function(){
    x = 20;
    console.log(x);
};
console.log(a);
a();

 let b = function(){
    x = 40;
    console.log(x);
};
b();


//Problem 7
function factorial (n) {
    let answer = 1 ;
    if ( n==0 || n==1){
        return answer;
    }
    else{
        for(var i = n; i>=1; i--){
            answer = answer * i;
        }
        return answer;
    }
}
let n = 4;
answer = factorial(n)
console.log(answer);




