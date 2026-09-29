const totalExerciseGoal  = 150

const mondayExercise = 30
const tuesdayExercise =  25
const wednesdayExerci =  20
const thursdayExercis =  15
const fridayExercise = 35
const saturdayExercis =  40
const sundayExercise = 25
const  totalExerciseTime = (mondayExercise + tuesdayExercise + wednesdayExerci + thursdayExercis + fridayExercise + saturdayExercis + sundayExercise)

const remainingExerciseTime = totalExerciseGoal - totalExerciseTime 
let exerciseStatus = ""
if(remainingExerciseTime < 0){
    exerciseStatus = "You have exceeded your exercise goal for the week."
}else if(remainingExerciseTime < 20 ){
    exerciseStatus = "You are close to reaching your exercise goal. Keep it up!"
}else if(remainingExerciseTime < 50){
    exerciseStatus = "You are doing well, but aim to reach your goal by the end of the week"
}else{
    exerciseStatus = "You are on track with your exercise goal."
}

const exerciseReport =
  "Weekly Exercise Report\n" +
  "-------------------------\n\n" +
  "Total Exercise Goal: " + totalExerciseGoal + " minutes\n" +
  "Total Exercise Time: " + totalExerciseTime + " minutes\n" +
  "Remaining Exercise Time: " + remainingExerciseTime + " minutes\n\n" +
  "Exercise Status: " + exerciseStatus

console.log(exerciseReport)




