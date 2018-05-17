<template>
  <section class="cartoon">    
      <div class="scene scene-1" id="scene-1">      
          <img class="city scene-img-background" data-src="/background.png" alt="">             
          <img class="city scene-img-moscow-city" data-src="/moscow-city.png" alt="">
          
          <img class="city scene-img-house-2" data-src="/house_2.png" alt="">
          <img class="city scene-img-house-1" data-src="/house_1.png" alt="">
          <img class="city scene-img-house-3" data-src="/house_3.png" alt="">
          <img class="city scene-img-bridge" data-src="/bridge.png" alt="">
          <img class="city scene-img-lighters" data-src="/lighters.png" alt=""> 
          <img class="scene-img-hero" data-src="/hero-2.png" alt="">                  
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
      <div class="scene scene-2" id="scene-2">
         
        <img class="light light-1"  data-src="/light/light1.png" alt="" >
        <img class="light light-2" data-src="/light/light2.png" alt="" >
        <img class="light light-3" data-src="/light/light3.png" alt="" >
        <img class="light light-4" data-src="/light/light4.png" alt="" >
         <img class="hero-think-1" data-src="/light/hero1.png" alt="" >
        <img class="hero-think-2" data-src="/light/hero2.png" alt="" >
        <img class="hero-think-3" data-src="/light/hero3.png" alt="" >
       
        <img class="img-bubble" data-src="/bubble1b.png" alt="" >
         <img class="mountain" data-src="/fantasy/mountain.png" alt="" >
        <img class="hill-1" data-src="/fantasy/hill1.png" alt="" >
        <img data-src="/kid_handless.png" alt=""  class="hero-2">
      
             
          
        
          <img class="hill-3" data-src="/fantasy/hill3.png" alt="" >
          <img class="people" data-src="/fantasy/people.png" alt="" >        
          <img class="hill-2" data-src="/fantasy/hill2.png" alt="" >        
           <img class="tree" data-src="/fantasy/tree.png" alt="" >
             <img class="pillows" data-src="/fantasy/pillows.png" alt="" >
           <img class="chairs" data-src="/fantasy/chairs.png" alt="" >
          <img class="heroes" data-src="/fantasy/heroes.png" alt="" >
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
  </section>
</template>
<script>
export default {
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
    for (let i = 0; i < 5; i++) {
      this.quests3.push({});
    }
  },
  mounted: function() {
    const scaleCartoon = function() {
      let scrollBarWidth = 0;
      let windowHeight;
      let windowWidth;
      if (
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
          navigator.userAgent,
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          navigator.userAgent.substr(0, 4),
        )
      ) {
        windowHeight = window.screen.height;
        windowWidth = window.screen.width;
      } else {
        windowHeight = window.innerHeight;
        windowWidth = window.innerWidth;
      }

      let scenes = document.querySelectorAll('.scene');
      const scaleCoef = windowWidth / 1533;
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
    window.addEventListener('resize', scaleCartoon);
    scaleCartoon();
    let questsBlocks = document.querySelectorAll('.quests');

    for (let i = 0; i < questsBlocks.length; i++) {
      switch (questsBlocks[i].dataset.size) {
        case '1':
          questsBlocks[i].style.transform = 'translateX(-50%) translateY(100%)';
        case '2':
          questsBlocks[i].style.transform = 'translateX(-50%) translateY(105%)';
        case '3':
          questsBlocks[i].style.transform = 'translateX(-50%) translateY(110%)';
        case '4':
          questsBlocks[i].style.transform = 'translateX(-50%) translateY(125%)';
        case '5':
          questsBlocks[i].style.transform = 'translateX(-50%) translateY(145%)';
        case '6':
      }
      let quests = questsBlocks[i].querySelectorAll('img');
      for (let j = 0; j < quests.length; j++) {
        const sizes = [100, 150, 200, 250, 350, 450];
        const sizeScale = 0.6;
        const height = sizes[questsBlocks[i].dataset.size - 1];
        const width = height * sizeScale;
        const leftDeviation = Math.floor(Math.random() * 900);
        const topDeviation = Math.floor(Math.random() * 3500);

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
.scene.scene-0 {
  opacity: 1 !important;
  z-index: 2;
  // top: 0%;
}
.scene-1 {
  z-index: 1;
}
.scene-2 {
  z-index: 3;
  img {
    opacity: 0;
  }
}

.expoint {
  width: 56px;
  top: calc(50% + 80px);
  left: calc(50% - 452px);
}
.lamp {
  width: 434px;
  top: calc(50% + 600px);
  left: calc(50% - 482px);
}
.cartoon {
  height: 100vh;
  // overflow: hidden;
  position: relative;
}
.hill-3 {
  width: 900px;
  top: calc(50% + 430px);
  left: calc(50% - 682px);
}
.hill-2 {
  width: 900px;
  top: calc(50% + 670px);
  left: calc(50% - 400px);
}
.people {
  width: 490px;
  top: calc(50% + 450px);
  left: calc(50% - 700px);
}
.tree {
  width: 1000px;
  top: calc(50%  + 400px);
  left: calc(50% - 150px);
}
.chairs {
  width: 400px;
  top: calc(50% + 850px);
  left: calc(50% - 200px);
}
.pillows {
  width: 620px;
  top: calc(50% + 550px);
  left: calc(50% - 250px);
}
.mountain {
  width: 855px;
  top: calc(50% + 100px);
  left: calc(50% - 800px);
}
.hill-1 {
  width: 281px;
  top: calc(50%);
  left: calc(50%);
  transform: translateY(-120px) translateX(-153px);
}
.img-bubble {
  width: 521px;
  top: calc(50% - 250px);
  left: calc(50% - 300px);  
  transform-origin: center !important;
}
.heroes {
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
}
.bubble {
  // display: none !important;
  padding: 0px 80px;
  opacity: 1;
  position: absolute;
  font-family: $basicFont;
  font-size: 30px;
  background: url('~/static/bubble-white-1.png');
  background-size: 100%;
  // border: 2px solid black;
  width: 600px;
  height: 300px;
  display: flex;
  align-items: center;
  text-align: center;
  top: 100%;
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
      transform: translateY(600px);
    }
    &-house-1 {
      // display: none;
      width: 500px;
      top: 100%;
      // top: calc(50% - 150px);
      left: calc(50% + 200px);
      transform: translateY(350px);
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
      transform: translateY(500px);
    }
    &-lighters {
      // display: none;
      width: 850px;
      top: 100%;
      // top: calc(50%);
      left: calc(50% - 100px);
      transform: translateY(600px);
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
.scrollbar-measure {
  width: 100px;
  height: 100px;
  overflow: scroll;
  position: absolute;
  top: -9999px;
}
</style>
