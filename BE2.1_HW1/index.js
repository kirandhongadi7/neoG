const {initializeDatabase}  = require("./db/db.connect")
const dns = require("dns")
const Restaurant = require("./models/restaurant.model")

dns.setServers(["1.1.1.1","8.8.8.8"])


const newRestaurant = {
  name: "Somi",
  cuisine: ["Greek"],
  location: "11 Main Road, Gem",
  rating: 4.3,
  reviews: [],
  website: "https://somi-example.com",
  phoneNumber: "+1234997390",
  openHours: "Tue-Sun: 11:00 AM - 10:00 PM",
  priceRange: "$$ (11-30)",
  reservationsNeeded: false,
  isDeliveryAvailable: true,
  menuUrl: "https://somi-example.com/menu",
  photos: ["https://example.com/somi-photo1.jpg", "https://example.com/somi-photo2.jpg"],
};

async function dbconnect(){
await initializeDatabase()
}
dbconnect()

async function seedData(newRestaurant){

    try{
        const newRes = new Restaurant(newRestaurant)
        const resData = await newRes.save()

        console.log("successfully seed of Restaurant",resData);
        
    }
    catch(e){
     console.log("Error while seeding",e);
     
    }
}


// seedData(newRestaurant)

async function showAllRestaurants(){
    try{
        const allRes = await Restaurant.find()
        console.log(allRes);
        
    }catch(e){
        console.log("Error while find",e);
        
    }
}
// showAllRestaurants()

async function readResByName(resName){
    try{
        const res = await Restaurant.findOne({name: resName})
        console.log(res);
        
    }
    catch(e){
        console.log("Error while read",e);
        
    }

}
// readResByName("Somi")


async function findReservationTrue(){
    try{
        const res = await Restaurant.find({reservationsNeeded: true})
        console.log(res);
        
    }
    catch(e) {
        console.log("error while find",e);
        
    }
}

// findReservationTrue()

async function findDeliveryTrue(){
    try{
        const res = await Restaurant.find({isDeliveryAvailable: true})
        console.log(res);
        
    }catch(e){
        console.log("Error while find",e);
        
    }
}
// findDeliveryTrue()

async function readPhoneNumber(number){
    try{
        const res = await Restaurant.findOne({phoneNumber: number})
        console.log(res);
        
    }
    catch(e){
        console.log("Error while read");
        
    }
}
// readPhoneNumber("+1288997392")

async function findCuisine(cuisine){
        try{
            const res = await Restaurant.find({cuisine:cuisine})
            console.log(res);
        }
        catch(e){
            throw e
        }
}
// findCuisine("Italian")


// BE2.3_HW1


async function updateResRating(resId,updatedRating){
  try{
   const res = await Restaurant.findByIdAndUpdate(resId,updatedRating,{new:true})
  console.log(res);
  }catch(e){
    throw e
  }
  
}
// updateResRating('6aa649c69ae238eaa71a3c20',{rating:4.1})


async function updateResName(resName,updateName){
    try{
        const res  = await Restaurant.findOneAndUpdate({name: resName}, updateName,{new:true})
        console.log(res);
        
    }catch(e){
        throw e
    }
}

// updateResName("Somi", {name:"Som Sarovar"})

async function updateResDelivery(phoneNumber,updateDelivery){
try{
    const res = await Restaurant.findOneAndUpdate({phoneNumber: phoneNumber},updateDelivery,{new:true})
    console.log(res);
}catch(e){
    throw e
}
}

updateResDelivery("+1288997392",{isDeliveryAvailable: true})