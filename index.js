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


