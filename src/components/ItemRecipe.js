import './Modal.js'

class ItemRecipe extends HTMLElement {
  set recipe(recipe) {
    this._recipe = recipe
    this.render()
  }

  render() {
    const recipe = this._recipe
    this.innerHTML = `
      <div class="item-list">
          <div class="photo">
              <img src=${recipe.strMealThumb} alt=${recipe.strMeal} />
          </div>
          <div class="details">
              <h5>${recipe.strMeal}</h5>
              <p>${recipe.strArea}</p>
              <div class="action">
                  <button id="btnDetail">See recipe ↗</button>
              </div>
          </div>
      </div>
    `
    this.querySelector('#btnDetail').addEventListener('click', () => {
      const modalBoxElement = document.createElement('modal-box')
      modalBoxElement.recipe = recipe
      document.body.style.overflow = 'hidden'
      document.body.insertBefore(modalBoxElement, document.body.firstChild)
    })
  }
}

customElements.define('item-recipe', ItemRecipe)
