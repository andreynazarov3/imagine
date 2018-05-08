<template>
<div>  
    <Logo />
    <main>
    <Cartoon />
    <div class="panel main">
      <div class="additionalContent">
        <Form />
        <Speakers />
      </div>
    </div>
</main>
</div>
</template>

<script>
import Cartoon from '~/components/Cartoon';
import Logo from '~/components/Logo';
import Form from '~/components/Form';
import Speakers from '~/components/Speakers';
export default {
  components: {
    Cartoon,
    Logo,
    Form,
    Speakers,
  },
  mounted: function() {
    // init
    const controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: 'onLeave',
      },
    });

    // get all slides
    const slides = document.querySelectorAll('.panel');

    // create scene for every slide
    for (var i = 0; i < slides.length; i++) {
      new ScrollMagic.Scene({
        triggerElement: slides[i],
      })
        .setPin(slides[i])
        .addTo(controller);
    }
  },
};
</script>

<style lang="scss">
main {
  display: none;
}
.panel {
  background: white;
  &.main {
    position: relative !important;
  }
}

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
  // position: absolute;
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
