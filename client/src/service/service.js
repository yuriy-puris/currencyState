import api from '@/service/api'
import moment from 'moment'

const DATE_NOW = moment().format('DD.MM.YYYY')

export default {
  interbank() {
    return api().get(`p24api/exchange_rates?json&date=${DATE_NOW}`)
  },
  nbu() {
    return api().get(`nbu/${API_KEY}`)
  },
  banks() {
    return api().get(`summary/${API_KEY}`)
  }
}
