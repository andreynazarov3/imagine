<template>
  <div ref="cartoon" id="cartoon">
    <div class="scene scene-0" id="scene-0">
      <img class="scene-img-logo" src="~/static/logo.png" alt="" srcset="">
      </div>
      <div class="scene scene-1" id="scene-1">
          <img class="city scene-img-background" src="~/static/background.png" alt="">           
          <img class="city scene-img-moscow-city" src="~/static/moscow-city.png" alt="">
          <img class="city scene-img-house-3" src="~/static/house_3.png" alt="">
          <img class="city scene-img-house-2" src="~/static/house_2.png" alt="">
          <img class="city scene-img-house-1" src="~/static/house_1.png" alt="">
          <img class="city scene-img-bridge" src="~/static/bridge.png" alt="">
          <img class="city scene-img-lighters" src="~/static/lighters.png" alt="">
          <img class="scene-img-hero" src="~/static/hero.png" alt="">
          <img :key="`q1-${index}`" v-for="(quest, index) in quests" class="quest quest-1" alt="" srcset="" src="~/static/ques1.png">
          <img :key="`q2-${index}`" v-for="(quest, index) in quests" class="quest quest-2" alt="" srcset="" src="~/static/ques2.png">
          <img :key="`q3-${index}`" v-for="(quest, index) in quests" class="quest quest-3" alt="" srcset="" src="~/static/ques3.png">
          <img :key="`q4-${index}`" v-for="(quest, index) in quests" class="quest quest-4" alt="" srcset="" src="~/static/ques4.png">
          <img :key="`q5-${index}`" v-for="(quest, index) in quests" class="quest quest-5" alt="" srcset="" src="~/static/ques5.png">
          <img :key="`q6-${index}`" v-for="(quest, index) in quests" class="quest quest-6" alt="" srcset="" src="~/static/ques6.png">
          <div class="bubble bubble-1">
            В одном большом и всем знакомом городе жил Человек. 
          </div>
          <div class="bubble bubble-2">
            И был он всем доволен: инфраструктурой района, зацветающей геранью, своим пищеварением и новым черным пальто. 
          </div>
          <div class="bubble bubble-3">
           В общем, счастливый был Человек. 
          </div>
          <div class="bubble bubble-4">
          Но вот однажды, перед Человеком встал вопрос. Он настиг его как преступник в подворотне, преследовал и требовал ответа. 
          </div>
          <div class="bubble bubble-5">
           Это был не вопрос “какой сериал посмотреть?”. Это был вопрос сверхтворческий, креативный. Ответ он должен был придумать сам. 
          </div>
           <div class="bubble bubble-6">
           «Я не смогу, я не успею, я не справлюсь, я не креативный». Мир готовых решений отучил Человека фантазировать.  
          </div>
      </div>
      <div class="scene scene-2" id="scene-2">
      </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      quests: [],
    };
  },
  mounted: function() {
    for (let i = 0; i < 400; i++) {
      this.quests.push({});
    }
    this.$nextTick(() => {
      let quests = document.querySelectorAll('.quest');

      for (let i = 0; i < quests.length; i++) {
        const leftDeviation = Math.floor(Math.random() * 1400);
        const topDeviation = Math.floor(Math.random() * 1000);
        const width = 100 + Math.floor(Math.random() * 200);
        const leftPlusOrMinus = Math.random() < 0.5 ? '-' : '+';
        const topPlusOrMinus = Math.random() < 0.5 ? '-' : '+';
        const left = `calc(50% ${leftPlusOrMinus} ${leftDeviation}px)`;
        const top = `calc(30% ${topPlusOrMinus} ${topDeviation}px)`;
        quests[i].style.left = left;
        quests[i].style.top = top;
        quests[i].style.width = `${width}px`;
        // quests[i].style.opacity = `1`;
      }

      const animation = require('~/assets/js/cartoon.js');
      function ready(fn) {
        if (
          document.attachEvent
            ? document.readyState === 'complete'
            : document.readyState !== 'loading'
        ) {
          fn();
        } else {
          document.addEventListener('DOMContentLoaded', fn(this));
        }
      }
      ready(animation);
    });
  },
};
</script>
<style lang="scss">
.quest {
  width: 100px;
  position: absolute;
  opacity: 0;
}
.bubble {
  padding: 0 40px;
  opacity: 0;
  position: absolute;
  font-size: 40px;
  background: white;
  border: 2px solid black;
  width: 600px;
  height: 300px;
  display: flex;
  align-items: center;
  text-align: center;
  top: 300px;
  left: calc(50% - 300px);
}
.scene {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  &.scene-2 {
    background: black;
  }
  img {
    position: absolute;
    opacity: 0;
  }
  &-img {
    &-logo {
      width: 800px;
      top: calc(50% - 250px);
      left: calc(50% - 400px);
    }
    &-background {
      width: 1194px;
      top: 0;
      left: calc(50% - 400px);
    }
    &-hero {
      width: 755px;
      top: 550px;
      left: calc(50% - 700px);
    }
    &-bridge {
      width: 1100px;
      top: 900px;
      left: calc(50% - 700px);
    }
    &-house-1 {
      // display: none;
      width: 500px;
      top: 600px;
      left: calc(50% + 150px);
    }
    &-house-2 {
      // display: none;
      width: 450px;
      top: 400px;
      left: calc(50% - 100px);
    }
    &-house-3 {
      // display: none;
      width: 550px;
      top: 800px;
      left: calc(50% - 500px);
    }
    &-lighters {
      // display: none;
      width: 650px;
      top: 800px;
      left: calc(50%);
    }
    &-moscow-city {
      // display: none;
      width: 650px;
      top: 120px;
      left: calc(50% - 650px);
    }
  }
}
#cartoon {
  width: 100%;
  min-height: 100vh;
  // padding-bottom: 56.25%;
  background: none;
  position: relative;
}
</style>
