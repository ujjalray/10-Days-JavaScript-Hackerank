function vowelsAndConsonants(s) {
  
    var i;
    for(i=0;i<s.length;i++)
    {
       if(s[i]=='a' || s[i]=='e' || s[i]=='i' || s[i]=='o' || s[i]=='u')
       console.log(s[i]);
     
         
    }
    for(i=0;i<s.length;i++)
    {
      if(s[i]!='a' && s[i]!='e' && s[i]!='i' && s[i]!='o' && s[i]!='u')
 //   if(s[i]=='a' || s[i]=='e' || s[i]=='i' || s[i]=='o' || s[i]=='u')
      console.log(s[i]);
       
       
    }
 
}






/* function vowelsAndConsonants(s) {
  
    var vow=['a','e','i','o','u'];
    var i;
    for(i=0;i<s.length;i++)
    {
       if(vow.indexOf(s[i])>-1)
         console.log(s[i]);
       
      
    }
    for(i=0;i<s.length;i++)
    {
       if(vow.indexOf(s[i])<0)
         console.log(s[i]);
       
    }
    */
