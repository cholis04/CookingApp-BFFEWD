class Header extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `
      <h2>Cooking <span>Recipe</span> App</h2>
      <p>Start looking for the recipe you want to cook</p>
    `
  }
}

customElements.define('header-banner', Header)
