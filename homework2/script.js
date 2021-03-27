var lenghtLine=7;
//1
/*for(var i =0; i<lenghtLine; i++){
    var str ="*";
    for(var j=0; j<lenghtLine-1; j++){
        str +="*";
    }
    console.log(str);
}*/


//2
/*for(var i=0; i<lenghtLine; i++){
    var str="";
    if(i===0 || i===lenghtLine-1){
        for(var j=0; j<lenghtLine; j++){
            str +="*";
        }
    }
    else {
        str ="*";
        for(var j=0; j<lenghtLine-2; j++){
            str += " ";
        }
        str +="*";
    }
    console.log(str);
}*/


//3
/*for(var i=0; i<lenghtLine; i++){
    var str="";
    if(i===0){
        for(var j=0; j<lenghtLine; j++){
            str +="*";
        }
    }
    else str ="*";
    for(var j=1; j<lenghtLine; j++){
        if(i!==6 && j!==6){
            if ((i+j) ===6){
                str +="*";
            }
            else str +=" ";
        }
    }
    console.log(str);
}*/

//4
/*for(var i=0; i<lenghtLine; i++){
    var str="";
    if(i===6){
        for(var j=0; j<lenghtLine; j++){
            str +="*";
        }
    }
    else str ="*";
    for(var j=lenghtLine-2; j>0; j--){
        if(i!==0 && j!==0){
            if ((i+j) ===6){
                str +="*";
            }
            else str +=" ";
        }
    }
    console.log(str);
}*/

//5
/*for(var i=0; i<lenghtLine; i++){
    var str="";
    for(var j=0; j<lenghtLine-1; j++){
        if(i===6){
            str +="*"
        }
        if(i!==6 && j!==6){
            if ((i+j) ===6){
                str +="*";
            }
            else str +=" ";
        }
    }
    str +="*";
    console.log(str);
}*/

//6
/*for(var i=0; i<lenghtLine; i++){
    var str="";
    if(i===0){
        for(var k=0; k<lenghtLine-1; k++){
            str +="*";
        }
    }
    for(var j=lenghtLine-1; j>0; j--){
        if(i!==0 && j!==0){
            if ((i+j) ===6){
            str +="*";
        }
        else str +=" ";
        }
    }
    str +="*";
    console.log(str);
}*/

//7
/*for(var i=0; i<lenghtLine; i++){
    var str="";
    for(var j=0; j<lenghtLine; j++){
        if(i===j ||(i+j)===6){
            str +="*";
        }
        else str +=" ";
    }
    console.log(str);
}*/

//8
/*for(var i=0; i<lenghtLine-3; i++){
    var str="";
    if(i===0){
        for(var j=0; j<lenghtLine; j++){
            str +="*";
        }
    } else{
        for(var j=0; j<lenghtLine; j++){
            if(i===j ||(i+j)===6){
                str +="*";
            }
            else str +=" ";
        }
    }
    console.log(str);
}*/

//9
/*for(var i=3; i<=lenghtLine-1; i++){
    var str="";
    if(i>=3 && i<lenghtLine-1){
        for(var j=0; j<lenghtLine; j++){
            if(i===j ||(i+j)===6){
                str +="*";
            }
            else str +=" ";
        }
    }
    else {
        for(var j=0; j<lenghtLine; j++){
            str +="*";
        }
    }
    console.log(str);
}*/