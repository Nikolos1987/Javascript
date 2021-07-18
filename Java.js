for (i=0;i<=100;i++){
    let x=0
   for(let z=1;z<=100;z++){
    let remainder=i%z;
    if(remainder===0){
      x=x+1}      
    } if(x===2){   
console.log(i)       
}
}//нагромоздил, но вроде работает, хотя уверен что модно написать проще
let basket=[
    ["джинсы",{prise:1200,quantity:10},"xl","blue"],
    ["свитер",{prise:3000,quantity:25},'l',"grey"],
    ['блузка',{prise:2500,quantity:14},'m','white']
    ] 

 let basktSumm=0
function countBasketPrise([b]){
     
    for(i=0;i<=2;i++){
        let value=basket[i][b].prise;
        basktSumm=basktSumm+value
        if(i===2){
            console.log(basktSumm)  
        }         

    } 
  return (basktSumm)   
}

countBasketPrise([1]);
alert('сумма корзины '+basktSumm)//не додумался как передать в функцию оператор [].prise

//for (i=0;i<=9;i++){}//не додумался!



let arr = [];
let z="x"
for (let i = 0; i <= 19; i++) {
  arr[i]=z
  z=z+"x"
}
for (let i = 0; i < arr.length; i++) {
 console.log( arr[i] );
}


