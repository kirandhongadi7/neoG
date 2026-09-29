const totalAllottedTime = 100

const task1Week1 = 8
const task1Week2 = 10
const task1Week3 = 12
const task1Week4 = 14

const task2Week1 = 10
const task2Week2 = 12
const task2Week3 = 9
const task2Week4 = 14

const totalTimeTask1 =
  task1Week1 +
  task1Week2 +
  task1Week3 +
  task1Week4

const totalTimeTask2 =
  task2Week1 +
  task2Week2 +
  task2Week3 +
  task2Week4

const totalTimeSpent = totalTimeTask1 + totalTimeTask2

const remainingTime = totalAllottedTime - totalTimeSpent

let projectStatus = ""

if (remainingTime < 0) {
  projectStatus = "You have exceeded the planned time for this project."
} else if (remainingTime < 10) {
  projectStatus =
    "You are about to reach the planned time for this project. Consider reviewing your time management."
} else if (remainingTime < 30) {
  projectStatus =
    "You are doing okay, but you may need to manage your time more efficiently."
} else {
  projectStatus = "You are on track with your project schedule."
}

const projectTimeReport =
  "Project Time Report\n" +
  "-------------------------\n" +
  "Total Allotted Time: " + totalAllottedTime + " hours\n" +
  "Total Time Spent: " + totalTimeSpent + " hours\n" +
  "Total Time on Task 1: " + totalTimeTask1 + " hours\n" +
  "Total Time on Task 2: " + totalTimeTask2 + " hours\n" +
  "Remaining Time: " + remainingTime + " hours\n\n" +
  "Project Status: " + projectStatus

console.log(projectTimeReport)