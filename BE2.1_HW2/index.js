const {initializeDatabase} = require("./db/db.connect")
const dns = require("dns")
const Hotel = require("./models/hotelSchema.model")

dns.setServers(["1.1.1.1","8.8.8.8"])
initializeDatabase()

const newHotel = {
  name: "New Hotel",
  category: "Mid-Range",
  location: "123 Main Street, Frazer Town",
  rating: 4.0,
  reviews: [],
  website: "https://hotel-example.com",
  phoneNumber: "+1234567890",
  checkInTime: "2:00 PM",
  checkOutTime: "12:00 PM",
  amenities: ["Laundry", "Room Service"],
  priceRange: "$$$ (31-60)",
  reservationsNeeded: true,
  isParkingAvailable: true,
  isWifiAvailable: true,
  isPoolAvailable: false,
  isSpaAvailable: false,
  isRestaurantAvailable: true,
  photos: ["https://example.com/hotel-photo1.jpg", "https://example.com/hotel-photo2.jpg"],
};

async function seedData(newHotel){

    try{

        const newHot = new Hotel(newHotel)
        const savedData = await newHot.save()
        console.log("Seeded successfully in DB",savedData);
        
    }
    catch(e){
        console.log("Error while seeding",e);
        
    }
}


seedData(newHotel)