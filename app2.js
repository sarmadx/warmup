function show(x = 3) {

    return x * x
}

console.log(show(4))

let sayhello = function () {
    console.log('hello')
}
sayhello();
let sq = a => a * a;
b = sq(2);
console.log(b);

let sq1 = (a, c) => a * c;
b = sq1(2, 3);
console.log(b);

let user = new Object();
user.name = 'sarmad';
console.log(user)
console.log('name' in user);
console.log('age' in user);

let a0 = { v: 10 }
let b0 = { ...a0 };
b0.v = 5;
console.log('a= ', a0);
console.log('b= ', b0);

let person = { name: 'sarmad', age: 23, add: { home: 'mousl', work: 'stud' } };
let clone = {};
Object.assign(clone, person);
clone.name = 'ali';
clone.add.home = 'shallan'
console.log(person);
console.log(clone);

function mola(pep) {
    let col = {}
    for (let k in pep) {
        if (typeof pep[k] == "object") {
            col[k] = mola(pep[k]);
           

        }
        else col[k] = pep[k]
        //console.log(typeof(pep[k]))
    }
    return col;
}
let pep = {
    name: 'mohammed', age: 23,
    addr: {
        home: 'mousl',
        work: 'stud', molay:{
            feels:'love',
        }
    },

    addr2: {
        phone: '07800',
        id: 324
    }
}

let col = mola(pep);

col.addr.work = 'worker';
col.addr2.id = 44;
col.addr.molay.feels='surprise'
console.log(pep)
console.log(col)