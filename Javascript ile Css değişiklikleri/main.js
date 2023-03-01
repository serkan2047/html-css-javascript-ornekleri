onload


function kirmizi(){

    document.getElementById('title').style = "box-shadow: #eb2636 0px 20px 30px -10px; color: #eb2636;";
}

function mavi(){

    document.getElementById('title').style = "box-shadow: skyblue 0px 20px 30px -10px; color: skyblue;";
}

function turuncu(){

    document.getElementById('title').style = "box-shadow: orangered 0px 20px 30px -10px; color: orangered;";
}


function back(){
  
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor ="#" + randomColor;
}