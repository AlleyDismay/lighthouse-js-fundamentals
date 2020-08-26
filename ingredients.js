const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

let count = 0;

// Write a while loop that prints out the contents of ingredients:
while (count < ingredients.length) {
  console.log(ingredients[count]);
  count++
}

// Write a for loop that prints out the contents of ingredients:

for (count = 0; count < ingredients.length; count++) {console.log(ingredients[count]);}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

ingredients.reverse().forEach(ingredient => console.log(ingredient));