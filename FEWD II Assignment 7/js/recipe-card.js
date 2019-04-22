/*eslint-env browser*/

function Recipe(title, serves, ingredients) {
    "use strict";
    this.title = title;
    this.serves = serves;
    this.ingredients = ingredients;
}

var Recipe = new Recipe("Guacamole",
                        "Serves: " + 4,
                        ["Ingredients: ",
                         " 3 avocados",
                         " 1 lime",
                         " 1 teaspoon salt",
                         " 3 tablespoons cilantro",
                         " 2 diced tomatoes",
                         " 1 teaspoon garlic",
                         " 1 pinch ground peper"]);
window.console.log(Recipe.title);
window.console.log(Recipe.serves);
for (var property in Recipe.ingredients) {
    window.console.log(property + Recipe.ingredients[property]);
}