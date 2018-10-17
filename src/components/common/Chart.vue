<script>
  import { Line, mixins } from 'vue-chartjs'
  import 'chartjs-plugin-streaming';


  const { reactiveProp } = mixins

  export default {
    mixins: [reactiveProp],
    extends: Line,
    props: ['data', 'options', 'chartData'],
    data () {
      return {
        gradient: null
      }
    },
    mounted() {
      this.renderChart(this.chartData, this.options)
    }
  }
</script>
