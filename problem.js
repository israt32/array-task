/* 
1. Declare an array
Declare an array with 5 elements containing fruits
console log the 3rd index element
change the value of the 2nd index element to jambura
console log the final array
*/

let fruits = ['apple', 'mango', 'bedana', 'lichu', 'komla'];
console.log(fruits[3])

fruits[2] = 'jambura';
console.log(fruits)

/* 
2. Add or remove elements
Declare an array of 3 tourist destinations
Add a new tourist destination to your tourist array
Add two more to your array
Remove the last tourist destination you have added
display the final array as output
*/

let touristPlace = ['cox bazar', 'rangamati', 'bandarban'];

touristPlace.push('sajec')
touristPlace.push('rajshahi', 'ponchogar')
touristPlace.pop()
console.log(touristPlace)

/* 
3. Checking Array Membership with ‘includes’
Instructions:

Create an array of books containing different book.

Use the includes method to check if the array contains a javascript book.

Print a message to the console indicating whether the element is present in the array or not.
*/

let books = ['harry potter', 'rapunzel', '12 dancing princess', 'programming', 'javascript']

if(books.includes('javascript')){
  console.log('the book named javascript is present in the array')
}
else{
  console.log('no book here')
}

/* 
4. Checking if it's an Array
Instructions:

Create different variables, each containing either an array or a non-array value.

Now use isArray to check if each variable is an array.

Print a message to the console indicating whether each variable is an array or not.
*/


let numbers = [2,55,62, 7, 72,444, 63];
let name = 'cat';
let isPassed = true;
let umbrella = ['un', 'dos', 'tress']


if(Array.isArray(numbers)){
  console.log('this is an array')
}
else{
  console.log('this is not an array')
}

if(Array.isArray(isPassed)){
  console.log('this is an array')
}
else{
  console.log('this is not an array')
}

if(Array.isArray(name)){
  console.log('this is an array')
}
else{
  console.log('this is not an array')
}

if(Array.isArray(umbrella)){
  console.log('this is an array')
}
else{
  console.log('this is not an array')
}


