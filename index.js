// Task-1: By multiplying the number of values ​​by 3, then adding 10, then dividing by 2, then subtracting 5, the output is returned.


function mindGame(number) {
    const firstCalculation = number * 3;
    const secondCalculation = firstCalculation + 10;
    const thirdCalculation = secondCalculation / 2;
    const final = thirdCalculation - 5;
    return final;
}

const result = mindGame(5);



// Task-2: Output based on the total number of characters in the string. Output will be 'even' or 'odd'.


function evenOdd(str) {
    if (str.length % 2) {
        console.log('odd');
    }
    else {
        console.log('even');
    }
}

evenOdd('Phero');



// Task-3: Find the difference between the input value and 7. If this difference is smaller than 7, you must return the subtraction.Otherwise you must return double of the input.Means twice the number you took as input.


function isLGSeven(number) {
    const subtracting = number - 7;
    const multiply = number * 2;
    if (subtracting < 7) {
        return subtracting;
    }
    else if (multiply > 7) {
        return multiply;
    }

}
const final = isLGSeven(-15);




// Task-4: Find out how many bad data are there in the array and return that number.


const myArray = [2, -5, -7, -13];

function findingBadData(arr) {

    const badData = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            badData.push(arr[i]);
        }
    }
    return badData.length;

}
const findData = findingBadData(myArray);




// Task-5: The total number of diamonds is calculated by combining the gems. If the total number of diamonds is more than 1000, then subtract 2000 from the total number of diamonds and get the remaining number of diamonds.


function gemsToDiamond(firstFriend, secondFriend, thirdFriend) {
    let firstDiamond = firstFriend * 21;
    let secondDiamond = secondFriend * 32;
    let thirdDiamond = thirdFriend * 43;

    let totalDiamond = firstDiamond + secondDiamond + thirdDiamond;
    let final = totalDiamond - 2000;
    if (totalDiamond > 2000) {
        return final;
    }
    else {
        return totalDiamond;
    }
}

const finalResult = gemsToDiamond(20, 200, 50);
