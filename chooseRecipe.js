const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  function ingredientCheck(bakery, recipes) {
    let matchedRecipes = [];
    for (let item of bakery) {
      for (let i = 0; i < recipes.length; i++) {
        if (item === recipes[i].ingredients[0] || item === recipes[i].ingredients[1]) {
          matchedRecipes.push(recipes[i].name);
        }
      }
    }
    return matchedRecipes;
  };
  let bakeryARecipes = ingredientCheck(bakeryA, recipes);
  let bakeryBRecipes = ingredientCheck(bakeryB, recipes);
  for (let j = 0; j < bakeryARecipes.length; j++) {
    for (let k = 0; k < bakeryBRecipes.length; k++) {
      if (bakeryARecipes[j] === bakeryBRecipes[k]) {
        return bakeryARecipes[j];
      }
    }
  } 
  return 'No matches found!';
};

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cake base'];
let recipes = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'strawberries']
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese']
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'butter']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
  {
    name: 'Potato Ganache',
    ingredients: ['potatoes', 'chocolate']
  },
  {
    name: 'Sweet Fish',
    ingredients: ['anchovies', 'honey']
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ['dijon mustard', 'raisins']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
