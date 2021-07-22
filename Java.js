let str = prompt("введите число 0 до 999"); 
  let arr = str.split('');
function makeUser(hunder,tens,units) {  
if (str<10){
  arr.unshift(0,0)
}
if(str<100&&str>=10){
  arr.unshift(0)
}
  if(str>999){
 let alpha={}
  return alpha 
}
  return {
    hunder: hunder,
    tens: tens,
    units:units,    
  };
}
let user = makeUser(+arr[0], +arr[1],+arr[2]);
console.log(user)



let basket={
  shirts:{
    price:1234,
    color:"black",
    size:'l',
    quntity:3
  },
  jeans:{
    price: 5000,
    color:"blue",
  size:"32",
  quntity:2
  },
 
}
function basketSumm(){
     let summ=0   
 for(let key in basket) {  
  summ+=(basket[key].price) 
   }
   return summ
  }
let summ=basketSumm()
console.log(summ)
 
 


