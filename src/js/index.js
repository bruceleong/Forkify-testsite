import Search from './models/Search'
import * as searchView from './views/searchView'
import { elements, renderLoader, clearLoader } from './views/base'
import { renderResults } from './views/searchView'
/*

This is the controller
* - Search object
* - Current recipe Object
* - Shopping list object
* - Liked Recipes

*/

const state = {}

const controlSearch = async () => {
  //1 - get query from view
  const query = searchView.getInput()
  console.log(query)

  if (query) {
    //2 - new search object and add to state
    state.search = new Search(query)

    //3 - prepare UI for results
    searchView.clearInput()
    searchView.clearResults()
    renderLoader(elements.searchRes)

    //4 - Search for recipes
    await state.search.getResults()
    const currentResults = state.search.result

    //5 - render results
    clearLoader()
    searchView.renderResults(currentResults)

  }
}

elements.searchForm.addEventListener('submit', e => {
  e.preventDefault()
  controlSearch()
})
