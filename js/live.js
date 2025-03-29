const { createApp, ref, defineComponent, onMounted } = Vue;

const url = '/NGFW/game/byId?id=88'
const LiveComponent = defineComponent({
  props: ['game'],
  setup() {
    const game = ref(null);
    const fetchGameData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        game.value = data;
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
    onMounted(fetchGameData);
    return {game};
  },
  template: `
    <div v-if="game" class="container mt-5">
      <div class="row row-cols-lg-auto">
        <div class="col-12">
          <h5>{{game.gameDate}}</h5>
        </div>
        <div class="col-12">{{game.gameLocation}}</div>  

      </div>
      <div class="row mt-3">
        <div class="col-5 text-center">
          <img :src="game.homeTeam.teamLogo" class="img-fluid rounded-start" width="300" alt="game.homeTeam.teamName">
          <h1>{{game.homeTeam.teamName}}</h1>
          <h2>{{game.homeTeamScore}}</h2>
        </div>
        <div class="col-2 text-center">
          <h1>VS</h1>
        </div>
        <div class="col-5 text-center">
          <img :src="game.awayTeam.teamLogo" class="img-fluid rounded-start" width="300" alt="game.awayTeam.teamName">
          <h1>{{game.awayTeam.teamName}}</h1>
          <h2>{{game.awayTeamScore}}</h2>
        </div>
      </div>
    </div>
  `
});

const timelineurl = "/NGFW/game/eventsByGameId?id=88";
const TimeComponent = defineComponent({
    props: ['timeline'],
    setup(){
      const timeline = ref([]);
      const fetchTimelineData = async () => {
        try {
          const response = await fetch(timelineurl);
          const data = await response.json();
          timeline.value = data;
        } catch (error) {
          console.error('Error fetching timeline data:', error);
        }
      };
      onMounted(fetchTimelineData);
      return { timeline };
    },
    template: `
    <div v-for="(event, index) in timeline" 
        :key="index"
        :event="event"
        class="row mt-5 text-center">
        <div class="w-100 mt-2"></div>
        <div class="col-2">第{{event.quarter}}節 {{event.eventTime}}</div>
        <div class="col-2">{{event.team}}</div>
        <div class="col-5">{{event.description}}</div>
    </div>
    `
});


const app = createApp({
  components: {
    LiveComponent,
    TimeComponent
  },
  template: `
  <div class="container">
    <LiveComponent :live='live' />
    <TimeComponent />
  </div>
  `
});
app.mount("#app");