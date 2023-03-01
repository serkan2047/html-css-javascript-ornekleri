function hsp(){
    
    document.getElementById("t1").style.color = "black";
    document.getElementById("t2").style.color = "black";
    document.getElementById("t3").style.color = "black";
    document.getElementById("t4").style.color = "black";
    document.getElementById("t5").style.color = "black";
    document.getElementById("t6
                            ").style.color = "black";
    
    
   var a = document.getElementById("t1").value;
   var b =document.getElementById("t2").value;
   var c =document.getElementById("t3").value;
   var d =document.getElementById("t4").value;
   var e =document.getElementById("t5").value;
   var f =document.getElementById("t6").value;
    
   var x = (Math.floor(Math.random() * 11));
   var y = (Math.floor(Math.random() * 11)); 
   var z = (Math.floor(Math.random() * 11)); 
   var t = (Math.floor(Math.random() * 11)); 
   var k = (Math.floor(Math.random() * 11)); 
   var p = (Math.floor(Math.random() * 11)); 

     document.getElementById("s1").value = x;
    document.getElementById("s2").value = y;
   document.getElementById("s3").value = z;
   document.getElementById("s4").value = t;
   document.getElementById("s5").value = k;
   document.getElementById("s6").value = p;
    
    
    
   var dogru = 0;
    
   if (a==x)
       {
           dogru = dogru + 1;
           document.getElementById("t1").style.color = "green";
           sayilar.push("1");
       }
    
    if (b==y)
        {
           dogru = dogru + 1; 
           document.getElementById("t2").style.color = "green";
            sayilar.push("2");
        }
    
     var sayilar = new Array();
    
    
    if(c==z){
        dogru = dogru + 1;
        document.getElementById("t3").style.color = "green";
        sayilar.push("3");
    }
    
    if(d==t){
        dogru = dogru + 1;
        document.getElementById("t4").style.color = "green";
        sayilar.push("4");
    }
    
    
    if(e==k){
        dogru = dogru + 1;
        document.getElementById("t5").style.color = "green";
        sayilar.push("5");
    }
    
    if(f==p){
        dogru = dogru + 1;
        document.getElementById("t6").style.color = "green";
        sayilar.push("6");
    }
    
   
    
    if (document.getElementById("t1").style.color != "green")
        {
        document.getElementById("t1").style.color = "red";
    }
    
    if (document.getElementById("t2").style.color != "green")
        {
        document.getElementById("t2").style.color = "red";
    }
    
    if (document.getElementById("t3").style.color != "green")
        {
        document.getElementById("t4").style.color = "red";
    }
    
    
    if (document.getElementById("t4").style.color != "green")
        {
        document.getElementById("t4").style.color = "red";
    }
    
    
    if (document.getElementById("t5").style.color != "green")
        {
        document.getElementById("t5").style.color = "red";
    }
    
    if (document.getElementById("t6").style.color != "green")
        {
        document.getElementById("t6").style.color = "red";
    }
    
    document.getElementById("correct").innerHTML =sayilar; 
    
    
    
    
    
}