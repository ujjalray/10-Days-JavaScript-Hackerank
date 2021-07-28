function isPositive(a) {
  
    if(a>0)
       throw Error("YES"); //
   else
     if(a<0)
       throw Error("Negative Error");
   else
      throw Error("Zero Error");
 
     
 }