function yardGreening(input){
 let size = Number(input[0]);
 let price = size * 7.61
 let discount = price * 0.18
let totalPrice = price - discount
 console.log(`The final price is: ${totalPrice} lv.`)
 console.log(`The discount is: ${discount} lv.`)

}
yardGreening(["550"])

//Цената на един кв. м. е 7.61 лв със ДДС. 
//Понеже нейният двор е доста голям, фирмата изпълнител предлага 18% отстъпка от крайната цена.
//· "The final price is: {крайна цена на услугата} lv."
//· "The discount is: {отстъпка} lv."