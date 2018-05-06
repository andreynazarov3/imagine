<template>
<div>
  <header>
    <div class="wrapper">
        <a href="#">Стать героем</a>
    </div>
  </header>
  <main>
    <cartoon></cartoon>
  </main>
</div>
</template>

<script>
import Cartoon from '~/components/Cartoon';

export default {
  components: {
    Cartoon
  },
  mounted: function() {
    console.log('mounted');
  },
};
</script>

<style lang="scss">
.welcome {
  width: 100%;
  height: 100vh;
  background: white;
  display: none;
}
.wrapper {
  max-width: 1100px;
  margin: 0 auto;
}
header {
  padding-top: 75px;
  // margin-bottom: 180px;
  text-align: right;
  position: absolute;
  width: 100%;
  z-index: 1;
  a {
    opacity: 0.5;
    font-family: GaramondPremrPro-Capt, sans-serif;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000000;
  }
}
</style>
