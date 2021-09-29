
// const API_KEY = process.env.REACT_APP_KEY

const base_url = `https://api.rawg.io/api/games?key=${process.env.REACT_APP_KEY}`

const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1
    if (month < 10) {
        return `0${month}`
    } else {
        return month
    }

}
const getCurrentDay = () => {
    const date = new Date().getDate() + 1
    if (date < 10) {
        return `0${date}`
    } else {
        return date
    }

}
const currentYear = new Date().getFullYear()
const currentMonth = getCurrentMonth()
const currentDay = getCurrentDay()
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`
 const popular_games = `&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`

export const popularGamesUrl = () => `${base_url}${popular_games}`

