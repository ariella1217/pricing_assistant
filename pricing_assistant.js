// Coding Challenge 00

// Code goes here

const productname = "soda"

let costPerUnit = 1.00
let basePrice = 3.00
let discountRate = 0.10
let salesTaxRate = 0.05
let fixedMonthlyCosts = 1000

let discountedPrice = basePrice * (1 - discountRate)
let finalPricewithTax= discountedPrice * (1 + salesTaxRate) 
let profitPerUnit= finalPricewithTax - costPerUnit 
let breakEvenUnits= Math.ceil(fixedMonthlyCosts / profitPerUnit)
let isProfitablePerUnit= profitPerUnit › 0

console.log(productname)
console.log(discountedPrice) 
console.log(finalPricewithTax)
console.log(profitPerUnit) 
console.log(breakEvenUnits)
console.log(isProfitablePerUnit)


