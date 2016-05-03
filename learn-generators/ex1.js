function *range(from, to){


    for(from; from =< to; from++){

    }

return listOfNumbers;
}

for (var r of range(5, 10)){
    //interera över en lista [5,6,7,8,9,10]
    console.log(r);
}

var identity = function(arg){
    return arg;
}

var add = function add(x,y){
    return x + y;
}
var mul = function mul(x,y){
    return 3 * 4;
}

function identify(arg){

   return function(){
        return arg;
    }
}