<template>
  <div class="container">
    <Panel1Comp />
    <Panel2Comp />
    <Panel3Comp />
    
    <img class="image-left" src="https://cdn.egamena.com/external/content/hs_left_1.png" alt="Imagen izquierda" />
    <img class="image-right" src="https://cdn.egamena.com/external/content/hs_right_1.png" alt="Imagen derecha" />
  </div>
</template>

<script>
import Panel1Comp from '../components/Panel1.vue';
import Panel2Comp from '../components/Panel2.vue';
import Panel3Comp from '../components/Panel3.vue';

export default {
  components: {
    Panel1Comp,
    Panel2Comp,
    Panel3Comp
  }
}
</script>

<style scoped>
.container {
  overflow: hidden;
  position: relative;
}

.image-left {
  position: absolute;
  top: 680px;
  width: 600px;
  left: -140px;
}

.image-right {
  position: absolute;
  width: 600px;
  bottom: 700px;
  right: -100px;
}
</style>
