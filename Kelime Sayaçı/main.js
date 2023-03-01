 function deneme(){
    var tarih = new Date();
      
    var yil = tarih.getFullYear;
    var ay = tarih.getMonth() + 1;    
    var saat = tarih.getHours();
    var dakika = tarih.getMinutes();
    var saniye =tarih.getSeconds();
    
    
    //document.getElementById('box1').innerHTML = ay;  
    //document.getElementById('box2').innerHTML = yil;
    document.getElementById('box3').innerHTML = saat + ":" +dakika + ":" saniye;   
    
     
     var say 
     
     say = setInterval('deneme()',1000);
     
    }
        
   