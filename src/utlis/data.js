import axios from 'axios'

class DataFetch {
  static searchRecipe(keyword) {
    return axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
      .then((response) => {
        const meals = response.data.meals
        if (meals !== null) {
          return Promise.resolve(meals)
        } else {
          return Promise.reject(
            `Sorry, the recipe <i>"${keyword}"</i> you are looking for is not available`
          )
        }
      })
  }
}

export default DataFetch
