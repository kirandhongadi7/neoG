const {initializeDatabase} = require("./db/db.connect")
const Car = require("./models/carSchema.model")
const fs = require("fs")
const dns = require("dns")
const jd = fs.readFileSync("car.json", "utf-8")
const carData = JSON.parse(jd)

dns.setServers(["1.1.1.1","8.8.8.8"])
initializeDatabase()


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

seedData()