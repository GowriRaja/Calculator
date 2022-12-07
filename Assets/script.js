let result=document.getElementById("inputext");
let solve=(number)=>{
    result.value+=number;
}
let Result=()=>{
    try{
        result.value=eval(result.value)
    }
    catch(err){
        alert("Enter the proper inputs");
    }
}
function clr(){
    result.value= "";
}
function del(){
    result.value=result.value.slice(0,-2);
}
