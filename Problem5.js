//5. Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function odd_even(num){

    if(num % 2 == 0){
        return "Even";
    }
    
    if(num % 2 == 1){
        return "Odd";
    }
   
    
}

let result;
result = odd_even(264)
console.log(result)

result= odd_even(393);
console.log(result)