const mongoose=require("mongoose");
const mongo_url='mongodb://127.0.0.1:27017/Recipie';
const Schema=mongoose.Schema;

main()
.then((res)=>{
    console.log("DataBase connection is Successfull");
}).catch((err)=>{console.log(err)});

async function main(){
    await mongoose.connect(mongo_url);
};

const recipeSchema = new Schema({
  title: String,
  description: String,

  ingredients: {
    type: [String],
  },

  instructions: {
    type: [String],
  },

  prepTime: Number,
  servings: {
    type: Number,
    default: 1,
  },

  category: {
    type: String,
    enum: ["Breakfast", "Lunch", "Dinner", "Snack", "Dessert", "Other"],
    default: "Other",
  },

  image: {
    url: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1670058124043-4f55e08d0f8f?auto=format&fit=crop&q=60&w=900",
      set: (v) => {
        return v === ""
          ? "https://images.unsplash.com/photo-1670058124043-4f55e08d0f8f?auto=format&fit=crop&q=60&w=900"
          : v;
      },
    },
  },
});

const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;