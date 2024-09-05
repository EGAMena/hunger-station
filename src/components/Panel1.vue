<template>
  <div class="main-bg-img-panel">
    <main>
      <div class="main-tlt-select-creator">SELECT YOUR TEAM</div>
      <div class="creators-main-container">
        <div class="creator-container" v-for="team in teams" :key="team.name">
          <a :href="team.api" class="top-part-team">
            <img class="top-img-creators" :src="team.imgSrc" alt="" />
          </a>
          <a :href="team.api" class="top-part-team">
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
  data() {
    return {
      teams: [
        { name: "Jeddah", imgSrc: "https://cdn.egamena.com/external/content/JEDDAH.png", api: "https://egamena.link/4jka1f" },
        { name: "Riyadh", imgSrc: "https://cdn.egamena.com/external/content/RIYADH.png", api: "https://egamena.link/4jka1f"  },
        { name: "Dammam", imgSrc: "https://cdn.egamena.com/external/content/DAMMAM.png", api: "https://egamena.link/4jka1f"  },
      ],
    };
  },
  methods: {
    scrollDown() {
      window.scrollBy({
        top: 950,
        left: 0,
        behavior: 'smooth',
      });
    },
  },
};
</script>

<style scoped>
.main-bg-img-panel {
  background-image: url('https://cdn.egamena.com/external/content/bg_panel_1.png');
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
  justify-content: center;
  display: flex;
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

@media (max-width: 980px) {
  .creators-main-container {
    flex-direction: column;
    gap: 40px;
    justify-content: center;
    align-items: center;
  }
  .creator-container {
    width: 100%;
    gap: 30px;
    max-width: 50%;
  }
}
@media (max-width: 970px) {
  main {
    padding: 20px 30px;

  }
  .creator-container {
    width: 100%;
  }
  .creators-main-container {
    margin: 0;
    justify-content: center;
  }
}

</style>
