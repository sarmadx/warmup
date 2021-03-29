/*(function () {
    console.log("in function")
})();
function one() {
    console.log("a");
    tow();
    console.log('c');
}
function tow() {
    setTimeout(function () {
        console.log('b')
    }, 3000);

}
one();
console.log("out fun")

function greet(name) {
    return new Promise((any_name) => {
        setTimeout(() => {
            let respon = 'hello' + name;
            any_name(respon)
        }, 3000
        )
    }
    )
}
console.log('befor greet');
greet('sarmad').then((respon) => console.log(respon))
console.log('after')
*/function greet(name){
    return new Promise ((y,err)=>{
        setTimeout(()=>{
            if(name!=""){
                let ss= 'hello '+name;
                y(ss)
            }
            else {
                let ss= ' no name '
                throw Error("No nAME")
            }
        },2000)
    })
}
(async function() {
    console.log('befor')
    let bb;
    //-------------
   
    try{
         bb=await greet("");
    }catch(ex){
      bb="eroor";
      console.log(ex);
          
      
    }
    console.log(bb);
    //-------------
    console.log('after')
})()