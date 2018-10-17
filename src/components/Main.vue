<template>
  <div class="main">
    <headers
      :h1="'График данных'"
      :mainMenu="true"
    >
    </headers>

    <div class="wrapper">
      <chart ref="chart" :chart-data="chart" :options="chartOptions" />

      <div class="reactive_data">
        <div class="reactive_data__item">
          <span>Данные 1:</span>
          <span style="margin-left: 15px;">
            <font-awesome-icon class="colorgreen font24" icon="sort-up" v-if="arrow1"></font-awesome-icon>
            <font-awesome-icon class="colorred font24" icon="sort-down" v-else></font-awesome-icon>
          </span>
          <div style="font-size: 45px; display: inline-block; margin-left: 0; width: 100px;">{{lastNum}}</div>
        </div>
        <div class="reactive_data__item">
          <span>Данные 2:</span>
          <span style="margin-left: 15px;">
            <font-awesome-icon class="colorgreen font24" icon="sort-up" v-if="arrow2"></font-awesome-icon>
            <font-awesome-icon class="colorred font24" icon="sort-down" v-else></font-awesome-icon>
          </span>
          <div style="font-size: 45px; display: inline-block; margin-left: 0; width: 100px;">{{lastNum2}}</div>
        </div>
      </div>

      <div class="h4">Фильтр данных:</div>
      <div class="filter">
        <div class="filter_item filter_item-data1" :class="{'filter_item-active' : hideNumbers}" @click="hideNumbers = !hideNumbers">Данные 1</div>
        <div class="filter_item filter_item-data2" :class="{'filter_item-active' : hideNumbers2}" @click="hideNumbers2 = !hideNumbers2">Данные 2</div>
      </div>


          
      <div class="txt">
        <p>- Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

        <ul>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
        </ul>

        <ol>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
        </ol>


        <table>
          <tr>
            <td>123</td>
            <td>123</td>
            <td>123</td>
          </tr>
          <tr>
            <td>123</td>
            <td>123</td>
            <td>123</td>
          </tr>
          <tr>
            <td>123</td>
            <td>123</td>
            <td>123</td>
          </tr>
          <tr>
            <td>123</td>
            <td>123</td>
            <td>123</td>
          </tr>
          <tr>
            <td>123</td>
            <td>123</td>
            <td>123</td>
          </tr>
        </table>

        <button class="btn">Standart</button>
        <button class="btn btn_red">Red</button>
        <button class="btn btn_green">Green</button>
        <button class="btn btn_orange">Orange</button>
        <button class="btn btn_purple">Purple</button>
        <button class="btn btn_white">White</button>
        <button class="btn btn_blank">Blank</button>
      </div>
    </div>
  </div>
</template>

<script>
import Headers from './common/Headers'
import chart from './common/Chart'

export default {
  name: 'Main',

  components: {
    Headers,
    chart
  },

  data () {
    return {
      lastNum: 0,
      lastNum2: 0,
      numbers: [],
      numbers2: [],
      hideNumbers: false,
      hideNumbers2: false,


      chartOptions: {
        legend: {
          position: 'top'
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            // stacked: false,
            ticks: {
              min: 0,
              max: 1100,
              stepSize: 100
            }
          }],
          xAxes: [{
            type: 'realtime',
            realtime: {
              duration: 60000,
              delay: 1000,
              pause: false,
              ttl: undefined
            }
          },{
            type: 'realtime',
            display: false,
            realtime: {
              duration: 60000,
              delay: 1000,
              pause: false,
              ttl: undefined
            }
          }]
        },
        title: {
          display: true,
          text: 'Входящие'
        }
      }
    }
  },

  sockets:{
    connect: function(){
      console.log('socket connected')
    },
    line1: function(val){
      this.lastNum = val.toFixed()
      let obj = {
        t: Date.now(),
        y: val.toFixed()
      }
      this.numbers.push(obj)
    },
    line2: function(val){
      this.lastNum2 = val.toFixed()
      let obj = {
        t: Date.now(),
        y: val.toFixed()
      }
      this.numbers2.push(obj)
    }
  },

  computed: {
    chart(){
      return {
        labels : [

        ],
        datasets: [
          {
            label: 'Данные 1',
            data: this.filter_numbers_1,
            fill: true,
            lineTension: 0,
            spanGaps: true,
            pointHoverBorderWidth: 3,
            pointBorderWidth: 2,
            pointHoverBorderColor: 'rgba(180,180,13,0.8)',
            pointHoverBackgroundColor: '#FFFFFF',
            borderColor: 'rgba(180,180,13,0.8)',
            borderWidth: 1,
            backgroundColor: 'rgba(180,180,13,0.2)'
          },{
            label: 'Данные 2',
            data: this.filter_numbers_2,
            fill: true,
            lineTension: 0,
            spanGaps: true,
            pointHoverBorderWidth: 3,
            pointBorderWidth: 2,
            pointHoverBorderColor: 'rgba(70,140,60,0.8)',
            pointHoverBackgroundColor: '#FFFFFF',
            borderColor: 'rgba(70,140,60,0.8)',
            borderWidth: 1,
            backgroundColor: 'rgba(70,140,60,0.2)'
          }
        ]
      }
    },

    arrow1(){
      if(this.numbers.length > 1 && this.numbers[this.numbers.length-1].y > this.numbers[this.numbers.length-2].y) return true
      else return false
    },

    arrow2(){
      if(this.numbers2.length > 1 && this.numbers2[this.numbers2.length-1].y > this.numbers2[this.numbers2.length-2].y) return true
      else return false
    },

    filter_numbers_1(){
      if(this.hideNumbers) return []
      else return this.numbers
    },

    filter_numbers_2(){
      if(this.hideNumbers2) return []
      else return this.numbers2
    }

  },

  methods: {
    
  },

  created(){
    document.title = 'ТЗ cryptouniverse.group | Графики'
    this.$socket.emit('login', true, 'blalbalba');
  }
}
</script>

<style lang="scss" scoped>
  .reactive_data {
    margin-bottom: 3em;
    display: flex;
    justify-content: flex-start;

    &.item {
      margin-right: 3em;
    }
  }

  .filter {
    margin-bottom: 30px; border-top: 1px solid #efefef;

    &_item {
      padding: 10px 15px 10px 30px; border-bottom: 1px solid #efefef; cursor: pointer; position: relative;
    }
    &_item:hover { background-color: #f2f2f2; }
    &_item:active { background-color: #f7f7f7; }
    &_item:before { content: ''; position: absolute; margin: auto; left: 11px; top: 0; bottom: 0; width: 6px; height: 6px; border-radius: 6px; }
    &_item-active:before { display: none; }

    &_item-data1:before { background-color: rgba(180,180,13,1); }
    &_item-data2:before { background-color: rgba(70,140,60,1); }
  }
</style>
