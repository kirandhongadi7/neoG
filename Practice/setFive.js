
function calculateDiscount(customerAge,isMember,totalPurchase){

    if((customerAge < 18 || customerAge > 60 && totalPurchase >= 100) || (isMember && totalPurchase >=50)){
        return "Eligible for Discount" 
        
    }
    else{
        return "Not Eligible for Discount"
    }
}
console.log(calculateDiscount(16,false,120));
console.log(calculateDiscount(45,false,40));


function bonus(monthlySales , isTeamLeader){
    if(monthlySales >= 5000 && isTeamLeader) return true
    else return false
}
console.log(bonus(7000,true));
console.log(bonus(4000,true));
