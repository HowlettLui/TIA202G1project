const { createApp, ref, defineComponent, onMounted } = Vue;

const HeaderComponent = defineComponent({
  setup() {
    return {};
  },
  template: `
    <header class="pt-3 border-bottom bg-white">
  <div class="container d-flex flex-wrap justify-content-center">
    <a href="/" class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none">
      <i class="fa-solid fa-basketball fa-xl" style="margin: 10px;"></i>
      <span class="fs-4">上班不要看球賽</span>
    </a>
    <form class="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
      <input type="search" class="form-control" placeholder="Search..." aria-label="Search">
    </form>
  </div>
  <nav class="navbar navbar-expand-lg py-2">
    <div class="container d-flex flex-wrap">
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-start w-100" tabindex="-1" id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <i class="fa-solid fa-basketball fa-xl" style="margin: 10px;"></i>
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">上班不要看球賽</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-start flex-grow-1 pe-3">
            <li class="nav-item mx-4 mx-sm-0"><a href="/index.html" class="nav-link link-body-emphasis px-2 active"
                aria-current="page">首頁</a></li>
            <li class="nav-item mx-4 mx-sm-0"><a href="/game.html" class="nav-link link-body-emphasis px-2">即時賽況</a>
            </li>
            <li class="nav-item mx-4 mx-sm-0"><a href="/schedule.html" class="nav-link link-body-emphasis px-2">歷史球賽</a>
            </li>
            <li class="nav-item mx-4 mx-sm-0"><a href="/newsf/news_fform.html"
                class="nav-link link-body-emphasis px-2">文章 / 新聞</a>
            </li>
            <li class="nav-item mx-4 mx-sm-0"><a href="/team.html" class="nav-link link-body-emphasis px-2">球隊</a>
            </li>
            <li class="nav-item mx-4 mx-sm-0"><a href="/player.html" class="nav-link link-body-emphasis px-2">球員名單</a>
            </li>
            <li class="nav-item mx-4 mx-sm-0"><a href="/estore/shop.html"
                class="nav-link link-body-emphasis px-2">商城</a>
            </li>
          </ul>
        </div>
      </div>
      <ul class="nav order-last">
        <li class="nav-item"><a href="/estore/cart.html" class="nav-link link-body-emphasis px-2"><i
              class="fa-solid fa-cart-shopping"></i></a></li>
        <li class="nav-item login"><a href="/login.html" class="nav-link link-body-emphasis px-2">登入</a></li>
        <li class="nav-item register"><a href="/register.html" class="nav-link link-body-emphasis px-2">註冊</a></li>
        <div class="d-flex">
          <img id="avatar" class="rounded-circle" style="height: 30px">
        </div>
        <li class="nav-item account" style="display: none"><a href="#" class="nav-link link-body-emphasis px-2">會員帳號</a>
        </li>
        <li class="nav-item usercenter" style="display: none"><a href="/user/user_info.html"
            class="nav-link link-body-emphasis px-2">會員中心</a></li>
        <li class="nav-item logout" style="display: none"><a class="nav-link link-body-emphasis px-2">登出</a>
        </li>
      </ul>
    </div>
  </nav>
</header>
  `
});

const FooterComponent = defineComponent({
  setup() {
    return {};
  },
  template: `
    <footer class="container">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-6 py-5 my-5 border-top">
        <div class="col mb-3">
            <a href="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                <i class="fa-solid fa-basketball fa-2xl" style="margin: 10px;"></i>
            </a>
            <p class="text-body-secondary">&copy; 2024</p>
        </div>

        <div class="col mb-3">

        </div>

        <div class="col mb-3">
          <a href="" class="nav-link p-0 text-body-secondary"><h5>聯絡我們</h5></a>
        </div>

        <div class="col mb-3">
          <a href="#" class="nav-link p-0 text-body-secondary"><h5>媒體合作</h5></a>
        </div>

        <div class="col mb-3">
          <a href="#" class="nav-link p-0 text-body-secondary"><h5>服務條款</h5></a>
        </div>

        <div class="col mb-3">
          <a href="#" class="nav-link p-0 text-body-secondary"><h5>隱私權規範</h5></a>
        </div>
    </div>
</footer>
  `
});

const playerUrl = "/NGFW/player/list";
const PlayerComponent1 = defineComponent({
  props: ['players'],
  setup() {
    const players = ref([]);
    const fetchPlayerData = async () => {
      try {
        const response = await fetch(playerUrl);
        const data = await response.json();
        players.value = data;
      } catch (error) {
        console.error('Error fetching player data:', error);
      }
    };
    onMounted(fetchPlayerData);
    return { players };
  },
  template: `
  <table class="table table-striped mt-5">
    <thead>
      <tr>
        <th scope="col">球員名</th>
        <th scope="col">出賽時間(分)</th>
        <th scope="col">得分</th>
        <th scope="col">2pt命中</th>
        <th scope="col">2pt出手</th>
        <th scope="col">2pt%</th>
        <th scope="col">3pt命中</th>
        <th scope="col">3pt出手</th>
        <th scope="col">3pt%</th>
        <th scope="col">FT命中</th>
        <th scope="col">FT出手</th>
        <th scope="col">FT%</th>
        <th scope="col">REB</th>
        <th scope="col">AST</th>
        <th scope="col">STL</th>
        <th scope="col">BLK</th>
        <th scope="col">TO</th>
        <th scope="col">PF</th>
      </tr>
    </thead>
    <tbody v-for="(player, index) in players" :key="index" :player="player">
      <tr>
        <td>{{player.playerName}}</td>
        <td>{{player.totalMin}}</td>
        <td>{{player.playerGoal}}</td>
        <td>{{player.playerTwoFgoM}}</td>
        <td>{{player.playerTwoFga}}</td>
        <td>{{player.playerTwoFgPct}}%</td>
        <td>{{player.playerThreeFgm}}</td>
        <td>{{player.playerThreeFga}}</td>
        <td>{{player.playerThreeFgPct}}%</td>
        <td>{{player.playerFtm}}</td>
        <td>{{player.playerFta}}</td>
        <td>{{player.playerFtPct}}%</td>
        <td>{{player.playerReb}}</td>
        <td>{{player.playerAst}}</td>
        <td>{{player.playerStl}}</td>
        <td>{{player.playerBlk}}</td>
        <td>{{player.playerTo}}</td>
        <td>{{player.playerPf}}</td>
      </tr>
    </tbody>
  </table>
  `
});

const app = createApp({
  components: { PlayerComponent1, HeaderComponent, FooterComponent },
  setup() {
    return {};
  },
  template: `
    <div>
      <HeaderComponent />
      <PlayerComponent1 />
      <FooterComponent />
    </div>
  `
});
app.mount("#app")