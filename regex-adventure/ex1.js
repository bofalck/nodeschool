function testRegex(str){
    var regExp = new RegExp(/str/);

    if(regExp.test(/"LITERALLY"/)){
        return true;
    }
    else{
        return false;
    }
}

testRegex("LITERALLY");

