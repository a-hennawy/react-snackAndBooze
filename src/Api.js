import axios from 'axios'

// const BASE_API_URL = 'http://localhost:5000'

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class SnackOrBoozeApi {
  static async getSnacks() {
    const result = await axios.get(`/snacks`)
    return result.data
  }

  static async getDrinks() {
    const result = await axios.get(`/drinks`)
    return result.data
  }

  static async postItem(route, obj) {
    console.log(`posting to ${route} ${JSON.stringify(obj, null, 2)}`)
    const result = await axios.post(route, obj)
    return result.data
  }
}

export default SnackOrBoozeApi
