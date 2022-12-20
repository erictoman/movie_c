const URL_BASE = "https://api.themoviedb.org/3/movie"
const API_KEY = ""
export const URL_IMAGE = "https://image.tmdb.org/t/p/w500"

export const TOP_RATE = URL_BASE + "/top_rated"

class API {
    async get(endpoint) {
        try {
            const response = await fetch(`${endpoint}?api_key=${API_KEY}`)
            const res = await response.json()
            return res
        } catch (error) {
            console.log(error)
        }
    }
}

export default new API()