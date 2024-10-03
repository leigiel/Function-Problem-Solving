//2. Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function oddEven(num){

    if(num % 2 == 1){
        num = num * 2;
        return num;
    }
    if(num % 2 == 0){
        num = num / 2;
        return num;
    }
    
}
let result;

result=oddEven(10);
console.log(result)

result=oddEven(5);
console.log(result)
