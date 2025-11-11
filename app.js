const express=require("express");
const app=express();
const port=8080;
const path=require("path");
const Recipe=require("./models/recipe.js");

// mongooge
const mongoose=require("mongoose");
const mongo_url='mongodb://127.0.0.1:27017/Recipie';
main()
.then((res)=>{
    console.log("DataBase connection is Scuccessfull");
}).catch((err)=>{console.log(err)});

async function main(){
    await mongoose.connect(mongo_url);
}

app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.get("/recipes",async(req,res)=>{
    const allRecipes=await Recipe.find({});
    res.render("recipes.ejs",{allRecipes});
});

app.get("/recipes/new", (req, res) => {
  res.render("add.ejs");
});

app.post("/recipes", async (req, res) => {
  const data = req.body.recipe;

  data.ingredients = data.ingredients.split("\n").map(line => line.trim()).filter(line => line);
  data.instructions = data.instructions.split("\n").map(line => line.trim()).filter(line => line);

  const newRecipe = new Recipe(data);
  await newRecipe.save();
  res.redirect("/recipes");
});

app.get("/recipes/:id", async (req, res) => {
  const { id } = req.params;
  const recipe = await Recipe.findById(id);
  if (!recipe) {
    return res.redirect("/recipes");
  }
  res.render("show.ejs", { recipe });
});

app.get("/login",(req,res)=>{
    res.render("login.ejs");
});

app.listen(port,()=>{
    console.log(`listening on port : ${port}`)
});
