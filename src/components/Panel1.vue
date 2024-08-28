<template>
    <div class="main-bg-img-panel">
      <main>
        <div class="main-tlt-select-creator">SELECT YOUR TEAM</div>
        <div class="creators-main-container">
          <div class="creator-container">
            <a href="" class="top-part-team">
              <img class="top-img-creators" src="https://cdn.egamena.com/external/content/JEDDAH.png" alt="" />
            </a>
            <a href="" class="top-part-team">
              <img class="btn-img-creators" src="https://cdn.egamena.com/external/content/INFLU_PLACEHOLDER.png" alt="" />
            </a>
          </div>
          <div class="creator-container">
            <a href="" class="top-part-team">
              <img class="top-img-creators" src="https://cdn.egamena.com/external/content/RIYADH.png" alt="" />
            </a>
            <a href="" class="top-part-team">
              <img class="btn-img-creators" src="https://cdn.egamena.com/external/content/INFLU_PLACEHOLDER.png" alt="" />
            </a>
          </div>
          <div class="creator-container">
            <a href="" class="top-part-team">
              <img class="top-img-creators" src="https://cdn.egamena.com/external/content/DAMMAM.png" alt="" />
            </a>
            <a href="" class="top-part-team">
              <img class="btn-img-creators" src="https://cdn.egamena.com/external/content/INFLU_PLACEHOLDER.png" alt="" />
            </a>
          </div>
        </div>
        <div class="bottom-part">
          <div class="btn-text">Scroll for more details</div>
          <a class="arrow-scroll-a" href="javascript:void(0);" @click="scrollDown">
            <img class="arrow-scroll" src="https://cdn.egamena.com/external/content/arrow.png" alt="" />
          </a>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      scrollDown() {
        window.scrollBy({
          top: 950,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  };
  </script>
  
  <style scoped>
  .main-bg-img-panel {
    background-image: url('https://cdn.egamena.com/external/content/bg_panel_1.png');
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  main {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 40px 60px;
    margin: 0 auto;
    text-align: center;
  }
  
  .main-tlt-select-creator {
    font-weight: 900;
    font-size: 3.3rem;
    color: #fbef00;
    font-style: italic;
    margin: 30px 0;
  }
  
  .creators-main-container {
    display: flex;
    gap: 50px;
    max-width: 90%;
    margin: 20px auto 0 auto;
    justify-content: space-around;
  }
  
  .creator-container {
    display: grid;
    gap: 60px;
    max-width: 22%;
  }
  
  .top-img-creators {
    display: flex;
    width: 100%;
  }
  
  .top-part-team:hover {
    transition: all 0.3s;
    transform: scale(1.1);
  }
  
  .top-part-team {
    transition: all 0.3s;
  }
  
  .bottom-part {
    margin-top: auto;
    padding-bottom: 20px;
    display: grid;
    gap: 14px;
    font-weight: 400;
    font-size: 18px;
    color: #fff;
  }
  
  .arrow-scroll {
    width: 40px;
    transition: all 0.3s;
  }
  
  .arrow-scroll:hover {
    filter: brightness(1.2);
  }
  </style>
  