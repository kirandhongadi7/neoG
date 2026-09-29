
const weeklyWaterGoal  = 14

const mondayWater = 1.5
const tuesdayWater = 2 
const wednesdayWater = 1.8 
const thursdayWater = 1.2 
const fridayWater = 2.5 
const saturdayWater =  2 
const sundayWater =  1.7 

const totalWaterConsumed = mondayWater + tuesdayWater + wednesdayWater + thursdayWater + fridayWater + saturdayWater + sundayWater

const remainingWaterGoal = weeklyWaterGoal - totalWaterConsumed
let waterStatus = ""
if(remainingWaterGoal < 0){
     waterStatus = "You have exceeded your water consumption goal for the week!"
}
else if( remainingWaterGoal < 1){
     waterStatus = "You are close to reaching your water goal. Keep hydrating!"
}
else if (remainingWaterGoal < 2){
      waterStatus = "You are doing well, but aim to reach your water goal by the end of the week."
}
else{
     waterStatus = "You are on track with your water consumption goal."
}

console.log("Weekly Water Consumption Report");
console.log("----------------------------------");
console.log(" ")
console.log("Total Water Consumption Goal: ", weeklyWaterGoal , "liters")
console.log("Total Water Consumed: ", totalWaterConsumed , "liters");
console.log("Remaining Water Goal: ", remainingWaterGoal , "liters");
console.log("Water Status: ", waterStatus, "liters");
