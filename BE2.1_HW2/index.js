const {initializeDatabase} = require("./db/db.connect")
const dns = require("dns")
const Hotel = require("./models/hotelSchema.model")
const express= require("express")
const app = express()

app.use(express.json())

dns.setServers(["1.1.1.1","8.8.8.8"])


// const newHotel = { name: "Sunset Resort",
//   category: "Resort",
//   location: "12 Main Road, Anytown",
//   rating: 4.0,
//   reviews: [],
//   website: "https://sunset-example.com",
//   phoneNumber: "+1299655890",
//   checkInTime: "2:00 PM",
//   checkOutTime: "11:00 AM",
//   amenities: ["Room Service", "Horse riding", "Boating", "Kids Play Area", "Bar"],
//   priceRange: "$$$$ (61+)",
//   reservationsNeeded: true,
//   isParkingAvailable: true,
//   isWifiAvailable: true,
//   isPoolAvailable: true,
//   isSpaAvailable: true,
//   isRestaurantAvailable: true,
//   photos: ["https://example.com/hotel2-photo1.jpg", "https://example.com/hotel2-photo2.jpg"],
// }

async function seedData(newHotel){

    try{

        const newOne = new Hotel(newHotel)
        const savedData = await newOne.save() 
        return savedData
        // console.log("Seeded successfully in DB",savedData);
        
    }
    catch(e){
        console.log("Error while seeding",e);
        
    }
}


// seedData(newHotel)
app.post("/hotels",async (req,res)=>{
try{
const newHotel = await seedData(req.body)

res.status(200).json({
    newHotel: newHotel
})
}catch(e){
    res.status(500).json({
        error: "Failed  to seed data"
    })
}

})

async function logAllHotels(){
    try{
        const allHotels = await Hotel.find()
        // console.log(allHotels);
        return allHotels
        
    }
    catch(e){
        throw e
    }

}

//1 To read all hotels

app.get("/hotels", async(req,res) =>{
    const hotels = await logAllHotels()

    if(!hotels){
      res.status(404).send("Hotel not found")
      return
    }

    res.status(200).json(hotels)
})

// logAllHotels()

async function logHotelByName(hotelName){
    try{
       const hotel = await Hotel.findOne({name: hotelName})
    //    console.log(hotel);
       return hotel
       
    }
    catch(e){
        throw e
    }
}

// logHotelByName("Lake View")
//2 To read a hotel by its name
app.get("/hotels/:hotelName",async(req,res) =>{
    const hotelName = req.params.hotelName
   const hotel = await logHotelByName(hotelName)
    if(!hotel){
      res.status(404).send("Hotel not found")
      return
    }
    res.status(200).json(hotel)
})

async function hotelWithParkSpace(){
    try{
          const hotel = await Hotel.find({isParkingAvailable: true})
          console.log(hotel);
          
    }
    catch(e){
        throw e
    }
} 
// hotelWithParkSpace()
async function logResAvailable(){
    try{
    const hotel = await Hotel.find({isRestaurantAvailable: true})
    console.log(hotel);
    
    }
    catch(e){
        throw e
    }
}

// logResAvailable()

async function logMidRange(category){
    try{
         const hotel = await Hotel.find({category:category})
         console.log(hotel);
         
    }catch(e){
        throw e
    }
}

// logMidRange("Mid-Range")
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
// logHotelByPrice("$$$$ (61+)")

async function logHotelByRating(rating){
    try{
const hotel = await Hotel.findOne({rating: rating})
// console.log(hotel);
return hotel

    }
    catch(e){
        throw e
    }
}

// logHotelByRating(4.0)
//4 To read hotel by rating
app.get("/hotels/rating/:hotelRating",async (req,res) =>{
    const hotelRating = Number(req.params.hotelRating)
    const hotel = await logHotelByRating(hotelRating)

     if(!hotel){
      res.status(404).send("Hotel not found")
      return
    }

    res.status(200).json(hotel)
})

async function logHotelByPhoneNumber(phoneNumber){
    try{
        const hotel = await Hotel.findOne({phoneNumber: phoneNumber})
        return hotel
        
    }
    catch(e){
        throw e
    }

}
// logHotelByPhoneNumber("+1299655890")
//3 To read a hotel by phone number
app.get("/hotels/directory/:phoneNumber", async(req,res) =>{
    const phoneNum= req.params.phoneNumber
    const hotel = await logHotelByPhoneNumber(phoneNum)

     if(!hotel){
      res.status(404).send("Hotel not found")
      return
    }
    res.status(200).json(hotel)
})

//5 To read all hotels by category.

async function logHotelByCategory(category){
    try{
        const hotel = await Hotel.find({category: category})
        return hotel
    }catch(e){
        throw e
    }
}

app.get("/hotels/category/:hotelCategory", async (req,res) =>{
    const hotelCategory = req.params.hotelCategory
    const hotel = await logHotelByCategory(hotelCategory)

     if(!hotel){
      res.status(404).send("Hotel not found")
      return
    }

    res.status(200).json(hotel)
})

//BE2.3_HW

async function updateCheckoutTime(hotelId, updatedCheckoutTime){

    try{
        const hotel = await Hotel.findByIdAndUpdate(hotelId, updatedCheckoutTime,{new:true})
        console.log(hotel);
        
    }catch(e){
        throw e
    }
}
// updateCheckoutTime('6aa7f777956d11587a158ce4',{checkOutTime:"11:00 AM"})

async function UpdateHotelRating(hotelName,updetedRating){
    try{
       const hotel = await Hotel.findOneAndUpdate({name:hotelName}, updetedRating,{new:true})
       console.log(hotel);
       
    }catch(e){
        throw e
    }
    
}

// UpdateHotelRating("Sunset Resort",{rating: 4.2})


async function UpdateHotelPhoneNumber(phoneNumber,updatedPhoneNumber){
    try{
        const hotel = await Hotel.findOneAndUpdate({phoneNumber:phoneNumber},updatedPhoneNumber,{new:true})
        console.log(hotel);  
    }catch(e){
        throw e
    }
}

// UpdateHotelPhoneNumber("+1299655890",{phoneNumber: "+1997687392"})

async function deleteHotelById(hotelId){
    try{
        return await Hotel.findByIdAndDelete(hotelId)
        
        // console.log("Successfully Deleted");
    }catch(e){
        throw e
    }
}

// deleteHotelById("6aa637db93a48307970b03e0")
//BE4.3_HW2 to delete a hotel data by their ID in the Database

app.delete("/hotels/:hotelId", async(req,res) =>{
    try{
        const hotelId = req.params.hotelId

        const deletedHotel = await deleteHotelById(hotelId)

        if(deletedHotel){
            res.status(200).json({
                deletedHotel: deletedHotel
            })
        }

    }catch(e){
        console.log("Error while deleting");
        
    }
})

async function deleteHotelByPhoneNumber(phoneNumber) {
    try{
        await Hotel.findOneAndDelete({phoneNumber:phoneNumber})
        console.log("Successfully Deleted");
        
    }catch(e){
        throw e
    }
}
// deleteHotelByPhoneNumber("+1997687392")

const PORT = process.env.PORT

initializeDatabase().then(()=>{
    app.listen(PORT,()=>{
    console.log("Server connected");
    
})
}).catch((e) =>{
    console.log("Failed to connect DB",e);
    
})