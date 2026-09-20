function getResult(marks , passMark= 40){
    if(marks >= 80){
        return "A";   
    }
    else if(marks >= 60 && marks < 80){
        return "B";
    }
    else if(marks >= passMark && marks < 60){
        return "C";
    }
    else{
    return "You are fail"
    }
}

console.log(getResult(72))