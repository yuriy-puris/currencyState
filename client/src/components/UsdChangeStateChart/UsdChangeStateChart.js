import axios from 'axios'
import moment from 'moment'

const queryCheckStateUsd = async () => {
  // state
  const dateState = [];
  const infoStatePurchase = [];
  const infoStateSale = [];
  // date
  let latestWeek = [
    moment().format('DD.MM.YYYY'),
    moment().subtract(1, 'days').format('DD.MM.YYYY'),
    moment().subtract(2, 'days').format('DD.MM.YYYY'),
    moment().subtract(3, 'days').format('DD.MM.YYYY'),
    moment().subtract(4, 'days').format('DD.MM.YYYY'),
    moment().subtract(5, 'days').format('DD.MM.YYYY'),
    moment().subtract(6, 'days').format('DD.MM.YYYY')
  ]

  function getUsdStateOfDay(day) {
    return axios
      .get(`https://api.privatbank.ua/p24api/exchange_rates?json&date=${day}`)
      .then(response => response)
  }

  async function checkLatestWeek() {
    try {
      const first = await getUsdStateOfDay(latestWeek[0]);
      const second = await getUsdStateOfDay(latestWeek[1]);
      // const third = await getUsdStateOfDay(latestWeek[2]);
      // const fourth = await getUsdStateOfDay(latestWeek[3]);
      // const fifth = await getUsdStateOfDay(latestWeek[4]);
      // const sixth = await getUsdStateOfDay(latestWeek[5]);
      // const seventh = await getUsdStateOfDay(latestWeek[6]);
      // return [first, second, third, fourth, fifth, sixth, seventh];
      return [first, second];
    } catch (err) {
      console.log(err)
    }
  }

  async function parseLatestWeek () {
     const dataState = await checkLatestWeek();
     dataState.map(item => {
       dateState.push(item.data.date)
       item.data.exchangeRate.filter(item => {
          if (item.currency === 'USD') {
            infoStatePurchase.push(item.purchaseRate.toFixed(2))
            infoStateSale.push(item.saleRate.toFixed(2))
          }
        })
     })
  }

  await parseLatestWeek();
  return {
    dateState: dateState,
    infoStatePurchase: infoStatePurchase,
    infoStateSale: infoStateSale
  };

}

queryCheckStateUsd()

console.log(queryCheckStateUsd())

export const usdChartData = {
  type: 'line',
  data: {
    labels: ['test1', 'test2', 'test3'],
    datasets: [
      {
        label: 'Продажа',
        backgroundColor: '#FC2525',
        data: [40, 39, 10, 40, 39, 80, 40]
      },
      {
        label: 'Покупка',
        backgroundColor: '#05CBE1',
        data: [60, 55, 32, 10, 2, 12, 53]
      }
    ]
  },
  options: {
    responsive: true,
    lineTension: 1,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          padding: 25,
        }
      }]
    }
  }
}

export default usdChartData
