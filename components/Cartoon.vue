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
          <div class="quests quests-1">
              <img :key="`q1-${index}`" v-for="(quest, index) in quests" class="quest quest-1 quest-size-1" alt="" srcset="" src="~/static/ques1.png">
          </div>
          <div class="quests quests-2">
             <img :key="`q2-${index}`" v-for="(quest, index) in quests" class="quest quest-2 quest-size-2" alt="" srcset="" src="~/static/ques2.png">
          </div>
          <div class="quests quests-3">
              <img :key="`q3-${index}`" v-for="(quest, index) in quests" class="quest quest-3 quest-size-3" alt="" srcset="" src="~/static/ques3.png">
          </div>
          <div class="quests quests-4">
            <img :key="`q4-${index}`" v-for="(quest, index) in quests" class="quest quest-4 quest-size-4" alt="" srcset="" src="~/static/ques4.png">
          </div>
          <div class="quests quests-5">
              <img :key="`q5-${index}`" v-for="(quest, index) in quests" class="quest quest-5 quest-size-5" alt="" srcset="" src="~/static/ques5.png">
          </div>
          <div class="quests quests-6">
             <img :key="`q6-${index}`" v-for="(quest, index) in quests" class="quest quest-6 quest-size-6" alt="" srcset="" src="~/static/ques6.png">
          </div>        

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
        <img class="hero-2" src="~/static/kid_handless.png" alt="" srcset="">
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
      let windowHeight;
      if (
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
          navigator.userAgent,
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          navigator.userAgent.substr(0, 4),
        )
      ) {
        windowHeight = window.screen.height;
      } else {
        windowHeight = window.innerHeight;
      }
      let scenes = document.querySelectorAll('.scene');
      const scaleCoef = windowHeight / 1533;
      scenes.forEach(function(scene) {
        if (scaleCoef) {
          scene.style.transform = `translateY(-50%) translateX(-50%) scale(${scaleCoef})`;
          scene.style.height = `${windowHeight / scaleCoef}px`;
          scene.style.width = `${window.innerWidth / scaleCoef}px`;
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
      const sizes = [50, 100, 150, 200, 250, 300];
      const sizeScale = 0.6;
      const height = sizes[Math.floor(Math.random() * sizes.length)];
      const width = height * sizeScale;
      const leftDeviation = Math.floor(Math.random() * 1300);
      const topDeviation = Math.floor(Math.random() * 1000);
      // const width = 100 + Math.floor(Math.random() * 200);
      const leftPlusOrMinus = Math.random() < 0.5 ? '-' : '+';
      const topPlusOrMinus = Math.random() < 0.5 ? '-' : '+';
      const left = `calc(50% ${leftPlusOrMinus} ${leftDeviation - width / 2}px)`;
      const top = `calc(50% ${topPlusOrMinus} ${topDeviation - height / 2}px)`;
      quests[i].style.left = left;
      quests[i].style.top = top;
      quests[i].style.height = `${height}px`;
      quests[i].style.width = `${width}px`;
      quests[i].style.opacity = `1`;
      // quests[i].style.transform = `translateY(${window.innerHeight + 700}px)`;
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
  position: relative;
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
.hero-2 {
  width: 80px;
  top: calc(50% - 310px);
  left: calc(50% + -15px);
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
  // width: 100px;
  position: absolute;
  opacity: 0;
}
.quests {
  width: 100%;
  height: 100%;
  position: absolute;
  transform: translateY(1750px);
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
      transform-origin: bottom;
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
