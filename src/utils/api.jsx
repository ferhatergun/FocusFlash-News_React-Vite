
const API_KEY = '4b15d3febfc441da909438abe72445b0'

export const getTopNews = async (country) => {
    const response = await fetch
    (`https://newsapi.org/v2/top-headlines?country=${country}&pageSize=100&apiKey=${API_KEY}`)
    const data = await response.json()
    return data
}

export const getKeywordNews = async (keyword,page) => {
    const response = await fetch
    (`https://newsapi.org/v2/everything?q=${keyword}&page=${page}&apiKey=${API_KEY}`)
    const data = await response.json()
    return data
}