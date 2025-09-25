function closures (){

let counter = 0;
return function(){

    counter += 1;
}

}


const add = closures()

console.log(add);

add()
add()
add()
add()
add()
add()
add()
