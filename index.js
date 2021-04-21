function inside(value){
    var nowInside = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = nowInside + value;
}

function clearAll(){
    document.getElementById('visor').innerHTML = " ";
}

function back(){
    var nowInside = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = nowInside.substr(0, nowInside.length - 1)
}

function calculator(){

    var nowInside = document.getElementById('visor').innerHTML;
    if(nowInside){
        document.getElementById('visor').innerHTML = eval(nowInside)
    }
    else{
        document.getElementById('visor').innerHTML = ".....Nothing.....";
    }

}