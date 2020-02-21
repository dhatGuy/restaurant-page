const foodContainer = (source, text) => {

    let food = document.createElement('div')
    food.classList.add('food')

    let img = document.createElement('img')

    let paragraph = document.createElement('p')
    paragraph.classList.add('name')
    paragraph.textContent = text

    img.setAttribute('src', source)

    food.appendChild(img)
    food.appendChild(paragraph)

    return food
}
const menuGen = () => {
    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('id', 'menu')
    menuContainer.setAttribute('data-tab-content', " ")

    let foods = document.createElement('div')
    foods.classList.add('foods')


    foods.appendChild(foodContainer('./images/jollof-featured-image.jpg', 'Nigerian Jollof Rice'));
    foods.appendChild(foodContainer('./images/POUNDED-YAM-696x464.jpg', 'Pounded Yam'))
    foods.appendChild(foodContainer('./images/Chicken-Suya.jpg', 'Chicken Suya'))

    menuContainer.appendChild(foods)

    return menuContainer

}

export default menuGen
