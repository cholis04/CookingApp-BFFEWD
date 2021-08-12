import './ItemRecipe.js'

class MainContent extends HTMLElement {
  connectedCallback() {
    this.renderWelcome()
  }

  set keyword(keyword) {
    this._keyword = keyword
  }

  set recipes(recipes) {
    this._recipes = recipes
    this.renderResults()
  }

  renderWelcome() {
    this.innerHTML = `
      <div id="welcome" class="welcome">
        <img src="images/Chef_Isometric.png" />
        <blockquote>
            “Nothing is better than going home to family and eating good food and relaxing.”<br />
            <span>-Irina Shayk-</span>
        </blockquote>
      </div>
    `
  }

  renderError(message) {
    this.innerHTML = `
      <div id="empty" class="empty">
        <p>${message}</p>
      </div> 
    `
  }

  renderResults() {
    const recipes = this._recipes

    this.innerHTML = `
      <style>
        main-content {
          width:100%;
        }
      </style>
      <div class="main-content">
        <p class="result-text"><strong>${recipes.length}</strong> ${
      recipes.length > 1 ? 'results' : 'result'
    } for <em>"${this._keyword}"</em> ${
      recipes.length > 1 ? 'recipes' : 'recipe'
    }</p>
        <div id="boxList" class="box-list">
        </div>
      </div>
    `

    const boxlistElement = this.querySelector('#boxList')
    recipes.forEach((recipe) => {
      const recipeItemElement = document.createElement('item-recipe')
      recipeItemElement.recipe = recipe
      boxlistElement.appendChild(recipeItemElement)
    })
  }
}

customElements.define('main-content', MainContent)
