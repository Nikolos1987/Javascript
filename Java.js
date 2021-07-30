function cheesDask(){
const chees=document.querySelector(".demo")
let importHtml=""
for (let i=0; i<8; i++){  
  importHtml=importHtml+"<div class=even__row"+i+">"+"</div>" 
  }chees.innerHTML=importHtml;

for (let i=0; i<8; i++){
  const rows=document.querySelector('.even__row'+i)
  let totalHTML=""
  if(i%2===0){
  
  for (let i=0; i<8; i++){
    totalHTML+='<div class=one></div>'
    rows.innerHTML=totalHTML;  
  }
} 
else{
  for (let i=0; i<8; i++){
  totalHTML+='<div class=too></div>'
  rows.innerHTML=totalHTML;}  
}
} 
for(i=0;i<8;i++){
  if(i%2===0){
let z=document.querySelector(".even__row"+i) 
z.classList.toggle("a")}
else{
  let z=document.querySelector(".even__row"+i) 
  z.classList.toggle("b") 
}
}
const battle=document.querySelector('.chees__desk')
const frontLine=document.createElement("div")
battle.prepend(frontLine)
frontLine.classList.toggle("number")
const bottomLine=document.createElement('div')
battle.append(bottomLine)
bottomLine.classList.toggle("bottom")
 let frontlineHtml=""
 for(i=1;i<8;i++){
  frontlineHtml+="<div class=spears>"+i+"</div>"
 }
 frontLine.innerHTML=frontlineHtml
 let battlelineHtml=""
 for(i=0;i<1;i++){
   switch(i){
     case 0: battlelineHtml="<div class=bottom>a</div>"
     case 1:battlelineHtml+="<div class=bottom>b</div>"
     case 3:battlelineHtml+="<div class=bottom>c</div>"
     case 4:battlelineHtml+="<div class=bottom>d</div>"
     case 5:battlelineHtml+="<div class=bottom>e</div>"
     case 6:battlelineHtml+="<div class=bottom>f</div>"
     case 7:battlelineHtml+="<div class=bottom>g</div>"
     case 8:battlelineHtml+="<div class=bottom>h</div>"
   
    }
 
 }
 bottomLine.innerHTML=battlelineHtml

}
cheesDask()


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
    quntity:2
    },],
    basketsumm(){
        let sum=0
        for(i=0; i<this.fgd.length;i++){
            sum+=this.fgd[i].price*this.fgd[i].quntity
        }
        return(sum)

    },
    quntitySumm(){
      let qunt=0
        for(i=0; i<this.fgd.length;i++){
            qunt+=this.fgd[i].quntity
    }
    return qunt
}}
let sum=basket.basketsumm()
let qunt= basket.quntitySumm()
const basketsumm=document.createElement("div")
const elements=document.querySelector(".chees__desk")
elements.after(basketsumm)
basketsumm.classList.toggle('basket')
basketsumm.innerHTML="сумма товаров = "+sum+ " количество товаров = "+qunt
if(qunt===0){
  basketsumm.innerHTML="корзина пуста" 
}