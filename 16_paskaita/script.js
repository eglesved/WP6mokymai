const fruitList = doc
const fruits =["banana 1.5e/kg", "kiwi 4e/kg", "watermelon 1e/kg"];

for (let i = 0; 1<fruits.length; i++){
    const fruit = fruits[i]

    const fruitListItem = document.createElement("li");
    fruitListItem.textContent = fruit;

    fruitList.append(fruitListItem);
}