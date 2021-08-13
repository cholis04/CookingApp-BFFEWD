import DataFetch from './utlis/data.js'

const app = () => {
  const searchElement = document.querySelector('search-box')
  const mainContentElement = document.querySelector('main-content')

  const onSearchSubmit = async (e) => {
    e.preventDefault()
    if (searchElement.value !== null && searchElement.value !== '') {
      searchingRecipes()
      try {
        const result = await DataFetch.searchRecipe(searchElement.value)
        enableButtonsearch()
        renderResult(result)
      } catch (message) {
        enableButtonsearch()
        fallbackResult(message)
      }
    }
  }

  const renderResult = (result) => {
    mainContentElement.keyword = searchElement.value
    mainContentElement.recipes = result
  }

  const fallbackResult = (message) => {
    mainContentElement.renderError(message)
  }

  const searchingRecipes = () => {
    mainContentElement.renderWelcome()
    searchElement.querySelector('#btnSearch').disabled = true
    searchElement.querySelector('#btnSearch').innerText = 'Searching ...'
  }

  const enableButtonsearch = () => {
    searchElement.querySelector('#btnSearch').disabled = false
    searchElement.querySelector('#btnSearch').innerText = 'Search'
  }

  searchElement.clickEvent = onSearchSubmit
}

export default app
