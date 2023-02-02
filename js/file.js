const jaroslav = {
    name: 'Jaroslav',
    lastName: 'Makukha',
    age: 16,
    numbers: [13, 22, 31, 49],
    rating: 13,

    minusNumber(){
        this.numbers.pop();
    },
    changeAge(){
        this.age += 1;
    },
}
jaroslav.changeAge();
jaroslav.minusNumber();
console.log(jaroslav);
// --------------------------
function kilometrsToMiles(kilometrs){
    const miles = kilometrs * 0.6214;
    return miles;
}
const miles = kilometrsToMiles(120000);
console.log(miles);
// --------------------------
function spliceArr(array){
    const start = array.indexOf('Orange');
    array.splice(start, 1, 'grapefruit');
    return array;
}
const b = spliceArr(['Apple', 'Orange', 'Plum'])
console.log(b);
