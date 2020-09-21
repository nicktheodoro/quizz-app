import axios from 'axios'

const api = axios.create({ baseURL: 'https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple' })

export default api