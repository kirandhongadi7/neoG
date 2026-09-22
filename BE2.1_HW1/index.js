const {initializeDatabase}  = require("./db/db.connect")
const express = require("express")
const app = express()
const dns = require("dns")
const Restaurant = require("./models/restaurant.model")
dns.setServers(["1.1.1.1","8.8.8.8"])

app.use(express.json())


// const newRestaurant = {
//   name: "Somi",
//   cuisine: ["Greek"],
//   location: "11 Main Road, Gem",
//   rating: 4.3,
//   reviews: [],
//   website: "https://somi-example.com",
//   phoneNumber: "+1234997390",
//   openHours: "Tue-Sun: 11:00 AM - 10:00 PM",
//   priceRange: "$$ (11-30)",
//   reservationsNeeded: false,
//   isDeliveryAvailable: true,
//   menuUrl: "https://somi-example.com/menu",
//   photos: ["https://example.com/somi-photo1.jpg", "https://example.com/somi-photo2.jpg"],
// };






async function seedData(newRestaurant){

    try{
        const newRes = new Restaurant(newRestaurant)
        const resData = await newRes.save()
        return resData

        
        
    }
    catch(e){
     console.log("Error while seeding",e);
     
    }
}
app.post("/restaurants", async(req,res) =>{
   try{
     const newRes = await seedData(req.body)
     res.status(200).json({
        newRes : newRes
     })
   }catch(e){
    res.status(500).json({error: "Failed to add Restaurant"})
   }

})


// seedData(newRestaurant)

async function showAllRestaurants(){
    try{
        const allRes = await Restaurant.find()
        return allRes  
    }catch(e){
        console.log("Error while find",e);
        
    }
}
// showAllRestaurants()

// 1. To read all restaurants from the Database

app.get("/restaurants", async(req,res) =>{

    const allRes = await showAllRestaurants()
    if(!allRes){
        res.status(404).json({
            message: "Restaurants not found"
        })
        return
    }

    res.status(200).json(allRes)

})

async function readResByName(resName){
    try{
        const res = await Restaurant.findOne({name: resName})
        // console.log(res);
        return res
        
    }
    catch(e){
        console.log("Error while read",e);
        
    }

}
// readResByName("Somi")
//2 To read a restaurant by its name
app.get("/restaurants/:restaurantName", async (req,res) =>{

    const resName = req.params.restaurantName

    const rest = await readResByName(resName)

    if(!rest){
        res.status(404).json({
            message: "Restaurant not found"
        })
        return
    }

    res.status(200).json(rest)
})


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
        // console.log(res);
        return res
        
    }
    catch(e){
        console.log("Error while read");
        
    }
}
// readPhoneNumber("+1288997392")
// 3 To read a restaurant by phone number
app.get("/restaurants/directory/:phoneNumber", async (req,res) =>{
    const getPhoneNum = req.params.phoneNumber

    const rest = await readPhoneNumber(getPhoneNum)

    if(!rest) {
        res.status(404).json({
            message: "Restaurant not found"
        })
        return
    }

    res.status(200).json(rest)
})

async function findCuisine(cuisine){
        try{
            const res = await Restaurant.find({cuisine:cuisine})
            // console.log(res);
            return res
        }
        catch(e){
            throw e
        }
}
// findCuisine("Italian")

//4 To read all restaurants by cuisine

app.get("/restaurants/cuisine/:cuisineName",async (req,res) =>{
const cuisine = req.params.cuisineName

const rest = await findCuisine(cuisine)

if(!rest) {
    res.status(404).send("Restaurant not found")
    return
}

res.status(200).json(rest)
})

//5 To read all restaurants by location

async function readByLocation(resLocation){

try{
    const res = await Restaurant.find({location: resLocation})
    return res
}catch(e){
    throw e
}
}

app.get("/restaurants/location/:restaurantLocation",async (req,res)=>{

    const location = req.params.restaurantLocation

    const rest = await readByLocation(location)
    if(!rest){
        res.status(404).send("Restaurant not found")
        return
    }

    res.status(200).json(rest)
})



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

// updateResDelivery("+1288997392",{isDeliveryAvailable: true})


async function deleteRestaurantById(resId){
    try{
         const res = await Restaurant.findByIdAndDelete(resId)
         return res
         
    }catch(e){
        throw e
    }
}

// deleteRestaurantById("6aa56efc92e99469f32a2043")
//  BE4.2_HW1, To delete a restaurant data by their ID

app.delete("/restaurants/:restaurantId", async (req,res) =>{

   try{
     const resId = req.params.restaurantId

     const deletedRes = await deleteRestaurantById(resId)

     if(deletedRes){
        res.status(400).json({
            deletedRes:deletedRes
        })
     }
   }catch(e){
    console.log("Error while deleting",e);
    
   }
})

async function deleteRestaurantByName(resName){
    try{
       const res = await Restaurant.findOneAndDelete({name: resName})
       console.log("Restaurant is deleted");
       
    }catch(e){
        throw e
    }
}

// deleteRestaurantByName("Cha Cha")

//  BE4.4_HW1 Update cuisine
async function updateResCuisine(resId,updetedCuisine){
    try{
          return await Restaurant.findByIdAndUpdate({_id:resId},updetedCuisine,{new:true})
    }catch(e){
        throw e 
    }
}

app.post("/restaurants/cuisine/:cuisineId",async (req,res) =>{
    try{
        const cuisineId = req.params.cuisineId
        const updatedResCuis = await updateResCuisine(cuisineId,req.body)
    if(updatedResCuis){
        res.status(200).json({
            updatedRes: updatedResCuis
        })
    }
    else{
        res.status(404).send("Restaurant Id not found")
    }
    }catch(e){
        throw e
    }
})

const PORT = process.env.PORT || 3000

initializeDatabase().then(() =>{
    app.listen(PORT,() =>{
    console.log("Server running successefully on port: 3000");
    
})
}).catch((e) =>{
    console.log("DB failed to connect ", e);
    
})