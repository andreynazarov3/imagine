<template>
  <section class="cartoon desktop">    
    <img style="display:none !important;" data-src="/logo_black.png" alt="">
    <img style="display:none !important;" data-src="/popup.png" alt="">
      <div class="scale scene scene-1" id="scene-1">      
          <img class="city scene-img-background" data-src="/background.png" alt="">             
          <img class="city scene-img-moscow-city" data-src="/moscow-city.png" alt="">          
          <img class="city scene-img-house-2" data-src="/house_2.png" alt="">
          <img class="city scene-img-house-1" data-src="/house_1.png" alt="">
          <img class="city scene-img-house-3" data-src="/house_3.png" alt="">
          <img class="city scene-img-bridge" data-src="/bridge.png" alt="">
          <img class="city scene-img-lighters" data-src="/lighters.png" alt=""> 
          <img class="scene-img-hero" data-src="/hero-2.png" alt="">        <img class="curtain" data-src="/curtain.png" alt="">            
          <div class="quests quests-1" data-size="1">
              <img :key="`q1-${index}`" v-for="(quest, index) in quests1" class="quest" alt=""  data-src="/ques1.png">
              <img :key="`q2-${index}`" v-for="(quest, index) in quests1" class="quest" alt=""  data-src="/ques2.png">
              <img :key="`q3-${index}`" v-for="(quest, index) in quests1" class="quest" alt=""  data-src="/ques3.png">
               <img :key="`q4-${index}`" v-for="(quest, index) in quests1" class="quest" alt=""  data-src="/ques4.png">
               <img :key="`q5-${index}`" v-for="(quest, index) in quests1" class="quest" alt=""  data-src="/ques5.png">
               <img :key="`q6-${index}`" v-for="(quest, index) in quests1" class="quest" alt=""  data-src="/ques6.png">
          </div>
          <div class="quests quests-1" data-size="2">
              <img :key="`q1-${index}`" v-for="(quest, index) in quests1" class="quest" alt=""  data-src="/ques1.png">
              <img :key="`q2-${index}`" v-for="(quest, index) in quests1" class="quest" alt=""  data-src="/ques2.png">
              <img :key="`q3-${index}`" v-for="(quest, index) in quests1" class="quest" alt=""  data-src="/ques3.png">
               <img :key="`q4-${index}`" v-for="(quest, index) in quests1" class="quest" alt=""  data-src="/ques4.png">
               <img :key="`q5-${index}`" v-for="(quest, index) in quests1" class="quest" alt=""  data-src="/ques5.png">
               <img :key="`q6-${index}`" v-for="(quest, index) in quests1" class="quest" alt=""  data-src="/ques6.png">
          </div>
          <div class="quests quests-1" data-size="3">
              <img :key="`q1-${index}`" v-for="(quest, index) in quests1" class="quest" alt=""  data-src="/ques1.png">
              <img :key="`q2-${index}`" v-for="(quest, index) in quests1" class="quest" alt=""  data-src="/ques2.png">
              <img :key="`q3-${index}`" v-for="(quest, index) in quests1" class="quest" alt=""  data-src="/ques3.png">
               <img :key="`q4-${index}`" v-for="(quest, index) in quests1" class="quest" alt=""  data-src="/ques4.png">
               <img :key="`q5-${index}`" v-for="(quest, index) in quests1" class="quest" alt=""  data-src="/ques5.png">
               <img :key="`q6-${index}`" v-for="(quest, index) in quests1" class="quest" alt=""  data-src="/ques6.png">
          </div>
          <div class="quests quests-1" data-size="4">
              <img :key="`q1-${index}`" v-for="(quest, index) in quests1" class="quest" alt=""  data-src="/ques1.png">
              <img :key="`q2-${index}`" v-for="(quest, index) in quests1" class="quest" alt=""  data-src="/ques2.png">
              <img :key="`q3-${index}`" v-for="(quest, index) in quests1" class="quest" alt=""  data-src="/ques3.png">
               <img :key="`q4-${index}`" v-for="(quest, index) in quests1" class="quest" alt=""  data-src="/ques4.png">
               <img :key="`q5-${index}`" v-for="(quest, index) in quests1" class="quest" alt=""  data-src="/ques5.png">
               <img :key="`q6-${index}`" v-for="(quest, index) in quests1" class="quest" alt=""  data-src="/ques6.png">
          </div>
          <div class="quests quests-1" data-size="5">
              <img :key="`q1-${index}`" v-for="(quest, index) in quests1" class="quest" alt=""  data-src="/ques1.png">
              <img :key="`q2-${index}`" v-for="(quest, index) in quests1" class="quest" alt=""  data-src="/ques2.png">
              <img :key="`q3-${index}`" v-for="(quest, index) in quests1" class="quest" alt=""  data-src="/ques3.png">
               <img :key="`q4-${index}`" v-for="(quest, index) in quests1" class="quest" alt=""  data-src="/ques4.png">
               <img :key="`q5-${index}`" v-for="(quest, index) in quests1" class="quest" alt=""  data-src="/ques5.png">
               <img :key="`q6-${index}`" v-for="(quest, index) in quests1" class="quest" alt=""  data-src="/ques6.png">
          </div>
          <div class="quests quests-1" data-size="6">
              <img :key="`q1-${index}`" v-for="(quest, index) in quests1" class="quest" alt=""  data-src="/ques1.png">
              <img :key="`q2-${index}`" v-for="(quest, index) in quests1" class="quest" alt=""  data-src="/ques2.png">
              <img :key="`q3-${index}`" v-for="(quest, index) in quests1" class="quest" alt=""  data-src="/ques3.png">
               <img :key="`q4-${index}`" v-for="(quest, index) in quests1" class="quest" alt=""  data-src="/ques4.png">
               <img :key="`q5-${index}`" v-for="(quest, index) in quests1" class="quest" alt=""  data-src="/ques5.png">
               <img :key="`q6-${index}`" v-for="(quest, index) in quests1" class="quest" alt=""  data-src="/ques6.png">
          </div>
          <div class="quests quests-2" data-size="1">
              <img :key="`q1-${index}`" v-for="(quest, index) in quests2" class="quest" alt=""  data-src="/ques1.png">
              <img :key="`q2-${index}`" v-for="(quest, index) in quests2" class="quest" alt=""  data-src="/ques2.png">
              <img :key="`q3-${index}`" v-for="(quest, index) in quests2" class="quest" alt=""  data-src="/ques3.png">
               <img :key="`q4-${index}`" v-for="(quest, index) in quests2" class="quest" alt=""  data-src="/ques4.png">
               <img :key="`q5-${index}`" v-for="(quest, index) in quests2" class="quest" alt=""  data-src="/ques5.png">
               <img :key="`q6-${index}`" v-for="(quest, index) in quests2" class="quest" alt=""  data-src="/ques6.png">
          </div>
          <div class="quests quests-2" data-size="2">
              <img :key="`q1-${index}`" v-for="(quest, index) in quests2" class="quest" alt=""  data-src="/ques1.png">
              <img :key="`q2-${index}`" v-for="(quest, index) in quests2" class="quest" alt=""  data-src="/ques2.png">
              <img :key="`q3-${index}`" v-for="(quest, index) in quests2" class="quest" alt=""  data-src="/ques3.png">
               <img :key="`q4-${index}`" v-for="(quest, index) in quests2" class="quest" alt=""  data-src="/ques4.png">
               <img :key="`q5-${index}`" v-for="(quest, index) in quests2" class="quest" alt=""  data-src="/ques5.png">
               <img :key="`q6-${index}`" v-for="(quest, index) in quests2" class="quest" alt=""  data-src="/ques6.png">
          </div>
          <div class="quests quests-2" data-size="3">
              <img :key="`q1-${index}`" v-for="(quest, index) in quests2" class="quest" alt=""  data-src="/ques1.png">
              <img :key="`q2-${index}`" v-for="(quest, index) in quests2" class="quest" alt=""  data-src="/ques2.png">
              <img :key="`q3-${index}`" v-for="(quest, index) in quests2" class="quest" alt=""  data-src="/ques3.png">
               <img :key="`q4-${index}`" v-for="(quest, index) in quests2" class="quest" alt=""  data-src="/ques4.png">
               <img :key="`q5-${index}`" v-for="(quest, index) in quests2" class="quest" alt=""  data-src="/ques5.png">
               <img :key="`q6-${index}`" v-for="(quest, index) in quests2" class="quest" alt=""  data-src="/ques6.png">
          </div>
          <div class="quests quests-2" data-size="4">
              <img :key="`q1-${index}`" v-for="(quest, index) in quests2" class="quest" alt=""  data-src="/ques1.png">
              <img :key="`q2-${index}`" v-for="(quest, index) in quests2" class="quest" alt=""  data-src="/ques2.png">
              <img :key="`q3-${index}`" v-for="(quest, index) in quests2" class="quest" alt=""  data-src="/ques3.png">
               <img :key="`q4-${index}`" v-for="(quest, index) in quests2" class="quest" alt=""  data-src="/ques4.png">
               <img :key="`q5-${index}`" v-for="(quest, index) in quests2" class="quest" alt=""  data-src="/ques5.png">
               <img :key="`q6-${index}`" v-for="(quest, index) in quests2" class="quest" alt=""  data-src="/ques6.png">
          </div>
          <div class="quests quests-2" data-size="5">
              <img :key="`q1-${index}`" v-for="(quest, index) in quests2" class="quest" alt=""  data-src="/ques1.png">
              <img :key="`q2-${index}`" v-for="(quest, index) in quests2" class="quest" alt=""  data-src="/ques2.png">
              <img :key="`q3-${index}`" v-for="(quest, index) in quests2" class="quest" alt=""  data-src="/ques3.png">
               <img :key="`q4-${index}`" v-for="(quest, index) in quests2" class="quest" alt=""  data-src="/ques4.png">
               <img :key="`q5-${index}`" v-for="(quest, index) in quests2" class="quest" alt=""  data-src="/ques5.png">
               <img :key="`q6-${index}`" v-for="(quest, index) in quests2" class="quest" alt=""  data-src="/ques6.png">
          </div>
          <div class="quests quests-2" data-size="6">
              <img :key="`q1-${index}`" v-for="(quest, index) in quests2" class="quest" alt=""  data-src="/ques1.png">
              <img :key="`q2-${index}`" v-for="(quest, index) in quests2" class="quest" alt=""  data-src="/ques2.png">
              <img :key="`q3-${index}`" v-for="(quest, index) in quests2" class="quest" alt=""  data-src="/ques3.png">
               <img :key="`q4-${index}`" v-for="(quest, index) in quests2" class="quest" alt=""  data-src="/ques4.png">
               <img :key="`q5-${index}`" v-for="(quest, index) in quests2" class="quest" alt=""  data-src="/ques5.png">
               <img :key="`q6-${index}`" v-for="(quest, index) in quests2" class="quest" alt=""  data-src="/ques6.png">
          </div>
          <div class="quests quests-3" data-size="1">
              <img :key="`q1-${index}`" v-for="(quest, index) in quests3" class="quest" alt=""  data-src="/ques1.png">
              <img :key="`q2-${index}`" v-for="(quest, index) in quests3" class="quest" alt=""  data-src="/ques2.png">
              <img :key="`q3-${index}`" v-for="(quest, index) in quests3" class="quest" alt=""  data-src="/ques3.png">
               <img :key="`q4-${index}`" v-for="(quest, index) in quests3" class="quest" alt=""  data-src="/ques4.png">
               <img :key="`q5-${index}`" v-for="(quest, index) in quests3" class="quest" alt=""  data-src="/ques5.png">
               <img :key="`q6-${index}`" v-for="(quest, index) in quests3" class="quest" alt=""  data-src="/ques6.png">
          </div>
          <div class="quests quests-3" data-size="2">
              <img :key="`q1-${index}`" v-for="(quest, index) in quests3" class="quest" alt=""  data-src="/ques1.png">
              <img :key="`q2-${index}`" v-for="(quest, index) in quests3" class="quest" alt=""  data-src="/ques2.png">
              <img :key="`q3-${index}`" v-for="(quest, index) in quests3" class="quest" alt=""  data-src="/ques3.png">
               <img :key="`q4-${index}`" v-for="(quest, index) in quests3" class="quest" alt=""  data-src="/ques4.png">
               <img :key="`q5-${index}`" v-for="(quest, index) in quests3" class="quest" alt=""  data-src="/ques5.png">
               <img :key="`q6-${index}`" v-for="(quest, index) in quests3" class="quest" alt=""  data-src="/ques6.png">
          </div>
          <div class="quests quests-3" data-size="3">
              <img :key="`q1-${index}`" v-for="(quest, index) in quests3" class="quest" alt=""  data-src="/ques1.png">
              <img :key="`q2-${index}`" v-for="(quest, index) in quests3" class="quest" alt=""  data-src="/ques2.png">
              <img :key="`q3-${index}`" v-for="(quest, index) in quests3" class="quest" alt=""  data-src="/ques3.png">
               <img :key="`q4-${index}`" v-for="(quest, index) in quests3" class="quest" alt=""  data-src="/ques4.png">
               <img :key="`q5-${index}`" v-for="(quest, index) in quests3" class="quest" alt=""  data-src="/ques5.png">
               <img :key="`q6-${index}`" v-for="(quest, index) in quests3" class="quest" alt=""  data-src="/ques6.png">
          </div>
          <div class="quests quests-3" data-size="4">
              <img :key="`q1-${index}`" v-for="(quest, index) in quests3" class="quest" alt=""  data-src="/ques1.png">
              <img :key="`q2-${index}`" v-for="(quest, index) in quests3" class="quest" alt=""  data-src="/ques2.png">
              <img :key="`q3-${index}`" v-for="(quest, index) in quests3" class="quest" alt=""  data-src="/ques3.png">
               <img :key="`q4-${index}`" v-for="(quest, index) in quests3" class="quest" alt=""  data-src="/ques4.png">
               <img :key="`q5-${index}`" v-for="(quest, index) in quests3" class="quest" alt=""  data-src="/ques5.png">
               <img :key="`q6-${index}`" v-for="(quest, index) in quests3" class="quest" alt=""  data-src="/ques6.png">
          </div>
          <div class="quests quests-3" data-size="5">
              <img :key="`q1-${index}`" v-for="(quest, index) in quests3" class="quest" alt=""  data-src="/ques1.png">
              <img :key="`q2-${index}`" v-for="(quest, index) in quests3" class="quest" alt=""  data-src="/ques2.png">
              <img :key="`q3-${index}`" v-for="(quest, index) in quests3" class="quest" alt=""  data-src="/ques3.png">
               <img :key="`q4-${index}`" v-for="(quest, index) in quests3" class="quest" alt=""  data-src="/ques4.png">
               <img :key="`q5-${index}`" v-for="(quest, index) in quests3" class="quest" alt=""  data-src="/ques5.png">
               <img :key="`q6-${index}`" v-for="(quest, index) in quests3" class="quest" alt=""  data-src="/ques6.png">
          </div>
          <div class="quests quests-3" data-size="6">
              <img :key="`q1-${index}`" v-for="(quest, index) in quests3" class="quest" alt=""  data-src="/ques1.png">
              <img :key="`q2-${index}`" v-for="(quest, index) in quests3" class="quest" alt=""  data-src="/ques2.png">
              <img :key="`q3-${index}`" v-for="(quest, index) in quests3" class="quest" alt=""  data-src="/ques3.png">
               <img :key="`q4-${index}`" v-for="(quest, index) in quests3" class="quest" alt=""  data-src="/ques4.png">
               <img :key="`q5-${index}`" v-for="(quest, index) in quests3" class="quest" alt=""  data-src="/ques5.png">
               <img :key="`q6-${index}`" v-for="(quest, index) in quests3" class="quest" alt=""  data-src="/ques6.png">
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
      <div class="scale scene scene-2" id="scene-2">
         
        <img class="light light-1"  data-src="/light/light1.png" alt="" >
        <img class="light light-2" data-src="/light/light2.png" alt="" >
        <img class="light light-3" data-src="/light/light3.png" alt="" >
        <img class="light light-4" data-src="/light/light4.png" alt="" >
         <img class="hero-think-1" data-src="/light/hero1.png" alt="" >
        <img class="hero-think-2" data-src="/light/hero2.png" alt="" >
        <img class="hero-think-3" data-src="/light/hero3.png" alt="" >
       
        <img class="img-bubble" data-src="/bubble1b.png" alt="" >
         <img class="mountain" data-src="/fantasy/mountain.png" alt="" >
         <img class="tree" data-src="/fantasy/tree.png" alt="" >
      
        <img data-src="/kid_handless.png" alt=""  class="hero-2">

          <img class="hill-3" data-src="/fantasy/hill3.png" alt="" >
          <img class="people" data-src="/fantasy/people.png" alt="" >        
          <img class="hill-2" data-src="/fantasy/hill2.png" alt="" >        
              <img class="hill-1" data-src="/fantasy/hill1.png" alt="" >
        <img class="heroes" data-src="/fantasy/heroes.png" alt="" >   
             <img class="pillows" data-src="/fantasy/pillows.png" alt="" >
           <img class="chairs" data-src="/fantasy/chairs.png" alt="" >
          
          <img class="lamp" data-src="/fantasy/lamp.png" alt="" >
          <img class="expoint" data-src="/expoint.png" alt="" >
       
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
    <div class="scale heroes-hill">
           
    </div>
  </section>
</template>
<script>
export default {
  props: ['isMobile'],
  data: function() {
    return {
      quests1: [],
      quests2: [],
      quests3: [],
    };
  },
  created: function() {
    for (let i = 0; i < 1; i++) {
      this.quests1.push({});
    }
    for (let i = 0; i < 2; i++) {
      this.quests2.push({});
    }
    for (let i = 0; i < 15; i++) {
      this.quests3.push({});
    }
  },
  mounted: function() {
    let windowHeight;
    let windowWidth;
    let vue = this;
    function getWindowSize() {
      if (vue.isMobile) {
        windowHeight = window.screen.height;
        windowWidth = window.screen.width;
      } else {
        windowHeight = window.innerHeight;
        windowWidth = window.innerWidth;
      }
    }
    const cartoon = document.querySelector('.cartoon.desktop');

    function scrollcartoon(e) {
      // scroll down
      e.preventDefault();
      if (e.deltaY > 0) {
        TweenMax.to(window, 1, {
          scrollTo: {
            y: window.scrollY + windowHeight,
            autoKill: true,
          },
        });
      }
      // scroll up
      if (e.deltaY < 0) {
        TweenMax.to(window, 1, {
          scrollTo: {
            y: window.scrollY - windowHeight,
            autoKill: true,
          },
        });
      }
    }

    const isMacLike = navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i) ? true : false;
    if (!isMacLike) {
      cartoon.addEventListener('mousewheel', scrollcartoon);
      cartoon.addEventListener('DOMMouseScroll', scrollcartoon);
    }
    getWindowSize();
    const scaleCartoon = function() {
      let scenes = document.querySelectorAll('.cartoon.desktop .scale');
      const windowRatio = windowWidth / windowHeight;
      let scaleCoef = windowWidth / 1533;
      if (windowRatio < 1) {
        scaleCoef = windowHeight / 1533;
      }
      scenes.forEach(function(scene) {
        if (scaleCoef) {
          scene.style.transform = `translateY(-50%) translateX(-50%) scale(${scaleCoef})`;
          scene.style.height = `${windowHeight / scaleCoef}px`;
          scene.style.width = `${windowWidth / scaleCoef}px`;
        } else {
          scene.style.transform = '';
          scene.style.height = ``;
        }
      });
    };
    window.addEventListener('resize', getWindowSize);
    window.addEventListener('orientationchange', getWindowSize);
    window.addEventListener('resize', scaleCartoon);
    window.addEventListener('orientationchange', scaleCartoon);
    scaleCartoon();
    let questsBlocks = document.querySelectorAll('.quests');

    for (let i = 0; i < questsBlocks.length; i++) {
      let quests = questsBlocks[i].querySelectorAll('img');
      for (let j = 0; j < quests.length; j++) {
        const sizes = [100, 150, 200, 250, 350, 450];
        const sizeScale = 0.6;
        const height = sizes[questsBlocks[i].dataset.size - 1];
        const width = height * sizeScale;
        const leftDeviation = Math.floor(Math.random() * 800);
        const topDeviation = Math.floor(Math.random() * 2000);
        const left =
          Math.random() < 0.5
            ? `calc(50% - ${leftDeviation + width / 2}px)`
            : `calc(50% + ${leftDeviation - width / 2}px)`;
        const top = `${topDeviation}px`;
        quests[j].style.left = left;
        quests[j].style.top = top;
        quests[j].style.height = `${height}px`;
        quests[j].style.width = `${width}px`;
      }
    }
  },
};
</script>
<style lang="scss">
@import '~/assets/scss/_vars.scss';
.scene {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
  opacity: 0;
  &-1 {
    opacity: 1;
  }
  &.scene-2 {
    background: black;
  }
  img {
    transform-origin: bottom;
    position: absolute;
    // opacity: 0;
  }
  &-img {
    &-logo {
      width: 800px;
      top: calc(50% - 250px);
      left: calc(50% - 400px);
    }
    &-background {
      width: 1194px;
      top: 50%;
      // top: calc(50% - 800px);
      left: calc(50% - 400px);
      position: absolute;
      transform: translateY(200px);
    }
    &-hero {
      position: absolute;
      width: 300px;
      top: 50%;
      // top: calc(50% - 200px);
      left: calc(50% - 400px);
      transform: scale(1.9) translateY(100px);
      transform-origin: top !important;
    }
    &-bridge {
      width: 1100px;
      top: 100%;
      // top: calc(50% + 100px);
      left: calc(50% - 650px);
      transform: translateY(1000px);
    }
    &-house-1 {
      // display: none;
      width: 500px;
      top: 100%;
      // top: calc(50% - 150px);
      left: calc(50% + 200px);
      transform: translateY(450px);
    }
    &-house-2 {
      // display: none;
      width: 450px;
      top: 100%;
      // top: calc(50% - 400px);
      left: calc(50% - 50px);
      transform: translateY(100px);
    }
    &-house-3 {
      // display: none;
      width: 550px;
      top: 100%;
      // top: calc(50%);
      left: calc(50% - 400px);
      transform: translateY(800px);
    }
    &-lighters {
      // display: none;
      width: 850px;
      top: 100%;
      // top: calc(50%);
      left: calc(50% - 100px);
      transform: translateY(1200px);
    }
    &-moscow-city {
      // display: none;
      width: 650px;
      top: 100%;
      // top: calc(50% - 600px);
      left: calc(50% - 650px);
      transform: translateY(100px);
    }
  }
}
.scene-1 {
  overflow: hidden;
  z-index: 1;
  img {
    opacity: 0;
  }
}
.scene-2 {
  overflow: visible;
  z-index: 3;
  img {
    opacity: 0;
  }
}
.heroes-hill {
  z-index: 3;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
  opacity: 0;
}
.curtain {
  opacity: 1 !important;
  top: 0;
  width: 100%;
  height: 200%;
  transform: translateY(50%);
}
.expoint {
  width: 56px;
  top: calc(50% + 80px);
  left: calc(50% - 452px);
}
.lamp {
  width: 434px;
  top: calc(50% + 2000px);
  left: calc(50% - 482px);
}
.cartoon {
  height: 100vh;
  // overflow: hidden;
  position: relative;
}
.hill-3 {
  width: 900px;
  top: calc(50% + 530px);
  left: calc(50% - 682px);
}
.hill-2 {
  width: 900px;
  top: calc(50% + 970px);
  left: calc(50% - 400px);
}
.people {
  width: 490px;
  top: calc(50% + 550px);
  left: calc(50% - 700px);
}
.tree {
  width: 1000px;
  top: calc(50% - 200px);
  left: calc(50% - 200px);
}
.chairs {
  width: 400px;
  top: calc(50% + 450px);
  left: calc(50% - 200px);
}
.pillows {
  width: 620px;
  top: calc(50%);
  left: calc(50%);
  transform: translateY(1350px) translateX(-250px);
}
.mountain {
  width: 855px;
  top: calc(50% + 100px);
  left: calc(50% - 800px);
}
.hill-1 {
  opacity: 0;
  position: absolute;
  width: 281px;
  top: calc(50%);
  left: calc(50%);
  transform: translateY(-120px) translateX(-153px);
}
.img-bubble {
  width: 521px;
  top: calc(50%);
  left: calc(50%);
  transform-origin: center !important;
  transform: translateY(-250px) translateX(-300px);
}
.heroes {
  position: absolute;
  opacity: 0;
  width: 200px;
  top: calc(50%);
  left: calc(50%);
  transform: translateY(-232px) translateX(-107px);
}
.hero-2 {
  width: 40px;
  top: calc(50% - 90px);
  left: calc(50% - 65px);
}
.hero-think-1 {
  width: 320px;
  top: calc(50% - 100px);
  left: calc(50% - 400px);
}
.hero-think-2 {
  width: 320px;
  top: calc(50% - 100px);
  left: calc(50% - 400px);
}
.hero-think-3 {
  width: 320px;
  top: calc(50% - 100px);
  left: calc(50% - 400px);
}
.light-1 {
  width: 320px;
  top: calc(50% - 100px);
  left: calc(50% - 400px);
}
.light-2 {
  width: 320px;
  top: calc(50% - 100px);
  left: calc(50% - 400px);
}
.light-3 {
  width: 320px;
  top: calc(50% - 100px);
  left: calc(50% - 400px);
}
.light-4 {
  width: 320px;
  top: calc(50% - 100px);
  left: calc(50% - 400px);
}
.quest {
  position: absolute;
  opacity: 1;
}
.quests {
  width: 100%;
  height: 100%;
  position: absolute;
  transform: translateY(100%) translateX(-50%);
  top: 0;
  left: 50%;
  img {
    opacity: 1;
  }
}
.bubble {
  // display: none !important;
  padding: 0px 80px;
  opacity: 1;
  position: absolute;
  font-family: $basicFont;
  font-size: 30px;
  background-size: 100% 100%;
  // border: 2px solid black;
  width: 600px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  top: 100%;
  left: calc(50% - 300px);
  &-1,
  &-4,
  &-7,
  &-10,
  &-13,
  &-16 {
    background-image: url('~/static/bubble-white-1.png');
  }
  &-2,
  &-5,
  &-8,
  &-11,
  &-14,
  &-17 {
    background-image: url('~/static/bubble-white-2.png');
    padding-top: 80px;
    padding-left: 135px;
  }
  &-3,
  &-6,
  &-9,
  &-12,
  &-15,
  &-18 {
    background-image: url('~/static/bubble-white-3.png');
  }
}

.scrollbar-measure {
  width: 100px;
  height: 100px;
  overflow: scroll;
  position: absolute;
  top: -9999px;
}
</style>
