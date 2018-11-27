<template>
  <div class="home-holder">
    <h1>Home page</h1>
    <div class="currency-content">
      {{ usd_interbank }}
      <span class="currency-label">{{usd_interbank.currency}}</span>
      <div class="bank-name">Межбанк</div>
      <div class="currency-state">
        <div class="currency-bid">{{usd_interbank.purchaseRate}}</div>
        <div class="currency-ask">{{usd_interbank.saleRate}}</div>
      </div>
    </div>

    <div class="schedule-usd__state">
      <h2>Usd chart</h2>
      <canvas id="usd-chart"></canvas>
    </div>

    <div class="news-holder">
      <div class="news-item">
        <div class="news-image">
          <!--<img src="" alt="#">-->
        </div>
        <strong class="news-title"></strong>
        <p></p>
      </div>
      <div class="news-item">
        <div class="news-image">
          <!--<img src="" alt="#">-->
        </div>
        <strong class="news-title"></strong>
        <p></p>
      </div>
      <div class="news-item">
        <div class="news-image">
          <!--<img src="" alt="#">-->
        </div>
        <strong class="news-title"></strong>
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
  import Chart from 'chart.js';
  import usdChartData from '@/components/UsdChangeStateChart/UsdChangeStateChart.js';
  import { mapState } from 'vuex'

  export default {
    name: 'Home',
    data() {
      return {
        usdChartData: usdChartData,
      }
    },
    computed: mapState({
      usd_interbank(state) {
        return (state.interbank.currency_interbank.usd !== null ) ? state.interbank.currency_interbank.usd : ''
      }
    }),
    methods: {
      getInterBank() {
        this.$store.dispatch('get_currency_interbank')
      },
      createChart(chartId, chartData) {
        const ctx = document.getElementById(chartId);
        const myChart = new Chart(ctx, {
          type: chartData.type,
          data: chartData.data,
          options: chartData.options,
        });
      }
    },
    mounted() {
      this.createChart('usd-chart', this.usdChartData)
    },
    created() {
      this.getInterBank()
    }
  }
</script>
