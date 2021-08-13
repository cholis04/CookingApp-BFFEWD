class Modal extends HTMLElement {
  set recipe(recipe) {
    this._recipe = recipe
    this.render()
  }

  renderInstructions() {
    const { strInstructions } = this._recipe
    const list = strInstructions.split('.')
    const removeEmpty = list.filter((item) => item !== '')

    let temp = ``

    removeEmpty.forEach((item) => {
      temp += `<li>${item}</li>`
    })

    return temp
  }

  renderIngredients() {
    const recipe = this._recipe

    let temp = ``
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe['strIngredient' + i.toString()]
      const measure = recipe['strMeasure' + i.toString()]

      if (ingredient !== '' && measure !== '') {
        temp += `<li><b>${measure}</b> - ${ingredient}</li>`
      }
    }
    return temp
  }

  render() {
    const recipe = this._recipe
    this.innerHTML = `
      <div id="modal" class="modal">
        <div class="box-modal">
          <div class="close-modal">
            <button id="btnClose">Close (x)</button>
          </div>
          <div class="content-modal">
            <h4>${recipe.strMeal}</h4>
            <p>Category : ${recipe.strCategory}</p>
            <figure>
                <img src=${recipe.strMealThumb} alt="Chicken" />
            </figure>
            <div class="info">
              <h5>Ingredients</h5>
              <ul class="box-ingredients">
                  ${this.renderIngredients()}
                  <li><b>1 pound</b> - penne rigate</li>
              </ul>
            </div>
            <div class="info">
              <h5>Instructions</h5>
              <ol class="box-instructions">
                ${this.renderInstructions()}
              </ol>
            </div>
          </div>
        </div>
      </div>
    `
    const modal = this.querySelector('#modal')
    const btnClose = this.querySelector('#btnClose')
    modal.addEventListener('click', (e) => {
      if (e.target.className === 'modal') {
        this.remove()
        document.body.style.overflow = 'auto'
      }
    })

    btnClose.addEventListener('click', () => {
      this.remove()
      document.body.style.overflow = 'auto'
    })
  }
}

customElements.define('modal-box', Modal)
