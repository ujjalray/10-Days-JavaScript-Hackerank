function modifyArray(nums) {
  
  
    var a=nums.map(a=>{
        
        
           if(a%2==0)
                 return a*2;
             else
                return a*3;
        
      })

  return a;
 
}
