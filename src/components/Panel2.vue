<template>
  <div class="main-bg-img-panel">
    <main>
      <div class="top-part">
        <div style="display: grid; gap: 14px">
          <a
            class="arrow-scroll-a"
            href="javascript:void(0);"
            @click="scrollUp"
            ><img
              class="arrow-scroll2"
              src="https://cdn.egamena.com/external/content/arrow.png"
              alt=""
          /></a>
          <div class="btn-text">Return to team selection</div>
        </div>
      </div>
      <div class="creators-main-container">
        <div class="tlt-big-capture">RULES AND REWARDS</div>
        <div class="btn-tlt-big">
          Make sure to watch <br />
          the stream and play.
        </div>
        <div class="btn-tlt-big-3">
          Streamers will be awarding VBucks <br />
          to MVPs, in addition to prizes being <br />
          granted by Hunger Station.
        </div>
        <img
          class="vbucks-img"
          src="https://cdn.egamena.com/external/hunger-station/vbucks.png"
          alt=""
          srcset=""
        />
      </div>
      <div class="bottom-part">
        <div style="display: grid; gap: 14px">
          <div class="btn-text">Scroll for more details</div>
          <a
            class="arrow-scroll-a"
            href="javascript:void(0);"
            @click="scrollDown"
            ><img
              class="arrow-scroll"
              src="https://cdn.egamena.com/external/content/arrow.png"
              alt=""
          /></a>
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
        behavior: "smooth",
      });
    },
    scrollUp() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
.main-bg-img-panel {
  background-image: url("https://cdn.egamena.com/external/hunger-station/bg_panel_2.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  min-height: 100vh;
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

.tlt-big-capture {
  font-weight: 900;
  font-size: 3.5rem;
  color: #fbef00;
  margin-top: 30px;
  font-style: italic;
}

.btn-tlt-big {
  font-weight: 900;
  font-size: 3.5rem;
  color: #fff;
  margin-top: 10px;
  font-style: italic;
  text-transform: uppercase;
}
.btn-tlt-big-3 {
  font-weight: 900;
  font-size: 2rem;
  color: #fff;
  margin-top: 10px;
  font-style: italic;
  text-transform: uppercase;
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

.bottom-part {
  margin-top: auto;
  padding-bottom: 0px;
  display: grid;
  gap: 30px;
  font-weight: 400;
  font-size: 18px;
  color: #fff;
}
.top-part {
  display: grid;
  gap: 30px;
  font-weight: 400;
  font-size: 18px;
  color: #fff;
}

.arrow-scroll2 {
  width: 40px;
  transform: scaleY(-1);
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
    font-size: 2rem;
  }
  .btn-tlt-big {
    font-size: 2rem;
  }
  .btn-tlt-big-3 {
    font-size: 1.3rem;
  }
  main {
    padding: 20px 30px;
  }
}

.vbucks-img {
  display: flex;
  margin-top: 40px;
  max-width: 100%;
  width: 100%;
}
</style>
