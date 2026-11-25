let dataReceived = new Promise((resolve,reject) =>{
    if(true){
        resolve("Data fetched successfully!")
    } else{
        reject("Failed to fetch data")
    }
})

dataReceived.then((m) => console.log(m)
).catch((m) => console.log("Error,", m)
)

let checkNum = new Promise((resolve,reject) =>{
    let num = 11
    if(num > 10){
        resolve("Number is valid")
    }else{
        reject("Number is too small")
    }
})

checkNum.then((m) => console.log(m)
).catch((m) => console.log("Message", m)
)


let auth = new Promise((resolve,reject) =>{
    let isLoggedIn = true
    if(isLoggedIn){
        resolve("User is logged in");
        
    }else{
        reject("User is not logged in");
    }
})
auth.then((m) => console.log(m)
).catch((m) => console.log("Status:", m)
)

let user = new Promise((resolve,reject) =>{
    let userExists = true
   let user = { name: "Alice", age: 25 }
    if(userExists){
        resolve(user)
    }else{
        reject("User not found")
    }
})
user.then((m) => console.log(m)
).catch((m) => console.log(m)
)

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(42);
  }, 2000);
});

myPromise.then((m) => {
  console.log(m);
});

const promiseRej = new Promise((resolve,reject) =>{
    setTimeout(() =>{reject(500)},3000)
})
promiseRej.catch((p) => console.log(p)
)

function checkPassword(password) {
  return new Promise((resolve, reject) => {
    if (password === "12345") {
      resolve("Password accepted");
    } else {
      reject("Invalid password");
    }
  });
}

checkPassword("12345")
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

function checkEmail(email) {
  return new Promise((resolve, reject) => {
    if (email.includes("@")) {
      resolve("Valid email");
    } else {
      reject("Invalid email");
    }
  });
}

checkEmail("kiran@gmail.com")
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

  function fetchTemperature(temperature) {
  return new Promise((resolve, reject) => {
    if (temperature > 15) {
      resolve("Temperature is 20°C");
    } else {
      reject("Temperature too low");
    }
  });
}

fetchTemperature(20)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
  