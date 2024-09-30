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
          <div class="btn-text">Return to rules and rewards</div>
        </div>
      </div>

      <div class="tlt-streaming-on">STREAMING ON</div>
      <div class="main-tlt-select-creator">(INSERT DATE AND TIME)</div>
      <div class="creators-main-container">
        <div class="creator-container" v-for="team in teams" :key="team.name">
          <a :href="team.twitch" class="top-part-team">
            <img class="top-img-creators" :src="team.imgSrc" alt="Team Logo" />
          </a>
          <a :href="team.twitch" class="top-part-team">
            <img
              class="btn-img-creators"
              :src="team.img_influencer"
              alt="Influencer Image"
            />
          </a>
        </div>
      </div>
      <div class="tlt-leaderboard">LEADERBOARD</div>
      <div class="leaderboard-table">
        <div class="table-bg">
          <table>
            <thead>
              <tr>
                <th style="text-align: center">RANK</th>
                <th>TEAM NAME</th>
                <th style="text-align: center">POINTS</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(team, index) in leaderboardData" :key="team.name">
                <td style="text-align: center">{{ index + 1 }}</td>
                <td>{{ team.name }}</td>
                <td style="text-align: center">{{ team.points }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="last-updated">LAST UPDATED {{ lastUpdated }}</div>
      <!-- También muestra la última actualización aquí -->
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teams: [],
      leaderboardData: [],
      lastUpdated: "",
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
    async fetchLeaderboardData() {
      try {
        const response = await fetch(
          "https://api.egamena.com/v1/hunger-station/leaderboard"
        );
        let leaderboardData = await response.json();

        leaderboardData = leaderboardData.sort((a, b) => b.points - a.points);

        this.leaderboardData = leaderboardData;
        this.updateLastUpdatedTime(); 
      } catch (error) {
        console.error("Error fetching leaderboard data:", error);
      }
    },
    updateLastUpdatedTime() {
      const now = new Date();
      const formattedTime = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
      this.lastUpdated = formattedTime;
    },
    scrollDown() {
      window.scrollBy({
        top: 850,
        left: 0,
        behavior: "smooth",
      });
    },
    scrollUp() {
      window.scrollTo({
        top: 1080,
        left: 0,
        behavior: "smooth",
      });
    },
  },
  mounted() {
    this.fetchTeamsData();
    this.fetchLeaderboardData();
  },
};
</script>


<style scoped>
.main-bg-img-panel {
  background-image: url("https://cdn.egamena.com/external/hunger-station/bg_panel_3.png");
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
  font-size: 3.1rem;
  color: #fbef00;
  font-style: italic;
  margin-bottom: 30px;
}

.tlt-leaderboard {
  font-weight: 900;
  font-size: 1.5rem;
  color: #fbef00;
  font-style: italic;
  margin: 20px 0;
}

.tlt-streaming-on {
  font-weight: 900;
  font-size: 1.5rem;
  color: #ffffff90;
  font-style: italic;
  margin: 0;
}

.creators-main-container {
  display: flex;
  gap: 50px;
  max-width: 90%;
  margin: 20px auto 40px auto;
  justify-content: space-around;
}

.btn-img-creators {
  max-width: 120px;
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

.leaderboard-table {
  width: 100%;
  justify-content: center;
  display: flex;
  margin: 0;
}

table {
  width: 100%;
  font-style: italic;
  border-collapse: separate;
  border-spacing: 0 4px;
  font-family: "AktivGrotesk";
  font-size: 18px;
  font-weight: 900;
}

th {
  background-color: #5e3723;
  color: #fbef00;
  font-weight: 900;
  font-size: 18px;
  padding: 10px;
  text-align: left;
}

td {
  background-color: #fbef00;
  color: #5e3723;
  padding: 10px;
  text-align: left;
  font-size: 18px;
}
.table-bg {
  background-color: #5e3723;
  padding: 0 10px 8px 10px;
  border-radius: 10px;
  justify-content: center;
  display: flex;
  max-width: 700px;
  width: 100%;
}
.last-updated {
  color: #ffffff80;
  font-weight: bold;
  margin-top: 10px;
  font-style: italic;
}
.top-part {
  margin-bottom: 40px;
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

@media (max-width: 1300px) {
  .tlt-rule {
    font-size: 1.8rem;
  }
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
</style>