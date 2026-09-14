const {initializeDatabase} = require("./db/db.connect")
const dns = require("dns")
const Hotel = require("./models/hotelSchema.model")

dns.setServers(["1.1.1.1","8.8.8.8"])
initializeDatabase()

const newHotel = [
  {
     name: "Lake View",
  category: "Mid-Range",
  location: "124 Main Street, Anytown",
  rating: 3.2,
  reviews: [],
  website: "https://lake-view-example.com",
  phoneNumber: "+1234555890",
  checkInTime: "2:00 PM",
  checkOutTime: "12:00 PM",
  amenities: ["Laundry", "Boating"],
  priceRange: "$$$ (31-60)",
  reservationsNeeded: true,
  isParkingAvailable: false,
  isWifiAvailable: true,
  isPoolAvailable: false,
  isSpaAvailable: false,
  isRestaurantAvailable: false,
  photos: ["https://example.com/hotel1-photo1.jpg", "https://example.com/hotel1-photo2.jpg"],
  },
  { name: "Sunset Resort",
  category: "Resort",
  location: "12 Main Road, Anytown",
  rating: 4.0,
  reviews: [],
  website: "https://sunset-example.com",
  phoneNumber: "+1299655890",
  checkInTime: "2:00 PM",
  checkOutTime: "11:00 AM",
  amenities: ["Room Service", "Horse riding", "Boating", "Kids Play Area", "Bar"],
  priceRange: "$$$$ (61+)",
  reservationsNeeded: true,
  isParkingAvailable: true,
  isWifiAvailable: true,
  isPoolAvailable: true,
  isSpaAvailable: true,
  isRestaurantAvailable: true,
  photos: ["https://example.com/hotel2-photo1.jpg", "https://example.com/hotel2-photo2.jpg"],
}
];

async function seedData(newHotel){

    try{

        const savedData = await Hotel.insertMany(newHotel)
        console.log("Seeded successfully in DB",savedData);
        
    }
    catch(e){
        console.log("Error while seeding",e);
        
    }
}


seedData(newHotel)

async function logAllHotels(){
    try{
        const allHotels = await Hotel.find()
        console.log(allHotels);
        
    }
    catch(e){
        throw e
    }

}

logAllHotels()

async function logHotelByName(hotelName){
    try{
       const hotel = await Hotel.findOne({name: hotelName})
       console.log(hotel);
       
    }
    catch(e){
        throw e
    }
}

logHotelByName("Lake View")

async function hotelWithParkSpace(){
    try{
          const hotel = await Hotel.find({isParkingAvailable: true})
          console.log(hotel);
          
    }
    catch(e){
        throw e
    }
} 
hotelWithParkSpace()
async function logResAvailable(){
    try{
    const hotel = await Hotel.find({isRestaurantAvailable: true})
    console.log(hotel);
    
    }
    catch(e){
        throw e
    }
}

logResAvailable()

async function logMidRange(category){
    try{
         const hotel = await Hotel.find({category:category})
         console.log(hotel);
         
    }catch(e){
        throw e
    }
}

logMidRange("Mid-Range")
async function logHotelByPrice(priceRange){
    try{
           const hotel = await Hotel.find({priceRange: priceRange})
           console.log(hotel);
           
    }
    catch(e)
    {
        throw e
    }
}
logHotelByPrice("$$$$ (61+)")

async function logHotelByRating(rating){
    try{
const hotel = await Hotel.find({rating: rating})
console.log(hotel);

    }
    catch(e){
        throw e
    }
}

logHotelByRating(4.0)

async function logHotelByPhoneNumber(phoneNumber){
    try{
        const hotel = await Hotel.findOne({phoneNumber: phoneNumber})
        console.log(hotel);
        
    }
    catch(e){
        throw e
    }

}
logHotelByPhoneNumber("+1299655890")