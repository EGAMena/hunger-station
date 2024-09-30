<template>
  <div class="container">
    <Panel1Comp />
    <Panel2Comp />
    <Panel3Comp />
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
    Panel3Comp,
  },
};
</script>

<style scoped>
.container {
  overflow: hidden;
  position: relative;
}

.image-left,
.image-right {
  position: absolute;
  width: 600px;
}

.image-left {
  top: 680px;
  left: -140px;
}

.image-right {
  top: 1250px;
  right: -100px;
}

@media (max-width: 1300px) {
  .image-left,
  .image-right {
    width: 400px;
  }
}

@media (max-width: 990px) {
  .image-right {
    top: 2300px;
  }
}

@media (max-width: 768px) {
  .image-left,
  .image-right {
    display: none;
  }
}
</style>
