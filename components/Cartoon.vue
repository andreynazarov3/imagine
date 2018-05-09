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
        <img class="people" src="~/static/fantasy/people.png" alt="" srcset="">
        <img class="hill-2" src="~/static/fantasy/hill2.png" alt="" srcset="">
        <img class="heroes" src="~/static/fantasy/heroes.png" alt="" srcset="">
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
.cartoon {
  height: 100vh;
}
.hill-2 {
  width: 900px;
  top: 800px;
  left: calc(50% - 400px);
}
.people {
  width: 490px;
  top: 400px;
  left: calc(50% - 700px);
}
.tree {
  width: 1000px;
  top: -334px;
  left: calc(50% - 150px);
}
.chairs {
  width: 400px;
  top: 0;
  left: calc(50% - 200px);
}
.pillows {
  width: 620px;
  top: 250px;
  left: calc(50% - 250px);
}
.mountain {
  width: 855px;
  top: 150px;
  left: calc(50% - 800px);
}
.hill-1 {
  width: 381px;
  top: 224px;
  left: calc(50% - 203px);
}
.img-bubble {
  width: 621px;
  top: 94px;
  left: calc(50% - 303px);
}
.heroes {
  width: 250px;
  top: 100px;
  left: calc(50% - 100px);
}
.hero-think-1 {
  width: 420px;
  top: 200px;
  left: calc(50% - 500px);
}
.hero-think-2 {
  width: 420px;
  top: 200px;
  left: calc(50% - 500px);
}
.hero-think-3 {
  width: 420px;
  top: 200px;
  left: calc(50% - 500px);
}
.light-1 {
  width: 420px;
  top: 200px;
  left: calc(50% - 500px);
}
.light-2 {
  width: 420px;
  top: 200px;
  left: calc(50% - 500px);
}
.light-3 {
  width: 420px;
  top: 200px;
  left: calc(50% - 500px);
}
.light-4 {
  width: 420px;
  top: 200px;
  left: calc(50% - 500px);
}
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
</style>
