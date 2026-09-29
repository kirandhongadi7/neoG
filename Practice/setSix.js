function scholarshipEligibility(age, isStudent, familyIncome){
    if((age <=25 && isStudent && familyIncome <=50000) || (age >70 && !isStudent)){
        console.log("Eligible for Scholarship ");
        
    }
    else{
        console.log("Not Eligible for Scholarship");
        
    }
}

scholarshipEligibility(22,true,40000)
scholarshipEligibility(82,false,40000)

function isEligibleForPromotion(yearsOfService, isManager) {
  if (yearsOfService >= 5 && isManager === true) {
    return true
  } else {
    return false
  }
}

const result = isEligibleForPromotion(7, true)

console.log(result)

//A5
const products = [
  { name: "Smartphone", category: "Electronics", retailSales: 20000, onlineSales: 35000, wholesaleSales: 15000 },
  { name: "T-Shirt", category: "Clothing", retailSales: 8000, onlineSales: 12000, wholesaleSales: 5000 },
  { name: "Sofa", category: "Furniture", retailSales: 25000, onlineSales: 10000, wholesaleSales: 30000 },
  { name: "Laptop", category: "Electronics", retailSales: 40000, onlineSales: 50000, wholesaleSales: 20000 },
  { name: "Jeans", category: "Clothing", retailSales: 10000, onlineSales: 15000, wholesaleSales: 7000 },
  { name: "Bed", category: "Furniture", retailSales: 30000, onlineSales: 12000, wholesaleSales: 20000 },
  { name: "Headphones", category: "Electronics", retailSales: 15000, onlineSales: 18000, wholesaleSales: 9000 },
  { name: "Jacket", category: "Clothing", retailSales: 12000, onlineSales: 17000, wholesaleSales: 6000 }
];

for(let product of products){
    product.totalSales = product.retailSales + product.onlineSales + product.wholesaleSales
}
const mostProfitableProduct = products.reduce((a,c) => a.totalSales < c.totalSales? c: a)
const totalSalesOfAllProducts = products.reduce((a,c) =>  c.totalSales+ a,0)
const averageRetailSales = products.reduce((a,c) => a + c.retailSales, 0) / products.length
const averageOnlineSales = products.reduce((a,c) => a + c.onlineSales, 0) / products.length
const averageWholeSales = products.reduce((a,c) => a + c.wholesaleSales, 0) / products.length
const salesReport = "===========Sales Report===========\n"+
"Most Profitable Product\n"+
"------------------------\n"+
"Name: "+ mostProfitableProduct.name + "\n" +
"Category: " + mostProfitableProduct.category + "\n" +
"Total Sales: "+ mostProfitableProduct.totalSales + "\n\n"+
"Sales Average\n" +
"----------\n" +
"Total Sales of All Products: " + totalSalesOfAllProducts + "\n" +
"Average Sales of All Products: " + totalSalesOfAllProducts / products.length + "\n" +
"Average Retail Sales: " + averageRetailSales + "\n" +
"Average Online Sales: " + averageOnlineSales + "\n"  +
"Average Wholesale Sales: " + averageWholeSales + "\n"



console.log(salesReport);
