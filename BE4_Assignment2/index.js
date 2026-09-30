const {initializeDatabase} =  require("./db/db.connect")
const Recipe = require("./models/recipeSchema.model")
const express = require("express")
const app  = express()
const dns = require("dns")

dns.setServers(["1.1.1.1", "8.8.8.8"])

app.use(express.json())

app.post("/recipes", async (req,res) =>{
   try{
    const {title,author,difficulty,prepTime,cookTime,ingredients,instructions,imageUrl} = req.body

   if(!title && !author && !difficulty && !prepTime &&  !cookTime && !ingredients && !instructions && !imageUrl ){
    return res.status(400).send("All required fields are required")
   }

   const newRecipe ={
    title,
    author,
    difficulty,
    prepTime,
    cookTime,
    ingredients,
    instructions,
    imageUrl
   }
   const savedRecipe = await new Recipe(newRecipe).save()
   res.status(200).json({
    newRecipe: savedRecipe
   })
   }
    catch (e) {
    res.status(500).json({
      message: "Internal server error"
    })
   }
})
//6
app.get("/recipes", async (req, res) => {
  try {
    const recipes = await Recipe.find()

    res.status(200).json({
      recipes: recipes
    })
  } catch (e) {
    res.status(500).json({
      message: "Internal server error"
    })
  }
})

//7
app.get("/recipes/title/:title", async (req, res) => {
  try {
    const title = req.params.title

    const recipe = await Recipe.findOne({ title })

    if (!recipe) {
      return res.status(404).json({
        message: "Recipe not found"
      })
    }

    res.status(200).json({
      recipe: recipe
    })
  } catch (e) {
    res.status(500).json({
      message: "Internal server error"
    })
  }
})
//8
app.get("/recipes/author/:author", async (req, res) => {
  try {
    const author = req.params.author

    const recipes = await Recipe.find({ author })

    if (recipes.length === 0) {
      return res.status(404).json({
        message: "No recipes found for this author"
      })
    }

    res.status(200).json({
      recipes: recipes
    })
  } catch (e) {
    res.status(500).json({
      message: "Internal server error"
    })
  }
})

//9
app.get("/recipes/easy", async (req, res) => {
  try {
    const recipes = await Recipe.find({
      difficulty: "Easy"
    })

    if (recipes.length === 0) {
      return res.status(404).json({
        message: "No easy recipes found"
      })
    }

    res.status(200).json({
      recipes: recipes
    })
  } catch (e) {
    res.status(500).json({
      message: "Internal server error"
    })
  }
})
//10
app.patch("/recipes/difficulty/:recipeId", async (req, res) => {
  try {
    const recipeId = req.params.recipeId
    const { difficulty } = req.body

    const updatedRecipe = await Recipe.findByIdAndUpdate(
      recipeId,
      { difficulty },
      { new: true }
    )

    if (!updatedRecipe) {
      return res.status(404).json({
        message: "Recipe not found"
      })
    }

    res.status(200).json({
      recipe: updatedRecipe
    })
  } catch (e) {
    res.status(500).json({
      message: "Internal server error"
    })
  }
})

//11
app.patch("/recipes/title/:title", async (req, res) => {
  try {
    const title = req.params.title
    const { prepTime, cookTime } = req.body

    const updatedRecipe = await Recipe.findOneAndUpdate(
      { title },
      { prepTime, cookTime },
      { new: true }
    )

    if (!updatedRecipe) {
      return res.status(404).json({
        message: "Recipe not found"
      })
    }

    res.status(200).json({
      recipe: updatedRecipe
    })
  } catch (e) {
    res.status(500).json({
      message: "Internal server error"
    })
  }
})

//12

app.delete("/recipes/:recipeId", async (req, res) => {
  try {
    const recipeId = req.params.recipeId

    const deletedRecipe = await Recipe.findByIdAndDelete(recipeId)

    if (!deletedRecipe) {
      return res.status(404).json({
        message: "Recipe not found"
      })
    }

    res.status(200).json({
      message: "Recipe deleted successfully",
      recipe: deletedRecipe
    })
  } catch (e) {
    res.status(500).json({
      message: "Internal server error"
    })
  }
})

const PORT = process.env.PORT || 3000

initializeDatabase().then(() =>
{
    app.listen(PORT,() =>{
        console.log("server started");
        
    })
}
).catch((e) =>{
    console.log("error while connecting db ", e);
    
})
