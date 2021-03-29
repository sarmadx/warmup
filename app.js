function f(){{


    var x=0;}
    console.log(x);
}
f();

console.log(y===undefined)
var y;
foo();
function foo(){
    console.log('barr')
}

//baz();
var baz=function(){
    console.log('bazz');
};
baz();
const person={
    name:'sarmad',
    age: 23,
    plasce: 'mousl'
};
person.plasce=1001;
console.log(person);

const array=[ 1,2,3,4,5,6];
array.pop(1);
console.log(array);
console.log(typeof(person.name));
console.log(typeof(foo));


for (let pp in person){
    console.log(person[pp]);
}
for (let i of array){
    console.log(i)
}
for (let i in array){
    console.log(i)
}