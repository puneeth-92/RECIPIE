const sampleRecipes = [
  {
    title: "Masala Dosa",
    description: "Crispy rice pancake filled with spiced potato filling, a South Indian classic.",
    category: "Breakfast",
    ingredients: [
      "1 cup rice", "1/4 cup urad dal", "2 boiled potatoes", "1 onion", "Salt", "Oil"
    ],
    instructions: [
      "Soak rice and dal overnight.",
      "Grind and ferment batter for 8 hours.",
      "Prepare potato masala filling.",
      "Cook dosa on tawa and stuff with filling."
    ],
    prepTime: 40,
    servings: 2,
    image: {
      url: "https://images.unsplash.com/photo-1694849789325-914b71ab4075?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFzYWxhJTIwZG9zYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900"
    },
  },
  {
    title: "Fruit Salad",
    description: "Colorful mix of fresh fruits topped with honey and cream.",
    category: "Dessert",
    ingredients: ["Banana", "Apple", "Pineapple", "Honey", "Cream"],
    instructions: [
      "Chop fruits, mix with cream, drizzle honey."
    ],
    prepTime: 10,
    servings: 2,
    image: {
      url: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJ1aXQlMjBzYWxhZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900"
    },
  },
  {
    title: "Samosa",
    description: "Crispy fried pastry filled with spicy potatoes and peas.",
    category: "Snack",
    ingredients: ["Flour", "Potatoes", "Peas", "Oil"],
    instructions: [
      "Make filling, wrap in dough, and deep fry."
    ],
    prepTime: 40,
    servings: 4,
    image: {
      url: "https://images.unsplash.com/photo-1732519970445-8f2d6998961f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2Ftb3NhfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900"
    },
  },
  {
    title: "Curd Rice",
    description: "Comforting South Indian dish made from rice and yogurt.",
    category: "Lunch",
    ingredients: ["Cooked rice", "Curd", "Mustard seeds", "Curry leaves"],
    instructions: [
      "Mix rice and curd, temper with mustard seeds and curry leaves."
    ],
    prepTime: 15,
    servings: 2,
    image: {
      url: "https://images.unsplash.com/photo-1633383718081-22ac93e3db65?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VyZCUyMHJpY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900"
    },
  },
  {
    title: "Butter Chicken",
    description: "Rich and creamy tomato-based curry with tender chicken pieces.",
    category: "Dinner",
    ingredients: [
      "500g chicken", "1 cup tomato puree", "1/2 cup cream", "Butter", "Spices"
    ],
    instructions: [
      "Cook marinated chicken.",
      "Prepare tomato gravy with butter and cream.",
      "Combine and simmer until thick."
    ],
    prepTime: 60,
    servings: 4,
    image: {
      url: "https://images.unsplash.com/photo-1728910107534-e04e261768ae?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnV0dGVyJTIwY2hpY2tlbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900"
    },
  },
  {
    title: "Paneer Tikka",
    description: "Marinated paneer cubes grilled to perfection with veggies.",
    category: "Snack",
    ingredients: [
      "200g paneer", "Curd", "Spices", "Capsicum", "Onion"
    ],
    instructions: [
      "Marinate paneer in curd and spices.",
      "Grill or bake until charred.",
      "Serve with green chutney."
    ],
    prepTime: 30,
    servings: 3,
    image: {
      url: "https://images.unsplash.com/photo-1701579231378-3726490a407b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGFuZWVyJTIwdGlra2F8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900"
    },
  },
  {
    title: "Veg Biryani",
    description: "Aromatic basmati rice cooked with vegetables and spices.",
    category: "Lunch",
    ingredients: [
      "1 cup basmati rice", "Mixed vegetables", "Yogurt", "Spices", "Saffron"
    ],
    instructions: [
      "Parboil rice and sauté vegetables.",
      "Layer rice and veggies with saffron.",
      "Dum cook for 20 minutes."
    ],
    prepTime: 50,
    servings: 4,
    image: {
      url: "https://images.unsplash.com/photo-1630409346824-4f0e7b080087?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmVnJTIwYmlyaXlhbml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900"
    },
  },
  {
    title: "Gulab Jamun",
    description: "Soft, melt-in-mouth sweet balls soaked in sugar syrup.",
    category: "Dessert",
    ingredients: [
      "1 cup milk powder", "1/4 cup flour", "Sugar", "Cardamom", "Ghee"
    ],
    instructions: [
      "Make dough with milk powder and flour.",
      "Fry golden and soak in syrup."
    ],
    prepTime: 35,
    servings: 6,
    image: {
      url: "https://media.istockphoto.com/id/2202928068/photo/indian-cuisine.webp?a=1&b=1&s=612x612&w=0&k=20&c=TB266YrP2-6w_scrd7XOwjuup20427Hcf3s_zlf-vtA="
    },
  },
  {
    title: "Idli Sambhar",
    description: "Steamed rice cakes served with spicy lentil soup and coconut chutney.",
    category: "Breakfast",
    ingredients: ["Rice", "Urad dal", "Tamarind", "Vegetables", "Spices"],
    instructions: [
      "Ferment rice-dal batter overnight.",
      "Steam idlis and prepare sambhar."
    ],
    prepTime: 50,
    servings: 3,
    image: {
      url: "https://images.unsplash.com/photo-1632104667384-06f58cb7ad44?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aWRsaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900"
    },
  },
  {
    title: "Pav Bhaji",
    description: "Mumbai-style mashed vegetable curry served with buttered buns.",
    category: "Snack",
    ingredients: ["Potatoes", "Tomatoes", "Peas", "Pav Bhaji Masala", "Butter"],
    instructions: [
      "Boil and mash veggies.",
      "Cook with masala and butter.",
      "Serve with toasted pav."
    ],
    prepTime: 40,
    servings: 4,
    image: {
      url: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGF2JTIwYmhhaml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900"
    },
  },
  {
    title: "Chole Bhature",
    description: "Spicy chickpeas curry with deep-fried bread.",
    category: "Lunch",
    ingredients: ["Chickpeas", "Onion", "Tomato", "Flour", "Yogurt"],
    instructions: [
      "Cook chickpeas with masala.",
      "Prepare and fry bhature dough."
    ],
    prepTime: 70,
    servings: 3,
    image: {
      url: "https://imgs.search.brave.com/YrUi3tTom8Iu6tQaf-nXShzF_rHu_HtRjfl9HTkarVs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jaG9sZS1iaGF0/dXJlLWlzLW5vcnRo/LWluZGlhbi1mb29k/LWRpc2gtY29tYmlu/YXRpb24tY2hhbmEt/bWFzYWxhLWJoYXR1/cmEtcHVyaV8xMDkz/MzEwLTYxOC5qcGc_/c2VtdD1haXNfaHli/cmlkJnc9NzQw"
    },
  },
  {
    title: "Rasgulla",
    description: "Spongy cheese balls in light sugar syrup, Bengali delight.",
    category: "Dessert",
    ingredients: ["Milk", "Lemon juice", "Sugar", "Water"],
    instructions: [
      "Curdle milk, make balls, and boil in sugar syrup."
    ],
    prepTime: 45,
    servings: 5,
    image: {
      url: "https://images.unsplash.com/photo-1714799263412-2e0c1f875959?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFzZ3VsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900"
    },
  },
  {
    title: "Momos",
    description: "Steamed dumplings filled with vegetables or chicken.",
    category: "Snack",
    ingredients: ["Flour", "Cabbage", "Carrot", "Soy sauce"],
    instructions: [
      "Make filling and dough.",
      "Shape and steam for 10 mins."
    ],
    prepTime: 30,
    servings: 3,
    image: {
      url: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9tb3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900"
    },
  },
  {
    title: "Paneer Butter Masala",
    description: "Cottage cheese cubes simmered in a rich, buttery tomato gravy.",
    category: "Dinner",
    ingredients: ["Paneer", "Tomato puree", "Cream", "Butter", "Spices"],
    instructions: [
      "Prepare buttery tomato gravy.",
      "Add paneer and simmer gently."
    ],
    prepTime: 45,
    servings: 3,
    image: {
      url: "https://images.unsplash.com/photo-1708793873401-e8c6c153b76a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFuZWVyJTIwYnV0dGVyJTIwbWFzYWxhfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900"
    },
  },
  {
    title: "Aloo Paratha",
    description: "Stuffed flatbread with spicy mashed potatoes, served with curd.",
    category: "Breakfast",
    ingredients: ["Wheat flour", "Potatoes", "Spices", "Butter"],
    instructions: [
      "Stuff mashed potatoes into dough.",
      "Cook on tawa with butter."
    ],
    prepTime: 25,
    servings: 2,
    image: {
      url: "https://imgs.search.brave.com/NtDwtjQz0hRg1kS0nnOsmv8SeiJyDnfSajHtPhrqnb4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDMv/NDIxLzc3My9zbWFs/bC9pbmRpYW4tYWxv/by1wYXJhdGhhLWJy/ZWFkLXdpdGgtcG90/YXRvLXBob3RvLmpw/Zw"
    },
  },
  {
    title: "Fried Rice",
    description: "Chinese-style stir-fried rice with veggies and soy sauce.",
    category: "Lunch",
    ingredients: ["Rice", "Soy sauce", "Carrots", "Peas", "Onion"],
    instructions: [
      "Cook rice and stir-fry with vegetables and sauces."
    ],
    prepTime: 25,
    servings: 2,
    image: {
      url: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJpZWQlMjByaWNlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900"
    },
  },
  {
    title: "Pulao",
    description: "Mildly spiced rice dish with vegetables and ghee.",
    category: "Lunch",
    ingredients: ["Basmati rice", "Carrots", "Beans", "Peas"],
    instructions: [
      "Sauté vegetables, add rice and cook with spices."
    ],
    prepTime: 35,
    servings: 3,
    image: {
      url: "https://images.unsplash.com/photo-1612927601601-6638404737ce?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZyaWVkJTIwcmljZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900"
    },
  },
  {
    title: "Vada Pav",
    description: "Mumbai's favorite street food — spiced potato vada in a bun.",
    category: "Snack",
    ingredients: ["Potatoes", "Gram flour", "Bread buns", "Garlic chutney"],
    instructions: [
      "Make potato vadas, fry, and serve inside pav with chutney."
    ],
    prepTime: 30,
    servings: 2,
    image: {
      url: "https://images.unsplash.com/photo-1750767397012-3413ba4fdbc7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dmFkYSUyMHBhdnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900"
    },
  },
  {
    title: "Roti and Curry",
    description: "Simple homemade wheat rotis served with vegetable curry.",
    category: "Dinner",
    ingredients: ["Wheat flour", "Vegetables", "Spices"],
    instructions: [
      "Prepare roti dough and roll thin.",
      "Cook curry and serve together."
    ],
    prepTime: 40,
    servings: 2,
    image: {
      url: "https://images.unsplash.com/photo-1712757248842-04f6e3844374?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGluZGlhbiUyMHJvdGklMjBhbmQlMjBjdXJyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900"
    },
  },
  {
    title: "Upma",
    description: "Savory semolina porridge cooked with veggies and spices.",
    category: "Breakfast",
    ingredients: ["Rava", "Onion", "Carrot", "Mustard seeds"],
    instructions: [
      "Roast rava, sauté veggies, cook with water and spices."
    ],
    prepTime: 20,
    servings: 2,
    image: {
      url: "https://media.istockphoto.com/id/1488737992/photo/upma-recipe-suji-ka-upma-rava-upma-with-red-and-coconut-chutney.webp?a=1&b=1&s=612x612&w=0&k=20&c=1zjO85hiNAi55VhDbcISJjm2291mEw_pszwU1QuJKzs="
    },
  },
];

module.exports = { data: sampleRecipes };