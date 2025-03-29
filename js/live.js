const { createApp, ref, defineComponent, onMounted } = Vue;

const LiveComponent = defineComponent({
  props: ['live'],
  template: `
  <div class="row mt-5 text-center">
    <div class="col-5">{{live.hometeam}}</div>
    <div class="col-2"></div>
    <div class="col-5">{{live.awayteam}}</div>
  </div>
  `
});

const url = "/NGFW/game/eventsByGameId?id=88";
const TimeComponent = defineComponent({
    props: ['timeline'],
    setup(){
      const timeline = ref(null);
      const fetchTimelineData = async () => {
        try {
          
        } catch (error) {
          console.error('Error fetching timeline data:', error);
        }
      }
    },
    template: `
    <div class="row mt-5 text-center">
        <div class="w-100 mt-2"></div>
        <div class="col-5">AAA罰球出手得分</div>
        <div class="col-2">00:05</div>
        <div class="col-5"></div>
        
        <div class="w-100 mt-2"></div>
        <div class="col-5">AAA罰球出手得分</div>
        <div class="col-2">00:05</div>
        <div class="col-5"></div>

        <div class="w-100 mt-2"></div>
        <div class="col-5"></div>
        <div class="col-2">00:05</div>
        <div class="col-5">BBB防守犯規</div>
    </div>
    `
});


const app = createApp({
  components: {
    LiveComponent,
    TimeComponent
  },
  setup() {
    const live = ref({
      hometeam: '福爾摩沙夢想家',
      awayteam: '台北台新戰神'
    });

    return {
      live
    };
  },
  template: `
  <div class="container">
    <LiveComponent :live='live' />
    <TimeComponent />
  </div>
  `
});
app.mount("#app");