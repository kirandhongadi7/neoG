const {initializeDatabase} = require("./db/db.connect")
const Car = require("./models/carSchema.model")
const fs = require("fs")
const dns = require("dns")
const jd = fs.readFileSync("car.json", "utf-8")
const carData = JSON.parse(jd)

dns.setServers(["1.1.1.1","8.8.8.8"])
initializeDatabase()

const newCarData =[
    {
  brand: "Ford",
  model: "Mustang",
  year: 2019,
  bodyStyle: "Convertible",
  fuelType: "Gasoline",
  transmission: "Automatic",
  engine: "5.0L V8",
  mileage: 25000,
  color: "Red",
  price: 3500000,
  condition: "Used",
  description: "Exciting Ford Mustang convertible with powerful V8 engine.",
  photos: [
    "https://example.com/mustang-photo1.jpg",
    "https://example.com/mustang-photo2.jpg",
    "https://example.com/mustang-photo3.jpg"
  ]
},
{
  brand: "Honda",
  model: "Civic",
  year: 2018,
  bodyStyle: "Coupe",
  fuelType: "Gasoline",
  transmission: "Manual",
  engine: "1.5L Turbocharged Inline-4",
  mileage: 40000,
  color: "Black",
  price: 1800000,
  condition: "Used",
  description: "Sporty Civic coupe with low mileage and manual transmission.",
  photos: [
    "https://example.com/civic-photo1.jpg",
    "https://example.com/civic-photo2.jpg",
    "https://example.com/civic-photo3.jpg"
  ]
}
]

async function seedData() {
    
    try{
        for(const car of carData){
            const newCar = new Car({
                brand: car.brand,
                model:car.model,
                year:car.year,
                bodyStyle: car.bodyStyle,
                fuelType: car.fuelType,
                transmission: car.transmission,
                engine: car.engine,
                mileage: car.mileage,
                color:car.color,
                price: car.price,
                condition:car.condition,
                description:car.description,
                photos:car.photos,
                inMarket:car.inMarket

            })
            newCar.save()
        }
        console.log("successfully seed");
        
    }
    catch(e) {
        console.log("Error while seed",e);
        
    }
}

// seedData()

async function insertData(){
try{
    await Car.insertMany(newCarData)
    console.log("Successfully inserted car data");
    
}catch(e){
    throw e
}
}
// insertData()

async function readCarsData(){
    try{
        const carsData = await Car.find()
        console.log(carsData);
        
    }catch(e)
    { throw e}
}

// readCarsData()
async function readCarsDataByBrand(brand){
    try{
      const carsData =await Car.find({brand: brand})
      console.log(carsData);
      
    }catch(e){
        throw e
    }
}
// readCarsDataByBrand("Ford")

async function readCarsDataByColor(color){
    try{
            const carsData = await Car.find({color: color})
            console.log(carsData);
            
    }catch(e){
        throw e
    }
}
// readCarsDataByColor("Black")

async function updateCarByModel(model,updatedPrice){
    try{
      const carData = await Car.findOneAndUpdate({model: model}, updatedPrice,{new:true})
      console.log(carData);
    }catch(e){
        throw e
    }
}

// updateCarByModel("Corolla", {price: 2300000})

async function updateCarCondition(model,updatedCondition){
    try{
        const carData = await Car.findOneAndUpdate({model:model}, updatedCondition,{new:true})
        console.log(carData);
        
    }catch(e){
        throw e
    }
}

// updateCarCondition("Model S",{condition: "Used"})

async function deleteCarById(carId){
    try{
        const deletedCar = await Car.findByIdAndDelete(carId)
        console.log(deletedCar);
    }catch(e){
        throw e
    }
}
// deleteCarById("6aa524845f7b37613b2ef0ac")

async function deleteCarByBodyStyle(bodyStyle){
    try{
          const deletedCar = await Car.findOneAndDelete({bodyStyle:bodyStyle})
          console.log(deletedCar);
          
    }catch(e){
        throw e
    }
}

// deleteCarByBodyStyle("Coupe")