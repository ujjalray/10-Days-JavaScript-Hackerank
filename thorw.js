function isPositive(a) {
  
    if(a>0)
       throw Error("YES"); //thorw Error dekha te use kora hoi
   else
     if(a<0)
       throw Error("Negative Error");
   else
      throw Error("Zero Error");
 
     
 }