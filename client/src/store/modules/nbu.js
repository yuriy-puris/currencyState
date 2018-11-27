import service from '@/service/service'

const state = {
  currency_nbu: {
    usd: null,
    eur: null,
    rub: null
  }
}

const actions = {
  get_currency_nbu: async ({ commit }) => {
    let data_nbu = await service.nbu()
    commit('set_currency_nbu', { nbu: data_nbu })
  }
}

const mutations = {
  set_currency_nbu: (state, { nbu }) => {
    if (nbu.data) {
      nbu.data.map(item => {
        if (item.currency === 'usd') state.currency_nbu.usd = item;
        if (item.currency === 'eur') state.currency_nbu.eur = item;
        if (item.currency === 'rub') state.currency_nbu.rub = item;
        else state.currency_nbu = nbu.data
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
