// 1. Дан код:
// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2 переменная a увеличивается на 1
// d = b++; alert(d);           // 1 переменная b увеличивается на 1 становится равной 2, но выводится 1
// c = (2+ ++a); alert(c);      // 5 а увеличивыается на 1 становится равной 3 (2+3)
// d = (2+ b++); alert(d);      // 4 b увеличивается на 1 становится равной 3, но выводится 2 (2+2)
// alert(a);                    // 3 два рвза увеличили а=3
// alert(b);                    // 3 два раза увеличили b=3
// Почему код даёт именно такие результаты?
// 2. Чему будет равен x в примере ниже?
// var a = 2;
// var x = 1 + (a *= 2)//5 a возводится в куб

let a=+prompt("введите первое число");
let b=+prompt("введите второе число");
if (a,b>0){
    let summ=a-b;
    alert(summ);
}else if(a,b<0){
    let composit=a*b;
    alert(composit)
}else if(a<0,b>=0){
    let differentSumm=a+b;
    alert(differentSumm)
}
let c=+prompt('введите число');
 switch (c){
     case 1:console.log("1");
     case 2:console.log("2");
     case 3:console.log("3");
     case 4:console.log("4");
     case 5:console.log("5");
     case 6:console.log("6");
     case 7:console.log("7");
     case 8:console.log("8");
     case 9:console.log("9");
     case 10:console.log("10");
     case 11:console.log("11");
     case 12:console.log("12");
     case 13:console.log("13");
     case 14:console.log("14");
     case 15:console.log("15");
 }
function summ(x,y){
    return x+y;
}
let result=summ(3,4);
console.log(result)

function division(x,y){
    return x/y;
}
let resultDivision=division(3,4);
console.log(resultDivision)

function multiplication(a,b){
    return a*b;
}
let resultMultiplication=multiplication(3,4);
console.log(resultMultiplication);

function subtraction (a,b){
    return a-b;
}
let resulrsubstraction=subtraction(20,11);
console.log(resulrsubstraction)

function mathOperation(arg1, operation, arg2){
  switch(operation){
      case'+':let suma=arg1+arg2
      return(suma);
      break;
      case '-':let def=arg1-arg2;
      return(def);
      break
      case '*': let multiplication=arg1*arg2;
      return(multiplication)
      break;
      case '/':let devision=arg1/arg2;
      return(devision)
      break;
  }
    }
let c=mathOperation(2,"/",2)
alert(c)
