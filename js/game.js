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
            <li class="nav-item mx-4 mx-sm-0">
              <a href="/estore/shop.html" class="nav-link link-body-emphasis px-2">商城</a>
            </li>
          </ul>
        </div>
      </div>
      <ul class="nav order-last">
        <li class="nav-item">
          <a href="/estore/cart.html" class="nav-link link-body-emphasis px-2">
            <i class="fa-solid fa-cart-shopping"></i>
          </a>
        </li>
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

const GameInfoComponent = defineComponent({
  setup() {
    return {};
  },
  template: `
    <div class="container mt-5">
      <div class="row row-cols-lg-auto">
        <div class="col-12">
          <h5>mm/DD HH:MM</h5>
        </div>
        <div class="col-12">
          <span>地點  進場人數:XXXX</span>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-5 text-center">
          <h1>隊伍1</h1>
          <h2>隊伍1得分</h2>
        </div>
        <div class="col-2 text-center">
          <h1>VS</h1>
        </div>
        <div class="col-5 text-center">
          <h1>隊伍2</h1>
          <h2>隊伍2得分</h2>
        </div>
      </div>
    </div>
  `
});

const Tab1Component = defineComponent({
  setup() {
    return {};
  },
  template: `
  <div class="row text-center mt-5">
    <div class="col-5">隊伍1</div>
    <div class="col-2"></div>
    <div class="col-5">隊伍2</div>

    <div class="w-100"></div>
    <div class="col-5">40/100</div>
    <div class="col-2">FG</div>
    <div class="col-5">40/100</div>

    <div class="w-100"></div>
    <div class="col-5">40%</div>
    <div class="col-2">FG%</div>
    <div class="col-5">40%</div>

    <div class="w-100"></div>
    <div class="col-5">20/50</div>
    <div class="col-2">2PFG</div>
    <div class="col-5">20/50</div>

    <div class="w-100"></div>
    <div class="col-5">40%</div>
    <div class="col-2">2PFG%</div>
    <div class="col-5">40%</div>
    
    <div class="w-100"></div>
    <div class="col-5">20/50</div>
    <div class="col-2">3PFG</div>
    <div class="col-5">20/50</div>
    <div class="w-100"></div>
    <div class="col-5">40%</div>
    <div class="col-2">3PFG%</div>
    <div class="col-5">40%</div>
    <div class="w-100"></div>
    <div class="col-5">20/50</div>
    <div class="col-2">FT</div>
    <div class="col-5">20/50</div>
    <div class="w-100"></div>
    <div class="col-5">40</div>
    <div class="col-2">REB</div>
    <div class="col-5">40</div>
    <div class="w-100"></div>
    <div class="col-5">40</div>
    <div class="col-2">AST</div>
    <div class="col-5">40</div>
    <div class="w-100"></div>
    <div class="col-5">40</div>
    <div class="col-2">STL</div>
    <div class="col-5">40</div>
    <div class="w-100"></div>
    <div class="col-5">40</div>
    <div class="col-2">BLK</div>
    <div class="col-5">40</div>
    <div class="w-100"></div>
    <div class="col-5">40</div>
    <div class="col-2">TO</div>
    <div class="col-5">40</div>
  </div>
  `
});

// 出賽球員數據
// 球員名 出賽時間  得分 2pt命中 2pt出手 2pt% 3pt命中 3pt出手 3pt% FT命中 FT出手 FT% REB AST STL BLK TO PF
const Tab2Component = defineComponent({
  setup() {
    return {};
  },
  template: `
  <table class="table table-striped mt-5">
    <thead>
      <tr>
        <th scope="col">球員名</th>
        <th scope="col">出賽時間</th>
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
    <tbody>
      <tr>
        <td>Player 1</td>
        <td>30:00</td>
        <td>20</td>
        <td>10</td>
        <td>20</td>
        <td>50%</td>
        <td>5</td>
        <td>10</td>
        <td>50%</td>
        <td>5</td>
        <td>10</td>
        <td>50%</td>
        <td>10</td>
        <td>5</td>
        <td>5</td>
        <td>5</td>
        <td>5</td>
        <td>5</td>
      </tr>
    </tbody>
  </table>

  `
});

const Tab3Component = defineComponent({
  setup() {
    return {};
  },
  template: `
  <div class="row mt-5 text-center">
    <div class="col-5">隊伍1</div>
    <div class="col-2"></div>
    <div class="col-5">隊伍2</div>

    <div class="w-100 mt-2"></div>
    <div class="col">比賽結束</div>

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
  components: { HeaderComponent, FooterComponent, GameInfoComponent, Tab1Component, Tab2Component, Tab3Component },
  setup() {
    const tab = ref('tab1');
    const show = (tabName) => {
      tab.value = tabName;
    };
    return { tab, show };
  },
  template: `
    <div>
      <HeaderComponent />
      <GameInfoComponent />
      <div class="container mt-5 w-100">
        <ul class="nav nav-pills nav-fill">
          <li class="nav-item" @click="show('tab1')" >
            <button class="nav-link" :class="{ active: tab === 'tab1' }">球賽總覽</button>
          </li>
          <li class="nav-item" @click="show('tab2')">
            <button class="nav-link" :class="{ active: tab === 'tab2' }">比賽數據</button>
          </li>
          <li class="nav-item" @click="show('tab3')">
            <button class="nav-link" :class="{ active: tab === 'tab3' }">比賽詳情</button>
          </li>
        </ul>
        <Tab1Component v-if="tab === 'tab1'" />
        <Tab2Component v-if="tab === 'tab2'" />
        <Tab3Component v-if="tab === 'tab3'" />
      </div>
      <FooterComponent />
    </div>
  `
});
app.mount("#app")