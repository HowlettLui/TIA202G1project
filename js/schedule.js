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
                <li class="nav-item mx-4 mx-sm-0"><a href="#" class="nav-link link-body-emphasis px-2 active"
                  aria-current="page">首頁</a></li>
                <li class="nav-item mx-4 mx-sm-0"><a href="#" class="nav-link link-body-emphasis px-2">即時賽況</a>
                </li>
                <li class="nav-item mx-4 mx-sm-0"><a href="#" class="nav-link link-body-emphasis px-2">歷史球賽</a>
                </li>
                <li class="nav-item mx-4 mx-sm-0"><a href="#" class="nav-link link-body-emphasis px-2">文章</a>
                </li>
                <li class="nav-item mx-4 mx-sm-0"><a href="#" class="nav-link link-body-emphasis px-2">新聞</a>
                </li>
                <li class="nav-item mx-4 mx-sm-0"><a href="#" class="nav-link link-body-emphasis px-2">球隊</a>
                </li>
                <li class="nav-item mx-4 mx-sm-0"><a href="#" class="nav-link link-body-emphasis px-2">球員名單</a>
                </li>
                <li class="nav-item mx-4 mx-sm-0"><a href="#" class="nav-link link-body-emphasis px-2">商城</a>
                </li>
              </ul>
            </div>
          </div>
          <ul class="nav order-last">
            <li class="nav-item"><a href="#" class="nav-link link-body-emphasis px-2"><i
              class="fa-solid fa-cart-shopping"></i></a></li>
            <li class="nav-item"><a href="#" class="nav-link link-body-emphasis px-2">登入</a></li>
            <li class="nav-item"><a href="#" class="nav-link link-body-emphasis px-2">註冊</a></li>
            <li class="nav-item" style="display: none"><a href="#" class="nav-link link-body-emphasis px-2">會員中心</a>
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
    <footer class= "container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-6 py-5 my-5 border-top">
        <div class="col mb-3">
          <a href="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
            <i class="fa-solid fa-basketball fa-2xl" style="margin: 10px;"></i>
          </a>
          <p class="text-body-secondary">&copy; 2024</p>
        </div>

        <div class="col mb-3"></div>

        <div class="col mb-3">
          <h5>聯絡我們</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
          </ul>
        </div>

        <div class="col mb-3">
          <h5>媒體合作</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
          </ul>
        </div>

        <div class="col mb-3">
          <h5>服務條款</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
          </ul>
        </div>

        <div class="col mb-3">
          <h5>隱私權規範</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
          </ul>
        </div>
      </div>
    </footer>
  `
});

const headerApp = createApp({
  components: { HeaderComponent },
  template: `
    <div>
      <HeaderComponent />
    </div>
  `
});
headerApp.mount("#header");

const footerApp = createApp({
  components: { FooterComponent },
  template: `
    <div>
      <FooterComponent />
    </div>
  `
});
footerApp.mount("#footer");


document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    events: '/backend/game/events',
    // events: [
    //   {
    //     title: "Game001",
    //     start: "2025-03-12 17:00",
    //     extendedProps: {
    //       home: 'AAA',
    //       away: 'BBB'
    //     }
    //   }
    // ],
    eventContent: function(arg) {
      let contentEl = document.createElement('div')
      contentEl.classList.add("card")
      contentEl.style.width = '100%'
      
      let cardBody = document.createElement('div')
      cardBody.classList.add("card-body", "text-center")

      let cardTitle = document.createElement('h5')
      cardTitle.classList.add("card-title")
      cardTitle.textContent = arg.event.title

      let cardText = document.createElement('p')
      cardText.classList.add("card-text")
      cardText.textContent = arg.event.extendedProps.homeTeam + ' vs ' + arg.event.extendedProps.awayTeam
      
      cardBody.appendChild(cardTitle)
      cardBody.appendChild(cardText)
      contentEl.appendChild(cardBody)
      
      let arrayDomNodes = [ contentEl ]
      return { domNodes: arrayDomNodes }
    }
  });
  calendar.render();
});