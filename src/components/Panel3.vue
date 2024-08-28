<template>
  <div class="main-bg-img-panel">
    <main>
      <div class="main-tlt-select-creator">RULES AND REWARDS</div>
      <div class="rules-main-cont">
        <div class="rule-container">
          <div class="left-side">
            <div class="tlt-rule">RULES</div>
            <div class="description-rule">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
            </div>
          </div>
          <div class="right-side">
            <img class="img-placeholder" src="https://ega-mena.b-cdn.net/external/content/in_game_placeholder.png" alt="Placeholder Image">
          </div>
        </div>
        <div class="rule-container">
          <div class="left-side">
            <div class="tlt-rule" >xxx V-BUCKS <div class="description-rule-2">
              FOR MVP EACH MATCH
            </div></div>
          </div>
          <div class="right-side">
            <img class="img-placeholder" src="https://ega-mena.b-cdn.net/external/content/vbucks.png" alt="Placeholder Image">
          </div>
        </div>

      </div>
    </main>
  </div>
</template>

<style scoped>
.main-bg-img-panel {
  background-image: url('https://cdn.egamena.com/external/content/bg_panel_3.png');
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
.rules-main-cont {
  display: grid;
  max-width: 75%;
  margin: auto;
  gap: 100px;
}
.tlt-rule {
  font-weight: 900;
  color: #fff;
  font-size: 3rem;
  font-style: italic;
}
.rule-container {
  display: flex;
  gap: 50px;
  justify-content: space-between;
}
.description-rule {
  font-size: 1.6rem;
  color: #fff;
}
.description-rule-2 {
  font-size: 2.6rem;
  color: #cde6f2;
  font-style: italic;
  font-weight: 900;
}
.left-side {
  width: 50%;
  text-align: start;
  display: grid;
}
.right-side {
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.img-placeholder {
  width: auto;
  max-width: 100%;
  height: auto;
  max-height: 100%;
  border-radius: 40px;
  object-fit: contain;
}
</style>
