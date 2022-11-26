var ans = document.getElementById("answer");
//----Equal button function-----
function calc(){
    try{let A = eval(ans.value);
    ans.value = A;
    }
    catch(e){
        ans.value = "Error";
    }
}
//----backspace button function-----
function back(){
    let B = ans.value;
    let C = B.split("");
    var D = ""
    for(let n = 0; n<C.length - 1; n++){
        D += C[n];
    }
    ans.value = D;
}

//-----Paranthsis function
let i = 0;
function paraOpen(){
    if(i % 2 == 0){
    ans.value += "(";
    // console.log(ans.value);
    i++;
    }
    else{
    ans.value += ")";
    // console.log(ans.value);
    i++;
    }    
}