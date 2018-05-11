<template>
  <section class="panel cartoon">    
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
          <div class="bubble bubble-7">
            А вопрос засел в голове, как навязчивая попсовая песня, и не покидал его ни днем не ночью. 
          </div>
      </div>
      <div class="scene scene-2" id="scene-2">
        <img class="light light-1"  src="~/static/light/light1.png" alt="" srcset="">
        <img class="light light-2" src="~/static/light/light2.png" alt="" srcset="">
        <img class="light light-3" src="~/static/light/light3.png" alt="" srcset="">
        <img class="light light-4" src="~/static/light/light4.png" alt="" srcset="">
         <img class="hero-think-1" src="~/static/light/hero1.png" alt="" srcset="">
        <img class="hero-think-2" src="~/static/light/hero2.png" alt="" srcset="">
        <img class="hero-think-3" src="~/static/light/hero3.png" alt="" srcset="">
        <img class="tree" src="~/static/fantasy/tree.png" alt="" srcset="">
        <img class="img-bubble" src="~/static/bubble1b.png" alt="" srcset="">
        <img class="hill-1" src="~/static/fantasy/hill1.png" alt="" srcset="">
        
        <img class="mountain" src="~/static/fantasy/mountain.png" alt="" srcset="">      
        <img class="chairs" src="~/static/fantasy/chairs.png" alt="" srcset="">
        <img class="pillows" src="~/static/fantasy/pillows.png" alt="" srcset="">
        <img class="hill-3" src="~/static/fantasy/hill3.png" alt="" srcset="">
        <img class="people" src="~/static/fantasy/people.png" alt="" srcset="">
        
        <img class="hill-2" src="~/static/fantasy/hill2.png" alt="" srcset="">
        
        <img class="heroes" src="~/static/fantasy/heroes.png" alt="" srcset="">
        <img class="lamp" src="~/static/fantasy/lamp.png" alt="" srcset="">
        <img class="expoint" src="~/static/expoint.png" alt="" srcset="">
        <div class="bubble bubble-8">
           Совсем обессилев, забылся Человек тревожным сном.  
          </div>
          <div class="bubble bubble-9">
           И во сне пришел к нему Некто. Человек не запомнил лица, но все показалось ему странно знакомым: фигура, голос и мягкая рука, которая потянула его за собой. 
          </div>
          <div class="bubble bubble-10">
           “Я покажу тебе классное место” - сказал Некто и повел его коридорами сновидений. И человек доверился и пошел, потому что во сне люди вообще очень доверчивы.
          </div>
          <div class="bubble bubble-11">
           А место и правда оказалось классное. Горы тут были такой высоты, что задевали вершинами хитрое солнце. 
          </div>
           <div class="bubble bubble-12">
           По небу парили дельтапланы, ну или даже мебель. И никто не регулировал это безумное движение, но никто никому не мешал. 
          </div>
          <div class="bubble bubble-13">
            На огромных ветвях баньяна спели шоколадные трюфеля и соленые огурцы.
          </div>
          <div class="bubble bubble-14">
            Бурый медведь, живший на дереве, кричал Человеку «Bonjour».
          </div>
          <div class="bubble bubble-15">
            Люди здесь ходили вверх ногами, но не по нужде, а просто по фану. 
          </div>
            <div class="bubble bubble-16">
            По дороге как змей полз бесконечный синий лимузин. 
          </div>
           <div class="bubble bubble-17">
Все здесь было чудно и знакомо. И казалось человеку, что он вернулся в место, где никогда не был. 
          </div>
           <div class="bubble bubble-18">
“Здесь ты найдешь ответы” – сказал Некто и подтолкнул Человека в спину (ведь иногда человека нужно чуть-чуть подтолкнуть). И ступил человек в неизвестную страну и отправился искать ответы. 
          </div>
      </div>
  </section>
</template>
<script>
export default {
  data: function() {
    return {
      quests: [],
    };
  },
  created: function() {
    for (let i = 0; i < 100; i++) {
      this.quests.push({});
    }
  },
  mounted: function() {
    const scaleCartoon = function() {
      let scenes = document.querySelectorAll('.scene');
      const scaleCoef = window.innerHeight / 1533;
      scenes.forEach(function(scene) {
        if (scaleCoef) {
          scene.style.transform = `translateY(-50%) translateX(-50%) scale(${scaleCoef})`;
          scene.style.height = `${window.innerHeight / scaleCoef}px`;
          scene.style.width = `${window.innerWidth  / scaleCoef}px`;
        } else {
          scene.style.transform = '';
          scene.style.height = ``;
        }
      });
    };
    window.addEventListener('resize', scaleCartoon);
    scaleCartoon();
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
  },
};
</script>
<style lang="scss">
@import '~/assets/scss/_vars.scss';
.expoint {
  width: 56px;
  top: calc(50% - 720px);
  left: calc(50% - 452px);
}
.lamp {
  width: 434px;
  top: calc(50% + 270px);
  left: calc(50% - 482px);
}
.cartoon {
  height: 100vh;
  overflow: hidden;
}
.hill-3 {
  width: 900px;
  top: calc(50% - 370px);
  left: calc(50% - 682px);
}
.hill-2 {
  width: 900px;
  top: calc(50% - 30px);
  left: calc(50% - 400px);
}
.people {
  width: 490px;
  top: calc(50% - 450px);
  left: calc(50% - 700px);
}
.tree {
  width: 1000px;
  top: calc(50% - 1100px);
  left: calc(50% - 150px);
}
.chairs {
  width: 400px;
      top: calc(50% - 750px);
  left: calc(50% - 200px);
}
.pillows {
  width: 620px;
  top: calc(50% - 550px);
  left: calc(50% - 250px);
}
.mountain {
      width: 855px;
    top: calc(50% - 700px);
    left: calc(50% - 800px);
}
.hill-1 {
  width: 581px;
  top: calc(50% - 410px);
  left: calc(50% - 203px);
}
.img-bubble {
  width: 921px;
  top: calc(50% - 590px);
  left: calc(50% - 353px);
}
.heroes {
  width: 400px;
  top: calc(50% - 600px);
  left: calc(50% - 100px);
}
.hero-think-1 {
  width: 620px;
  top: calc(50% - 400px);
  left: calc(50% - 600px);
}
.hero-think-2 {
  width: 620px;
  top: calc(50% - 400px);
  left: calc(50% - 600px);
}
.hero-think-3 {
  width: 620px;
  top: calc(50% - 400px);
  left: calc(50% - 600px);
}
.light-1 {
  width: 620px;
  top: calc(50% - 400px);
  left: calc(50% - 600px);
}
.light-2 {
  width: 620px;
  top: calc(50% - 400px);
  left: calc(50% - 600px);
}
.light-3 {
  width: 620px;
  top: calc(50% - 400px);
  left: calc(50% - 600px);
}
.light-4 {
  width: 620px;
  top: calc(50% - 400px);
  left: calc(50% - 600px);
}
.quest {
  width: 100px;
  position: absolute;
  opacity: 0;
}
.bubble {
  // display: none !important;
  padding: 0px 80px;
  opacity: 0;
  position: absolute;
  font-size: 30px;
  background: url('~/static/bubble-white-1.png');
  background-size: 100%;
  // border: 2px solid black;
  width: 600px;
  height: 300px;
  display: flex;
  align-items: center;
  text-align: center;
  top: calc(50% - 150px);
  left: calc(50% - 300px);
}
.scene {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
  opacity: 0;
  @media #{$mediumScreen} {
    transform: translateY(-50%) translateX(-50%) scale(0.75);
  }
  &-1 {
    opacity: 1;
  }
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
      top: calc(50% - 800px);
      left: calc(50% - 400px);
    }
    &-hero {
      width: 555px;
      top: calc(50% - 200px);
      left: calc(50% - 600px);
    }
    &-bridge {
      width: 1100px;
      top: calc(50% + 100px);
      left: calc(50% - 700px);
    }
    &-house-1 {
      // display: none;
      width: 500px;
      top: calc(50% - 150px);
      left: calc(50% + 90px);
    }
    &-house-2 {
      // display: none;
      width: 450px;
      top: calc(50% - 400px);
      left: calc(50% - 100px);
    }
    &-house-3 {
      // display: none;
      width: 550px;
      top: calc(50%);
      left: calc(50% - 500px);
    }
    &-lighters {
      // display: none;
      width: 850px;
      top: calc(50%);
      left: calc(50% - 100px);
    }
    &-moscow-city {
      // display: none;
      width: 650px;
      top: calc(50% - 600px);
      left: calc(50% - 650px);
    }
  }
}
</style>
