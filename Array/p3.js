let s= [8,2,3,4,5,6]

let count=0;
let sum=0;
for(let i =0; i<s.length;i++){
  if(s[i]%2==0){
    count++
    sum+=s[i]
  }
}
console.log(sum/count)