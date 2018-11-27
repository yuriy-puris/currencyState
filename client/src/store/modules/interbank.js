import service from '@/service/service'

const state = {
  currency_interbank: {
    usd: null,
    eur: null,
    rub: null
  }
}

const actions = {
  get_currency_interbank: async ({ commit }) => {
    let data_interbank = await service.interbank()
    commit('set_currency_interbank', { interbank: data_interbank })
  }
}

const mutations = {
  set_currency_interbank: (state, { interbank }) => {
    if (interbank.data) {
      interbank.data.exchangeRate.map(item => {
        if (item.currency === 'USD') state.currency_interbank.usd = item;
        if (item.currency === 'EUR') state.currency_interbank.eur = item;
        if (item.currency === 'RUB') state.currency_interbank.rub = item;
        else state.currency_interbank = interbank.data
      })
    }
  }
}

const getters = {

}

export default {
  state,
  actions,
  mutations,
  getters
}
