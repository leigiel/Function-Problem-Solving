//3. Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.


function make_avg(array) {
    let arraySize = array.length;

    let summation = 0;
    for (const values of array) {
        
        summation = summation + values;
    }

    let average = summation / arraySize;
    
    return average
}
const newArray = [10,15,25,7,9,71]

let result = make_avg(newArray)
 
console.log("average: ", result)
