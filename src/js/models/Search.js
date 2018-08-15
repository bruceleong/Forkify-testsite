import axios from 'axios'

export default class Search {
  constructor(query) {
    this.query = query
  }
  async getResults() {
    const key = 'a465ffd3a19af0a05a8f6a6fa2e389ec'
    const url = `http://food2fork.com/api/search?key=${key}&q=${this.query}`
    try {
      const res = await axios(url)
      this.result = res.data.recipes
      // console.log(this.result)
    } catch (error) {
      alert(error)
    }
  }
}
