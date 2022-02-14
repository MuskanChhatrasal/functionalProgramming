// Q1. Take an object with your mother's name and your age. Now create an object for your sibling by age difference.

// Ans1.  const myObj = {
//             name: 'aaaa',
//             age: 20
//        };
// const siblingObj = {...myObj, age: myObj.age-2};
// console.log(siblingObj);
// console.log(myObj === siblingObj);

// ------------------------------------------------

// Q2. Take an array with 5 colors. Create another array by adding two more colors.

// Ans2: 
  // const color = ['red', 'blue', 'green', 'yellow','orange'];
  // const addTwoMoreColor = [...color, 'pink', 'purple'];
  // console.log(addTwoMoreColor);

// ------------------------------------------------

// Q3. Write a  function birthday() to take a person's name and age in an object and increase age.

// Ans3: 
  // const mussu = {
  //   name: 'mussu',
  //   age: 20
  // };
  // const birthday = person => ({name: person.name, age: person.age + 1});
  // console.log(birthday(mussu));

// ----------------------------------------------

// Q4. Write a function which can tell whether a number is less than 10 or not. Supply this function to Array.filter() to get an array with a number less than 10's in it.

// Ans4: 
  // const arr = [1, 5, 8, 10, 14, 25, 12];
  // const lessThan10OrNot = num => num < 10;
  // console.log(arr.filter(lessThan10OrNot));

// -----------------------------------------------
// Q5. Given an array of numbers written an object for each item.

// Ans5: 
  // const arr = [1, 5, 8, 10, 14, 25, 12];
  // const arrayToObject = num => ({num});
  // console.log(arr.map(arrayToObject));

// ------------------------------------------------

// Q6. Given an array of numbers. Calculate the sum.

// Ans6: 
  // const arr = [1, 5, 8, 10, 14, 25, 12];
  // const calculateSum = (sum, num) => sum + num;
  // console.log(arr.reduce(calculateSum, 0));

// ------------------------------------------------

// Q7. Write your own map using for loop.

// Ans7: 
  // Array.prototype.myMap = function(callback){
  //   const newArray = [];
  //   for(let i=0;i<this.length;i++){
  //     newArray.push(callback(this[i]));
  //   }
  //   return newArray;
  // }

  // Implementation: myMap() method - Example:

  // const arr = [1, 5, 8, 10, 14, 25, 12];
  // const double = num => num*2;
  // console.log(arr.myMap(double));

// ------------------------------------------------

// Q8. Write your own filter using for loop.

// Ans8: 
  // Array.prototype.myFilter = function(callback){
  //   const newArray = [];
  //   for(let i=0;i<this.length;i++){
  //     if(callback(this[i])){
  //       newArray.push(this[i]);
  //     }
  //   }
  //   return newArray;
  // }

  // Implementation: myFilter() method - Example:

  // const arr = [1, 5, 8, 10, 14, 25, 12];
  // const greaterThan10 = num => num>10;
  // console.log(arr.myFilter(greaterThan10));

//------------------------------------------------ 

// Q9. Write your own reduce using for loop.

// Ans9: 
  // Array.prototype.myReduce = function(callback){
  //   var acc = 0;
  //   for(let i=0;i<this.length;i++){
  //     callback(acc = acc+this[i]);
  //   }
  //   return acc;
  // }

  // Implementation: myFilter() method - Example:

  // const arr = [1, 5, 8, 10, 14, 25, 12];
  // const reducer = (sum,num) => sum + num;
  // console.log(arr.myReduce(reducer));

//------------------------------------------------

// Q10. Given an array of integers, find the sum of all odd numbers.

// Ans10: 
  // const arr = [1, 5, 8, 10, 14, 25, 12];
  // const sumOfAllOddNum = (sum, num) => num%2 !== 0 ? sum + num: sum;
  // console.log(arr.reduce(sumOfAllOddNum,0));

// ------------------------------------------------

// Q11. Given an array of integers, find the sum of all numbers at odd indices.

// Ans11: 
  // const arr = [1, 5, 8, 10, 14, 25, 12];
  // const numAtOddIndex = (num,index)=> index%2 !== 0;const oddIndexArray = arr.filter(numAtOddIndex);
  // const sumOfAllNum = (sum,num) => sum+num;
  // console.log(oddIndexArray.reduce(sumOfAllNum,0));

// ------------------------------------------------

// Q12. Given an array of integers, find the biggest number in the array.

// Ans12:
  // const arr = [1, 5, 8, 10, 14, 25, 12];
  // const biggestNum = (bigNum, num)=>num>bigNum?bigNum=num:bigNum;
  // console.log(arr.reduce(biggestNum,0));

// ------------------------------------------------

// Q13. Given an array of integers, find the numbers divisible by 10.

// const arr = [1, 5, 8, 10, 14, 25, 120, 40];
// const numDivisibleBy10 = num => num%10==0;
// console.log(arr.filter(numDivisibleBy10));

// ------------------------------------------------

// Q14. Return an array of numbers where odd numbers are incremented by 1 and even numbers are decremented by 1.

// Ans14:
  // const arr = [1, 5, 8, 10, 14, 25, 12]
  // const oddIncreEvenDecre = num => num%2 === 0 ? num -1 : num+1;
  // console.log(arr.map(oddIncreEvenDecre));

//-------------------------------------------------

// Q15. Return an object of sum of all odd numbers and even numbers separately.

// Ans15: 
  // const arr = [1, 5, 8, 10, 14, 25, 12];
  // const oddEvenObj = {odd: 0, even: 0};
  // const sumOfOddEven = (oddEvenObj, num)=>num%2===0?{...oddEvenObj, even: oddEvenObj.even + num}:{...oddEvenObj, odd: oddEvenObj.odd + num};
  // console.log(arr.reduce(sumOfOddEven,oddEvenObj));


