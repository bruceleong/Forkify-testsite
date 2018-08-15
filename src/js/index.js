import Search from './models/Search'
import * as searchView from './views/searchView'
import { elements } from './views/base'

/*

This is the controller
* - Search object
* - Current recipe Object
* - Shopping list object
* - Liked Recipes

*/

const state = {}

const controlSearch = async () => {
  const query = searchView.getInput()
  console.log(query)

  if (query) {
    state.search = new Search(query)

    await state.search.getResults()
    console.log(state.search.result, 'results of search')

  }
}

console.log(elements)

elements.searchForm.addEventListener('submit', e => {
  e.preventDefault()
  controlSearch()
})
