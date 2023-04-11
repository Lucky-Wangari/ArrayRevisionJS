// Modifying array elements
const numbers = [1,2,3,4,5,6]
numbers[0] = 10;
numbers[3] = 50;
console.log(numbers);
let set = numbers.indexOf(5)
console.log(set)

const names = ["Lucky","Wangari","Gitonga"];
names[1] = "Wanjiru"
console.log(names)

//Manipulating Arrays
//joining arrays using concat
 const buy = ["Pineapples", "Oranges","Tissues", "Sufurias"];
 const essential = ["Flour", "Rice","Soap"];
 const shopping = buy.concat(essential);
 console.log(shopping)
 console.log(shopping.length)
 let index = buy.indexOf("Tissue")
 console.log(index)
 console.log(buy.lastIndexOf(2))
 console.log(buy.includes(3))
 //finding if a word is in an array
 console.log(buy.includes("Oranges"));
 //changing an aray to string
 console.log(buy.toString());
 //can also be used tojoin 2 strings
console.log(buy.join());
//Slice: To cut out a multiple items in range. It takes two parameters:starting and ending position.
// It doesn't include the ending position.
console.log(buy.slice(1,4));
console.log(buy.slice(1,3));

//Splice: It takes three parameters:Starting position, number of times to be removed and 
//number of items to be added.
let animals = ["Lion", "Koala","Cheetah","Dog","Cat"]
 animals.splice()  //removes all elements
 console.log(animals)
animals.splice(0,2) //removes the elements without removing element on 4
console.log(animals)
animals.splice("Mouse", "Hen","Snake")
console.log(animals.splice("Mouse", "Hen","Snake"))

 //Declare an empty array;
 let arr = []
 console.log(arr)

 //Declare an array with more than 5 number of elements
 let no = [1,2,3,4,5,6,7];
 console.log(no);
 //Find the length of your array
 console.log(no.length)
 //Get the first item, the middle item and the last item of the array
//  const {0: first, [no.length - 1]: last, ...rest} = no
 console.log(no.indexOf(7));
 console.log(no.indexOf(1));
//  console.log(no.indexOf(middle));
let mixedDatatypes = ["Lucky", 22, true, "Wangari",87, "Shop"];
console.log(mixedDatatypes.length);

//variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
 let itCompanies = ["Facebook","Google","Microsoft","Apple","IBM","Oracle", "Amazon"]
 console.log(itCompanies);
 //Print the number of companies in the array
 console.log(itCompanies.length);
 console.log(itCompanies[0]);

 
 //Change each company name to uppercase one by one and print them out
 let now = itCompanies.map(element => element.toUpperCase());
 console.log(now);

 //Print the array like as a sentence
 console.log(itCompanies.join( ))

 //Check if a certain company exists in the itCompanies array
 //If it exist return the company else return a company is not found
 let word = "Facebook"
 if(itCompanies.includes(word)){
    console.log(word +"Facebook")
 } else {
    console.log("Company notfound")
 }







 