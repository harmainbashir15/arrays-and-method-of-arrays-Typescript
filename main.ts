//                    <<<<<<<<ARRAYS>>>>>>>>>>>

//1:Arrays are containers: They hold multiple pieces of data.

//2: Odered collection: Items in an arrays have a specific order.

//3:Flexible data types: Array can hold multiple type of data like numbers string etc.

//4: Indexed elements: Each item in an arrays has an index number starting from 0.

//5:Dynamic size: Arrays can grow or shrink in size as needed.

//6:Accessing elements: You can access individual items in an array using their index number.

// let carsName = ["Dodge Challenger" , "BMW" , "tessla" , "Fortuner"];      // four elements in this arrays
// //                   0 (index)      1(index) 2(index)   3(index)
// // index number starts from 0

// console.log(carsName);       // for all array

// console.log(carsName[2]);    //this method is used for specific index
// console.log(carsName[4]);
// console.log(carsName[3]);
//console.log(carsName.length);         // .length ka mtlb ha ke array me kitni cheezen mojod hyn unka number btaega
//............................................................................................................

// //                 <<<<<<<<<<<  ARRAY METHODS  >>>>>>>>>>>>>>>>

// //1:

// //            <<<<<<<push>>>>>>>>

// //push >> (add element in last)
// //array.push()
// let carsName = ["Dodge Challenger", "BMW", "tessla", "Fortuner"];
// carsName.push("Civic", "corolla"); //jab do cheezen ek sath add karni hon
// console.log(carsName);

// //2:

// //        <<<<<<<<pop>>>>>>>

// //pop >> (delete element in last)     hatao
// //array.pop()
// let carsName = ["Dodge Challenger", "BMW", "tessla", "Fortuner"];
// carsName.pop();
// console.log(carsName);

// //3:

// //             <<<<<<<<<<unshift>>>>>>>>>>>

// //unshift >> (add element in start of array)
// //Array.unshift()
// let carsName = ["Dodge Challenger" , "BMW" , "tessla" , "Fortuner"];
// carsName.unshift('mehran')
// console.log(carsName);

// //4:

// //          <<<<<<<<shift>>>>>>>>

// //shift >> (remove first element from array)
// //array.shift()
// let carsName = ["Dodge Challenger" , "BMW" , "tessla" , "Fortuner"];
// carsName.shift()
// console.log(carsName);

//5:

//                 <<<<<<<<<slice>>>>>>>>>>

//the slice () method returns selected elements in an array, as a new array.
//the slice() method does not change the original array.
//return selected elements.

// let names: string[] = ["Harmain" , "Elaf" , "Ahmed" , "shahmeer"]
// let newNames: string[] = names.slice(0,2)
// console.log(newNames);
// console.log(names);

// ...........................................................................................................

//let fruits = ["Apple" , "Mango" , "cherry" , "Orange" , "Banana" , "Pineapple"];
//let newFruits = fruits.slice(1,4);
//console.log(newFruits);
//console.log(fruits);

//6:

//              <<<<<<<<<<<<<<splice>>>>>>>>>>>>>>>>

//the splice() method adds and/or removes array elements.
//the splice() method overwrites the original array.
//return deleted elements in array.


// let countries = ["Turkey", "Bali", "Canada", "London", "Baku"];
// let deletedElements = countries.splice(1, 2, "UAE", "America");
// console.log(countries);
// console.log(deletedElements);


//     .........................................................................................


//let names = ["Harmain" , "Ahmed" , "Elaf" , "Shahmeer" , "Aliya"];
//let deletedElements = names.splice(2,3, "Amir" , "Daneen")
//console.log(names);
//console.log(deletedElements);

