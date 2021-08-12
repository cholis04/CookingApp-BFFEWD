class Footer extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `
      <p>Design with ❤ by cholis04</p>
      <p>Data source from TheMealDB</p>
    `
  }
}

customElements.define('footer-text', Footer)
