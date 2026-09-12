const {initializeDatabase}  = require("./db/db.connect")
const dns = require("dns")
const Restaurant = require("./models/restaurant.model")

dns.setServers(["1.1.1.1","8.8.8.8"])
initializeDatabase()

const newRestaurant = {
  name: "Cha Chi",
  cuisine: ["Spanish"],
  location: "123 Main Street, Anytown",
  rating: 4.0,
  reviews: [],
  website: "https://example.com",
  phoneNumber: "+1234567890",
  openHours: "Mon-Sun: 11:00 AM - 10:00 PM",
  priceRange: "$$ (11-30)",
  reservationsNeeded: true,
  isDeliveryAvailable: true,
  menuUrl: "https://example.com/menu",
  photos: ["https://example.com/photo1.jpg", "https://example.com/photo2.jpg"],
};

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


seedData(newRestaurant)