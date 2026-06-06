//2a
let totalCost = (1*10)+(3*8)+(1*5) ;
console.log("2a - Total cost is: "+ totalCost);

//2b 
let person = 3;

console.log("2b - Total cost with 3 peopole is "+(totalCost*person) +" And each person need to pay: "+ ((totalCost*person)/person));


// 2c

let price = (1*18.50)+(2*7.50);

console.log("2c - The price is: "+price);

// 2d 

let total10PerPrice = price+(0.1*price);
console.log("2d - Total price with 10% tax is: "+total10PerPrice);

//2e 

let total20PerPrice = price+(0.2*price);
console.log("2e - Total price with 20% tax is: "+total20PerPrice);

// 2f 
let basketball = 2095; //20.95
let tShirt = 799; //7.99
let toster = 1899; //18.99
let shippingFee = 499; //4.99 (Only for Toster)

let totalCost2f = basketball+tShirt+toster;
// totalCost2f = Math.round(totalCost2f);
console.log("2f - Total cost before shipping and tax is: "+totalCost2f/100);

// 2g
let totalCostBeforeTax = (totalCost2f+shippingFee)/100;
console.log('2g - Total before tax is: '+totalCostBeforeTax);

// 2h
let totalCostAfterTax = Math.round((basketball+tShirt+toster+shippingFee)*0.1)/100;

console.log('2h - 10% tax is: '+totalCostAfterTax);

// 2i 

let orderTotal = totalCostBeforeTax+totalCostAfterTax;
console.log('2i - Order total is: '+orderTotal);

// 2j 
console.log('2j - we need to use Math.floor for down the number 2.8=>2 !: '+Math.floor(2.8));

// 2k
console.log('2k - we need to use Math.ceil for up the number 2.1=>3 !: '+Math.ceil(2.1));

// 2l 
console.log('2l - The temperature is 25°C,in Fahrenheit it is: '+((25*9/5)+32)+'°F');

// 2m 
console.log('2m - The temperature is 86°F,in Celsius it is: '+((86-32)*5/9)+'°C');

// 2n 
console.log('2n - The temperature is -5°C,in Fahrenheit it is: '+((-5*9/5)+32)+'°F');
