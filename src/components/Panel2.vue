<template>
  <div class="main-bg-img-panel">
    <main>
      <div class="main-img-logo">
        <img class="logo-event" src="https://cdn.egamena.com/external/content/hunter_station_logo.png" alt="" />
      </div>
      <div class="creators-main-container">
        <div class="tlt-big-capture">
          CAPTURE THE FLAG!
        </div>
        <div class="btn-tlt-big">10v10v10</div>
      </div>
      <div class="bottom-part">
        <div class="fn-logo-created">
          <img class="fn-logo" src="https://cdn.egamena.com/external/content/created_in_fortnite.png" alt="" />
        </div>
        <div style="display: grid; gap: 14px;">
          <div class="btn-text">Scroll for rules and rewards</div>
          <a class="arrow-scroll-a" href="javascript:void(0);" @click="scrollDown"><img class="arrow-scroll"
              src="https://cdn.egamena.com/external/content/arrow.png" alt="" /></a>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  methods: {
    scrollDown() {
      window.scrollBy({
        top: 1080,
        left: 0,
        behavior: 'smooth',
      });
    },
  },
};
</script>

<style scoped>
.main-bg-img-panel {
  background: linear-gradient(23deg, rgba(112, 221, 255, 1) 0%, rgba(19, 177, 226, 1) 100%), 
    url('https://cdn.egamena.com/external/content/bg_panel_2.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-img-logo {
  margin: 50px auto;
  display: flex;
}

.logo-event {
  width: 220px;
  display: flex;
}

main {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 40px 60px;
  margin: 0 auto;
  text-align: center;
}

.tlt-big-capture {
  font-weight: 900;
  font-size: 6rem;
  color: #fbef00;
  font-style: italic;
}

.btn-tlt-big {
  font-weight: 900;
  font-size: 5rem;
  color: #fff;
  font-style: italic;

}

.fn-logo-created {
  justify-content: center;
  display: flex;
}

.creators-main-container {
  display: grid;
  margin: 20px auto 0 auto;
  justify-content: space-around;
}

.fn-logo {
  height: 40px;
  display: flex;
}

.bottom-part {
  margin-top: auto;
  padding-bottom: 20px;
  display: grid;
  gap: 30px;
  font-weight: 400;
  font-size: 18px;
  color: #fff;
}

.arrow-scroll {
  width: 40px;
}

.arrow-scroll {
  transition: all 0.3s;
}

.arrow-scroll:hover {
  transition: all 0.3s;
  filter: brightness(1.2);
}

@media (max-width: 970px) {
  .tlt-big-capture {
    font-size: 4rem;
  }
  .btn-tlt-big {
    font-size: 3rem;
  }
  main {
    padding: 20px 30px;

  }
}
@media (max-width: 600px) {
  .fn-logo {
    height: 30px;
}
}

</style>
