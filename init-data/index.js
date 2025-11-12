const mongoose=require("mongoose");
const initdata=require("./data.js");
const Recipe=require("../models/recipe.js");

const mongo_url='mongodb://127.0.0.1:27017/Recipie';
main()
.then((res)=>{
    console.log("DataBase connection is Scuccessfull");
}).catch((err)=>{console.log(err)});

async function main(){
    await mongoose.connect(mongo_url);
}

const initDB= async()=>{
    await Recipe.deleteMany({});
    await Recipe.insertMany(initdata.data);
    console.log("data initilized");
};

initDB();
