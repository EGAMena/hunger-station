<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
@import './fonts/font.css';
@import './assets/main.css';

body {
  margin: 0;
  background-color: #101010;
  font-family: 'AktivGrotesk';
}
</style>
