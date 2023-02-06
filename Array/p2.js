let str="masai"
let ans="";
let lower="abcdefghijklmnopqrstuvwxyz"
let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
for(let i=0; i<str.length; i++){
  for(let j=0; j<26; j++){
    if(str[i]==lower[j]){
      ans+=upper[j];
    }
    
    }
  }

console.log(ans)