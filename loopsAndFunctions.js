/*
function generate5RandomNumbers(){
    for(let i=0;i<5;i++){
        console.log(Math.random());
    }
}


function generate5RandomNumbersArrow() = () => {
    for(let i=0;i<5;i++){
        console.log(Math.random());
    }
}

const randomArray=[1,2,4,6,8];

for(const item of randomArray){
    console.log(item);
}
*/


//Filter Duplicates
//Input is an array of objects
//each object has a property called id
//and a username
//write a function that takes in an array of objects,and returns the array of objects with no duplicates

//example

/*
const input1 = [
    {id:1,userName:'Arjun'},
    {id:2,userName:'Saif Ali'},
    {id:3,userName:'Katrina'},
    {id:4,userName:'Saif Ali'},
    {id:5,userName:'Kareena'},
];

const removeDuplicates = (arrayOfObjects) => {
    const hasSeen = {};
    const result = [];

    for(const item of arrayOfObjects){
        if(!hasSeen[item.userName]) {
            result.push(item);
        }

        hasSeen[item.userName] = true;
        }
        return result;
}

console.log(removeDuplicates(input1));
*/

//Add to array only if it doesnt exist
//input is an array of objects and an object

const input1 = [
    {id:1,userName:'Arjun'},
    {id:2,userName:'Saif Ali'},
    {id:3,userName:'Katrina'},
    {id:4,userName:'Kareena'},
];



const removeDuplicates = (arrayOfObjects) => {
    const hasSeen = {};
    const result = [];

    for(const item of arrayOfObjects){
        if(!hasSeen[item.userName]) {
            result.push(item);
        }

        hasSeen[item.userName] = true;
        }
        return result;
}

// console.log(removeDuplicates(input1));
 


const itemToAdd = {id:5,userName : 'salman'}
const addToArray = (arrayOfObjects,itemToAdd) => {
    const hasSeen = {};
    const resultnew = [];

    for(const item of arrayOfObjects){
        hasSeen[item.userName] = true;
        }
if(!hasSeen[itemToAdd.userName]){
    arrayOfObjects.push(itemToAdd)
}  
        return arrayOfObjects;
}
console.log(addToArray(input1, itemToAdd));
