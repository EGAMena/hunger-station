<template>
  <div class="main-bg-img-panel">
    <main>
      <div class="img-present">
        <img
          src="https://cdn.egamena.com/external/hunger-station/hunter_station_present.png"
          alt="Present"
        />
      </div>
      <div class="creators-main-container-tlt">
        <div class="btn-tlt-big-1">A CUSTOM FORTNITE</div>
        <div class="tlt-big-capture">CAPTURE THE FLAG!</div>
        <div class="btn-tlt-big">10v10v10</div>
      </div>
      <div class="img-created-in-fn">
        <img
          src="https://cdn.egamena.com/external/hunger-station/created_fortnite.png"
          alt="Fortnite"
        />
      </div>
      <div class="main-tlt-select-creator">SELECT YOUR TEAM</div>
      <div class="creators-main-container">
        <div class="creator-container" v-for="team in teams" :key="team.name">
          <a :href="team.api" class="top-part-team">
            <img class="top-img-creators" :src="team.imgSrc" alt="Team Logo" />
          </a>
          <a :href="team.api" class="top-part-team">
            <img
              class="btn-img-creators"
              :src="team.img_influencer"
              alt="Influencer Image"
            />
          </a>
        </div>
      </div>
      <div class="bottom-part">
        <div class="btn-text">Scroll for more details</div>
        <a
          class="arrow-scroll-a"
          href="javascript:void(0);"
          @click="scrollDown"
        >
          <img
            class="arrow-scroll"
            src="https://cdn.egamena.com/external/content/arrow.png"
            alt="Scroll"
          />
        </a>
      </div>
    </main>
    <div class="legal-line-fn">
      This is not sponsored, endorsed, <br />
      or administered by Epic Games, Inc.
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teams: [],
    };
  },
  methods: {
    async fetchTeamsData() {
      try {
        const response = await fetch(
          "https://api.egamena.com/v1/hunger-station/config"
        );
        const data = await response.json();
        console.log("Datos de equipos obtenidos:", data);
        this.teams = data;
      } catch (error) {
        console.error("Error fetching teams data:", error);
      }
    },
    scrollDown() {
      window.scrollBy({
        top: 850,
        left: 0,
        behavior: "smooth",
      });
    },
  },
  mounted() {
    this.fetchTeamsData();
  },
};
</script>

<style scoped>
.main-bg-img-panel {
  background-image: url("https://cdn.egamena.com/external/hunger-station/bg_panel_1.png");
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
  font-size: 1.8rem;
  color: #fbef00;
  font-style: italic;
  margin: 20px 0;
}

.creators-main-container {
  display: flex;
  gap: 50px;
  max-width: 90%;
  margin: 20px auto 40px auto;
  justify-content: space-around;
}

.creator-container {
  display: grid;
  gap: 30px;
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
img.btn-img-creators {
  max-width: 120px;
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
    gap: 20px;
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
    justify-content: center;
    margin-bottom: 40px;
  }
}

.tlt-big-capture {
  font-weight: 900;
  font-size: 3rem;
  color: #fbef00;
  font-style: italic;
}

.btn-tlt-big {
  font-weight: 900;
  font-size: 3rem;
  color: #fff;
  font-style: italic;
  margin-top: -10px;
}
.btn-tlt-big-1 {
  font-weight: 900;
  font-size: 2rem;
  color: #fff;
  font-style: italic;
}
.creators-main-container-tlt {
  display: flex;
  flex-direction: column;
}
.img-created-in-fn {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.img-created-in-fn img {
  display: flex;
  max-width: 170px;
}

.img-present {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}

.img-present img {
  display: flex;
}
@media (max-width: 800px) {
  .legal-line-fn {
    display: none;
  }
}
.legal-line-fn {
  color: white;
  text-align: start;
  position: relative;
  bottom: 20px;
  left: 20px;
}
</style>
