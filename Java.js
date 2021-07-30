// НЕ ДОДЕЛАЛ!!!

// function  hello(){
//     let open=document.querySelector(".chees__desk")
//       open.classList.toggle("open")
   
// }

// const put=document.querySelector(".push");
// // put.onclick=hello
// put.addEventListener('click',hello )
// // put.addEventListener('click',function(){let z =document.querySelector(".open")
// // z.classList.remove("open")
// // z.classList.add("chees__desk")
// //  } )
// //можно добавить функцию
// // put.removeEventListener('click',hello) //удаление

let basket={ fgd:[
  {
      price:1234,
      color:"black",
      size:'l',
      quntity:3
    },
    {
      price: 5000,
      color:"blue",
    size:"32",
    quntity:3
    },],
    basketsumm(){
        let sum=0
        for(i=0; i<this.fgd.length;i++){
            sum+=this.fgd[i].price*this.fgd[i].quntity
        }
        return(sum)

    },
    qontitysum(){
      let qnt=0
        for(i=0; i<this.fgd.length;i++){
            qnt+=this.fgd[i].quntity
        }
        return(qnt)
    }

   
}
function add(){
basket.fgd.push({price: 5000,
    color:"blue",
    size:"32",
    quntity:2
})
 
}
add()

// //   let summ=basket.basketSumm()
// //   console.log(summ)

// // // console.log(basket.basketsumm())
// // console.log(basket.fgd[0].price)

const putt=document.querySelector(".basket__quntity")
putt.innerHTML=basket.qontitysum()
// const inp=document.querySelector(".inpt")
// console.log(inp)
  
butt.onclick = function() {
  var val = document.getElementById('elem1').value;
  document.getElementById('str').innerHTML="Вы ввели: "+val;
};
var test=document.querySelector('.test')
test.onclick()