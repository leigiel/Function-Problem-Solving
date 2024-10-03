//4. Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string. 

function count_zero(binaryString) {

    let count = 0;

    for (let array of binaryString) {

        if (array === '0') {
            count++;
        }

    }

    return count;
}
const newBinaryString = "1010100010"

let zeros = count_zero(newBinaryString);

console.log("zeros: ", zeros);
