class SearchBox extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  set clickEvent(event) {
    this._clickEvent = event
    this.render()
  }

  get value() {
    return this.querySelector('#keywordSearch').value
  }

  render() {
    this.innerHTML = `
        <section class="search-box">
            <form class="search-form" id="formSearch">
                <input type="search" id="keywordSearch" placeholder="Type something like chicken, cheese and etc ..." />
                <button id="btnSearch" class="btn-search">Search</button>
            </form>
        </section>
    `

    this.querySelector('#formSearch').addEventListener(
      'submit',
      this._clickEvent
    )
  }
}

customElements.define('search-box', SearchBox)
