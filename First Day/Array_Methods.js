let array = [1,2,3,4,5]

let newArr = array.map((element)=>{
    return element *= 2
})

let filteredArr = newArr.filter((element)=>{
    if(element > 3) return true;
    return false;
})

let string = filteredArr.join('-')

let stringToArr = string.split('-')
stringToArr = stringToArr.map((element)=>{
    return parseInt(element, 10)
})

let sum = stringToArr.reduce((sum, element)=>{
    return sum+element
})

function task() {return Promise(setTimeout(() => {
    console.log("Hello");
}, 5000))}
