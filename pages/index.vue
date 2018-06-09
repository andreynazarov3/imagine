<template lang="html">
<div ref="app" class="app" id="app" :class="{mobile: isMobile}">      
    <Logo :data="header" :progressNumber='progressNumber'  @scrollToForm='scrollToForm' />
    <main v-show="imagesLoaded || isMobile">
      <Cartoon :isMobile="isMobile" v-show="!isMobile" />
      <CartoonMobile :isMobile="isMobile" v-show="isMobile" />
      <Form @sendmail="showPopup = true" />
      <Schedule :data="schedule" @scrollToForm='scrollToForm' />
      <Speakers />
      <div @click="toggleMute" class="mute">
          <img v-if="muted" src="data:image/png;base64,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" alt="">
          <img v-if="!muted" src="data:image/png;base64,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" alt="">
      </div>
    </main>
<Popup v-if="showPopup" @close="showPopup = false" />
</div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js';
const client = createClient();
const imagesLoaded = require('imagesloaded');
const smoothScroll = require('~/assets/js/smoothscroll.js');
import Cartoon from '~/components/Cartoon';
import CartoonMobile from '~/components/CartoonMobile';
import Logo from '~/components/Logo';
import Form from '~/components/Form';
import Speakers from '~/components/Speakers';
import Schedule from '~/components/Schedule';
import Popup from '~/components/Popup';
import axios from 'axios';
import { Howl, Howler } from 'howler';
export default {
  components: {
    Cartoon,
    CartoonMobile,
    Logo,
    Form,
    Speakers,
    Schedule,
    Popup,
  },
  // asyncData({ env }) {
  //   return Promise.all([
  //     client.getEntries({
  //       content_type: env.CTF_SCHEDULE_TYPE_ID,
  //       order: 'sys.createdAt',
  //     }),
  //   ])
  //     .then(([{items}]) => {
  //       return {
  //         schedule: items
  //       };
  //     })
  //     .catch(console.error);
  // },
  created: function() {
    return Promise.all([
      client.getEntries({
        content_type: 'schedule',
        order: 'sys.createdAt',
      }),
    ])
      .then(([{ items }]) => {
        return (this.schedule = items);
      })
      .catch(console.error);
  },
  watch: {
    showPopup: function(val) {
      const body = document.querySelector('body');
      if (val === true) {
        body.style.overflow = 'hidden';
      } else {
        body.style.overflow = 'auto';
      }
    },
  },
  data: function() {
    return {
      muted: false,
      progressNumber: 0,
      showPopup: false,
      isMobile: false,
      imagesLoaded: false,
      header: '{}',
      schedule: null,
      currentSound: null,
      sounds: {
        gorod: null,
        voprosi: null,
        nagnetenie: null,
        lampa: null,
        tishina: null,
        luna: null,
      },
    };
  },
  methods: {
    toggleMute: function() {
      console.log('toggle mute');
      if (this.muted === false) {
        Howler.mute(true);
        this.muted = true;
      } else {
        Howler.mute(false);
        this.muted = false;
      }
    },
    checkMobile: function() {
      if (
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
          window.navigator.userAgent,
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          window.navigator.userAgent.substr(0, 4),
        )
      ) {
        console.log('mobile');
        return true;
      } else {
        console.log('not mobile');
        return false;
      }
    },
    scrollToForm: function() {
      function getOffsetTop(elem) {
        let getOffsetTop = 0;
        do {
          if (!isNaN(elem.offsetTop)) {
            getOffsetTop += elem.offsetTop;
          }
        } while ((elem = elem.offsetParent));
        return getOffsetTop;
      }
      // window.scrollTo(0, getOffsetTop(document.querySelector('.form')))
      TweenMax.to(window, 1, {
        scrollTo: {
          y: getOffsetTop(document.querySelector('.form')),
          // autoKill: false,
        },
      });
    },
  },
  beforeMount: function() {
    this.isMobile = this.checkMobile();
  },
  mounted: function() {
    if (!this.isMobile) {
      // Setup the new Howl.
      this.sounds.gorod = new Howl({
        src: ['/sounds/gorod.mp3'],
        loop: true,
        preload: true,
        muted: true,
        onload: () => {
          console.log('loaded', 'sound_gorod');
        },
      });
      this.sounds.voprosi = new Howl({
        src: ['/sounds/voprosi.mp3'],
        loop: true,
        preload: true,
        muted: true,
        onload: () => {
          console.log('loaded', 'sound_voprosi');
        },
      });
      this.sounds.nagnetenie = new Howl({
        src: ['/sounds/nagnetenie.mp3'],
        loop: true,
        preload: true,
        muted: true,
        onload: () => {
          console.log('loaded', 'sound_nagnetenie');
        },
      });
      this.sounds.lampa = new Howl({
        src: ['/sounds/lampa.mp3'],
        loop: true,
        preload: true,
        muted: true,
        onload: () => {
          console.log('loaded', 'sound_lampa');
        },
      });
      this.sounds.tishina = new Howl({
        src: ['/sounds/tishina.mp3'],
        loop: true,
        preload: true,
        muted: true,
        onload: () => {
          console.log('loaded', 'sound_tishina');
        },
      });
      this.sounds.luna = new Howl({
        src: ['/sounds/luna.mp3'],
        loop: true,
        preload: true,
        muted: true,
        onload: () => {
          console.log('loaded', 'sound_Luna');
        },
      });
      const bottomAnimationOffset = 50;
      const bottomAnimationTime = 1;
      const bottomController = new ScrollMagic.Controller();
      const formScene = new ScrollMagic.Scene({
        triggerElement: '.form',
      })
        .setTween(
          TweenMax.fromTo(
            '.form',
            bottomAnimationTime,
            { opacity: 0, y: bottomAnimationOffset },
            { opacity: 1, y: 0 },
          ),
        )
        .addTo(bottomController);
      const scheScene = new ScrollMagic.Scene({
        triggerElement: '.schedule',
      })
        .setTween(
          TweenMax.fromTo(
            '.schedule',
            bottomAnimationTime,
            { opacity: 0, y: bottomAnimationOffset },
            { opacity: 1, y: 0 },
          ),
        )
        .addTo(bottomController);
      const spekScene = new ScrollMagic.Scene({
        triggerElement: '.speakers',
      })
        .setTween(
          TweenMax.fromTo(
            '.speakers',
            bottomAnimationTime,
            { opacity: 0, y: bottomAnimationOffset },
            { opacity: 1, y: 0 },
          ),
        )
        .addTo(bottomController);

      const spekheadScene = new ScrollMagic.Scene({
        triggerElement: '.speakers .block-heading',
      })
        .setTween(
          TweenMax.fromTo(
            '.speakers .block-heading',
            bottomAnimationTime,
            { opacity: 0, y: bottomAnimationOffset },
            { opacity: 1, y: 0 },
          ),
        )
        .addTo(bottomController);
      const pers1Scene = new ScrollMagic.Scene({
        triggerElement: '.person-1',
      })
        .setTween(
          TweenMax.fromTo(
            '.person-1',
            bottomAnimationTime,
            { opacity: 0, y: bottomAnimationOffset },
            { opacity: 1, y: 0 },
          ),
        )
        .addTo(bottomController);
      const pers2Scene = new ScrollMagic.Scene({
        triggerElement: '.person-2',
      })
        .setTween(
          TweenMax.fromTo(
            '.person-2',
            bottomAnimationTime,
            { opacity: 0, y: bottomAnimationOffset },
            { opacity: 1, y: 0 },
          ),
        )
        .addTo(bottomController);
      const pers3Scene = new ScrollMagic.Scene({
        triggerElement: '.person-3',
      })
        .setTween(
          TweenMax.fromTo(
            '.person-3',
            bottomAnimationTime,
            { opacity: 0, y: bottomAnimationOffset },
            { opacity: 1, y: 0 },
          ),
        )
        .addTo(bottomController);
      const credScene = new ScrollMagic.Scene({
        triggerElement: '.credits',
      })
        .setTween(
          TweenMax.fromTo(
            '.credits',
            bottomAnimationTime,
            { opacity: 0, y: bottomAnimationOffset },
            { opacity: 1, y: 0 },
          ),
        )
        .addTo(bottomController);
      const footScene = new ScrollMagic.Scene({
        triggerElement: 'footer',
        triggerHook: 1,
      })
        .setTween(
          TweenMax.fromTo(
            'footer',
            bottomAnimationTime,
            { opacity: 0, y: bottomAnimationOffset },
            { opacity: 1, y: 0 },
          ),
        )
        .addTo(bottomController);
      let scene;
      let images = document.querySelectorAll('.cartoon.desktop img');

      images.forEach(el => {
        el.src = el.dataset.src;
      });
      const vue = this;
      const imgLoad = imagesLoaded('body', function() {
        console.log('images loaded');

        vue.imagesLoaded = true;
        vue.currentSound = vue.sounds.gorod.play();
        vue.sounds.gorod.fade(0.0, 1.0, 5000);

        const tbscene = new TimelineMax();
        tbscene
          .to('.loading', 1, {
            opacity: 0,
          })
          .to(
            '.ideas',
            1,
            {
              opacity: 1,
            },
            '-=1',
          )
          .to(
            '.scene-img-hero',
            1,
            {
              opacity: 1,
            },
            '-=1',
          )
          .to('.scene-img-background', 1, {
            opacity: 1,
          });
        const scene = new TimelineMax();
        scene
          .to('.scene-img-background', 2, { top: '50%', transform: 'translateY(-1100px)' })
          .to('.scene-img-hero', 2, { top: '50%', transform: 'translateY(-300px) scale(1)' }, '-=2')
          .to(
            '.scene-img-bridge',
            2,
            { top: '50%', transform: 'translateY(-400px) scale(1)' },
            '-=2',
          )
          .to(
            '.scene-img-house-1',
            2,
            { top: '50%', transform: 'translateY(-650px) scale(1.1)' },
            '-=2',
          )
          .to('.scene-img-house-2', 2, { top: '50%', transform: 'translateY(-900px)' }, '-=2')
          .to('.scene-img-house-3', 2, { top: '50%', transform: 'translateY(-400px)' }, '-=2')
          .to(
            '.scene-img-lighters',
            2,
            { top: '50%', transform: 'translateY(-400px) scale(1.15)' },
            '-=2',
          )
          .to(
            '.scene-img-moscow-city',
            2,
            { top: '50%', transform: 'translateY(-950px)', opacity: 1 },
            '-=2',
          )
          .to('.scene-img-house-1', 1, { opacity: 1 }, '-=1.5')
          .to('.scene-img-house-2', 1, { opacity: 1 }, '-=2')
          .to(
            '.bubble-1',
            1,
            {
              top: '0%',
              y: '-100%',
              ease: SlowMo.ease.config(0.1, 0.7, false),
            },
            '-=2',
          )
          .to('.scene-img-bridge', 1, { opacity: 1 }, '-=1.5')
          .to(
            '.bubble-2',
            1,
            {
              top: '0%',
              y: '-100%',
              ease: SlowMo.ease.config(0.1, 0.7, false),
            },
            '-=1',
          )
          .to('.bubble-3', 1, {
            top: '0%',
            y: '-100%',
            ease: SlowMo.ease.config(0.1, 0.7, false),
          })
          .to('.scene-img-lighters', 1, { opacity: 1 }, '-=1.5')
          .to('.scene-img-house-3', 1, { opacity: 1 }, '-=1.5')
          .to('.city', 0.3, {
            opacity: 0.3,
            onComplete: function() {
              vue.sounds.gorod.fade(1.0, 0.0, 1000);
              vue.sounds.gorod.once('fade', () => {
                vue.sounds.gorod.stop();
                vue.sounds.voprosi.play();
                vue.sounds.voprosi.fade(0.0, 1.0, 1000);
              });
            },
            onReverseComplete: function() {
              vue.sounds.voprosi.fade(1.0, 0.0, 1000);
              vue.sounds.voprosi.once('fade', () => {
                vue.sounds.voprosi.stop();
                vue.sounds.gorod.play();
                vue.sounds.gorod.fade(0.0, 1.0, 1000);
              });
            },
          })
          .to('.quests-1[data-size="1"]', 3, {
            y: '-100%',
            x: '-50%',
          })
          .to(
            '.quests-1[data-size="2"]',
            3,
            {
              y: '-120%',
              x: '-50%',
            },
            '-=3',
          )
          .to(
            '.quests-1[data-size="3"]',
            3,
            {
              y: '-150%',
              x: '-50%',
              onComplete: function() {
                vue.sounds.voprosi.fade(1.0, 0.0, 1000);
                vue.sounds.voprosi.once('fade', () => {
                  vue.sounds.voprosi.stop();
                  vue.sounds.nagnetenie.play();
                  vue.sounds.nagnetenie.fade(0.0, 1.0, 1000);
                });
              },
              onReverseComplete: function() {
                vue.sounds.nagnetenie.fade(1.0, 0.0, 1000);
                vue.sounds.nagnetenie.once('fade', () => {
                  vue.sounds.nagnetenie.stop();
                  vue.sounds.voprosi.play();
                  vue.sounds.voprosi.fade(0.0, 1.0, 1000);
                });
              },
            },
            '-=3',
          )
          .to(
            '.quests-1[data-size="4"]',
            3,
            {
              y: '-200%',
              x: '-50%',
            },
            '-=3',
          )
          .to(
            '.quests-1[data-size="5"]',
            3,
            {
              y: '-250%',
              x: '-50%',
            },
            '-=3',
          )
          .to(
            '.quests-1[data-size="6"]',
            3,
            {
              y: '-300%',
              x: '-50%',
            },
            '-=3',
          )
          .to(
            '.bubble-4',
            1,
            {
              top: '0%',
              y: '-100%',
              ease: SlowMo.ease.config(0.1, 0.7, false),
            },
            '-=3',
          )
          .to(
            '.scene-img-hero',
            3,
            {
              top: '50%',
              transform: 'translateY(0px) scale(0.5)',
            },
            '-=2',
          )
          .to(
            '.quests-2[data-size="1"]',
            3,
            {
              y: '-100%',
              x: '-50%',
              onComplete: function() {
                vue.sounds.nagnetenie.fade(1.0, 0.0, 1000);
                vue.sounds.nagnetenie.once('fade', () => {
                  vue.sounds.nagnetenie.stop();
                  vue.sounds.lampa.play();
                  vue.sounds.lampa.fade(0.0, 1.0, 1000);
                });
              },
              onReverseComplete: function() {
                vue.sounds.lampa.fade(1.0, 0.0, 1000);
                vue.sounds.lampa.once('fade', () => {
                  vue.sounds.lampa.stop();
                  vue.sounds.nagnetenie.play();
                  vue.sounds.nagnetenie.fade(0.0, 1.0, 1000);
                });
              },
            },
            '-=2',
          )

          .to(
            '.quests-2[data-size="2"]',
            3,
            {
              y: '-120%',
              x: '-50%',
            },
            '-=3',
          )
          .to(
            '.quests-2[data-size="3"]',
            3,
            {
              y: '-140%',
              x: '-50%',
            },
            '-=3',
          )
          .to(
            '.quests-2[data-size="4"]',
            3,
            {
              y: '-160%',
              x: '-50%',
            },
            '-=3',
          )
          .to(
            '.quests-2[data-size="5"]',
            3,
            {
              y: '-180%',
              x: '-50%',
            },
            '-=3',
          )
          .to(
            '.quests-2[data-size="6"]',
            3,
            {
              y: '-200%',
              x: '-50%',
            },
            '-=3',
          )
          .to(
            '.bubble-5',
            1,
            {
              top: '0%',
              y: '-100%',
              ease: SlowMo.ease.config(0.1, 0.7, false),
            },
            '-=3',
          )

          .to(
            '.bubble-6',
            1,
            {
              top: '0%',
              y: '-100%',
              ease: SlowMo.ease.config(0.1, 0.7, false),
            },
            '-=2',
          )
          .to(
            '.quests-3[data-size="1"]',
            3,
            {
              y: '-100%',
              x: '-50%',
            },
            '-=2',
          )
          .to(
            '.quests-3[data-size="2"]',
            3,
            {
              y: '-120%',
              x: '-50%',
            },
            '-=3',
          )
          .to(
            '.quests-3[data-size="3"]',
            3,
            {
              y: '-140%',
              x: '-50%',
            },
            '-=3',
          )
          .to(
            '.quests-3[data-size="4"]',
            3,
            {
              y: '-160%',
              x: '-50%',
            },
            '-=3',
          )
          .to(
            '.quests-3[data-size="5"]',
            3,
            {
              y: '-180%',
              x: '-50%',
            },
            '-=3',
          )
          .to(
            '.quests-3[data-size="6"]',
            3,
            {
              y: '-200%',
              x: '-50%',
            },
            '-=3',
          )
          .to(
            '.curtain',
            1,
            {
              y: '-50%',
            },
            '-=2',
          )
          .to(
            '.bubble-7',
            1,
            {
              top: '0%',
              y: '-100%',
              ease: SlowMo.ease.config(0.1, 0.7, false),
            },
            '-=2',
          )
          .to(
            '.scene-2',
            0,
            {
              opacity: 1,
            },
            '-=1',
          )
          .to(
            '.quests',
            0,
            {
              visibility: 'hidden',
            },
            '-=1',
          )
          .to(
            '.light',
            1,
            {
              opacity: 1,
            },
            '-=1',
          )
          .to(
            '.hero-think-1',
            0.5,
            {
              opacity: 1,
            },
            '-=1',
          )
          .to('.hero-think-1', 0.5, {
            opacity: 0,
          })
          .to(
            '.hero-think-2',
            0.5,
            {
              opacity: 1,
            },
            '-=0.25',
          )
          .to('.hero-think-2', 0.5, {
            opacity: 0,
          })
          .to(
            '.hero-think-3',
            0.5,
            {
              opacity: 1,
            },
            '-=0.25',
          )
          .to(
            '.bubble-8',
            1,
            {
              top: '0%',
              y: '-100%',
              ease: SlowMo.ease.config(0.1, 0.7, false),
              onComplete: function() {
                vue.sounds.lampa.fade(1.0, 0.0, 1000);
                vue.sounds.lampa.once('fade', () => {
                  vue.sounds.lampa.stop();
                  vue.sounds.tishina.play();
                  vue.sounds.tishina.fade(0.0, 1.0, 1000);
                });
              },
              onReverseComplete: function() {
                vue.sounds.tishina.fade(1.0, 0.0, 1000);
                vue.sounds.tishina.once('fade', () => {
                  vue.sounds.tishina.stop();
                  vue.sounds.lampa.play();
                  vue.sounds.lampa.fade(0.0, 1.0, 1000);
                });
              },
            },
            '-=0.5',
          )
          .to('.img-bubble', 0.5, {
            opacity: 1,
          })
          .to('.hero-2', 0.5, {
            opacity: 1,
          })
          .to(
            '.hero-2',
            0.5,
            {
              opacity: 0,
            },
            '+=1',
          )
          .to(
            '.heroes',
            0.5,
            {
              opacity: 1,
            },
            '-=1',
          )
          .to(
            '.bubble-9',
            1,
            {
              top: '0%',
              y: '-100%',
              ease: SlowMo.ease.config(0.1, 0.7, false),
            },
            '-=0.5',
          )
          .to('.hill-1', 1, {
            opacity: 1,
          })
          .to(
            '.bubble-10',
            1,
            {
              top: '0%',
              y: '-100%',
              ease: SlowMo.ease.config(0.1, 0.7, false),
              onComplete: function() {
                vue.sounds.tishina.fade(1.0, 0.0, 1000);
                vue.sounds.tishina.once('fade', () => {
                  vue.sounds.tishina.stop();
                  vue.sounds.luna.play();
                  vue.sounds.luna.fade(0.0, 1.0, 500);
                });
              },
              onReverseComplete: function() {
                vue.sounds.luna.fade(1.0, 0.0, 1000);
                vue.sounds.luna.once('fade', () => {
                  vue.sounds.luna.stop();
                  vue.sounds.tishina.play();
                  vue.sounds.tishina.fade(0.0, 1.0, 1000);
                });
              },
            },
            '-=0.5',
          )
          .to('.img-bubble', 0.5, {
            transform: 'scale(10)',
          })
          .to(
            '.heroes',
            0.5,
            {
              y: '1240px',
              x: '200px',
              scale: 4,
            },
            '-=0.5',
          )
          .to(
            '.hill-1',
            0.5,
            {
              transform: 'translateY(1240px) translateX(200px) scale(4)',
            },
            '-=0.5',
          )
          .to('.heroes', 0, {
            y: '1640px',
            x: '200px',
            scale: 4,
          })
          .to('.hill-1', 0, {
            transform: 'translateY(1640px) translateX(200px) scale(4)',
          })
          .to('.heroes', 7, {
            y: '150px',
            x: '200px',
            scale: 4,
          })
          .to(
            '.hill-1',
            7,
            {
              transform: 'translateY(250px) translateX(200px) scale(4)',
            },
            '-=7',
          )

          .to(
            '.img-bubble',
            0,
            {
              opacity: 0,
            },
            '-=7',
          )
          .to(
            '.light',
            0,
            {
              opacity: 0,
            },
            '-=7',
          )
          .to(
            '.hero-think-3',
            0,
            {
              opacity: 0,
            },
            '-=7',
          )
          .to(
            '.curtain',
            0,
            {
              visibility: 'hidden',
            },
            '-=7',
          )
          .to(
            '.scene-2',
            0,
            {
              backgroundColor: 'white',
            },
            '-=7',
          )
          .to(
            '.mountain',
            1,
            {
              opacity: 1,
            },
            '-=7',
          )
          .to(
            '.chairs',
            1,
            {
              opacity: 1,
            },
            '-=7',
          )
          .to(
            '.pillows',
            1,
            {
              opacity: 1,
            },
            '-=7',
          )
          .to(
            '.tree',
            1,
            {
              opacity: 1,
            },
            '-=7',
          )
          .to(
            '.people',
            1,
            {
              opacity: 1,
            },
            '-=7',
          )
          .to(
            '.hill-2',
            1,
            {
              opacity: 1,
            },
            '-=7',
          )
          .to(
            '.hill-3',
            1,
            {
              opacity: 1,
            },
            '-=7',
          )
          .to(
            '.lamp',
            1,
            {
              opacity: 1,
            },
            '-=7',
          )
          .to(
            '.expoint',
            1,
            {
              opacity: 1,
            },
            '-=7',
          )
          // move up
          .to(
            '.mountain',
            7,
            {
              y: '-1000px',
            },
            '-=7',
          )
          .to(
            '.expoint',
            7,
            {
              y: '-1020px',
            },
            '-=7',
          )
          .to(
            '.chairs',
            7,
            {
              y: '-1300px',
            },
            '-=7',
          )
          .to(
            '.pillows',
            7,
            {
              y: '-800px',
            },
            '-=7',
          )
          .to(
            '.tree',
            7,
            {
              y: '-1100px',
            },
            '-=7',
          )
          .to(
            '.people',
            7,
            {
              y: '-1100px',
            },
            '-=7',
          )
          .to(
            '.hill-2',
            7,
            {
              y: '-1250px',
            },
            '-=7',
          )
          .to(
            '.hill-3',
            7,
            {
              y: '-1100px',
            },
            '-=7',
          )
          .to(
            '.lamp',
            7,
            {
              y: '-2300px',
            },
            '-=7',
          )

          .to(
            '.bubble-11',
            1,
            {
              top: '0%',
              y: '-100%',
              ease: SlowMo.ease.config(0.1, 0.7, false),
            },
            '-=7',
          )

          .to(
            '.bubble-12',
            1,
            {
              top: '0%',
              y: '-100%',
              ease: SlowMo.ease.config(0.1, 0.7, false),
            },
            '-=7',
          )

          .to(
            '.bubble-13',
            1,
            {
              top: '0%',
              y: '-100%',
              ease: SlowMo.ease.config(0.1, 0.7, false),
            },
            '-=6',
          )

          .to(
            '.bubble-14',
            1,
            {
              top: '0%',
              y: '-100%',
              ease: SlowMo.ease.config(0.1, 0.7, false),
            },
            '-=5',
          )

          .to(
            '.bubble-15',
            1,
            {
              top: '0%',
              y: '-100%',
              ease: SlowMo.ease.config(0.1, 0.7, false),
            },
            '-=4',
          )

          .to(
            '.bubble-16',
            1,
            {
              top: '0%',
              y: '-100%',
              ease: SlowMo.ease.config(0.1, 0.7, false),
            },
            '-=3',
          )

          .to(
            '.bubble-17',
            1,
            {
              top: '0%',
              y: '-100%',
              ease: SlowMo.ease.config(0.1, 0.7, false),
            },
            '-=2',
          )

          .to(
            '.bubble-18',
            2,
            {
              top: '0%',
              y: '-100%',
              ease: SlowMo.ease.config(0.1, 0.7, false),

              onComplete: function() {
                vue.scrollToForm();
                vue.sounds.gorod.stop();
                vue.sounds.voprosi.stop();
                vue.sounds.nagnetenie.stop();
                vue.sounds.lampa.stop();
                vue.sounds.tishina.stop();
              },
            },
            '-=1',
          );

        const controller2 = new ScrollMagic.Controller();
        // build scene
        const pinscene = new ScrollMagic.Scene({
          triggerElement: '.cartoon.desktop',
          triggerHook: 0,
          duration: '9000%',
        })
          .setPin('.cartoon.desktop', { spacerClass: 'cartoonspacer', pushFollowers: true })
          .on('add', function() {
            const scrollscene = new ScrollMagic.Scene({
              triggerElement: '.cartoonspacer',
              triggerHook: 0,
              duration: '9000%',
            })
              .setTween(scene)
              .addTo(controller2);
          })
          .addTo(controller2);
      });

      imgLoad.on('progress', (instance, image) => {
        this.progressNumber = Math.floor(100 * instance.progressedCount / instance.images.length);
      });
    } else {
      let scene;
      let images = document.querySelectorAll('.cartoon.mobile img');

      images.forEach(el => {
        el.src = el.dataset.src;
      });
      const vue = this;
      const imgLoad = imagesLoaded('body', function() {
        console.log('images loaded');
        vue.imagesLoaded = true;
        const tbscene = new TimelineMax();
        tbscene.to('.mobile-scene-1', 1, {
          opacity: 1,
        });
        const scene = new TimelineMax();
        scene
          .to('.mobile-scene-1', 3, {
            y: '-50%',
          })
          .to(
            '.bubble-1',
            1,
            {
              top: '0%',
              y: '-100%',
              ease: SlowMo.ease.config(0.1, 0.7, false),
            },
            '-=3',
          )
          .to(
            '.bubble-2',
            1,
            {
              top: '0%',
              y: '-100%',
              ease: SlowMo.ease.config(0.1, 0.7, false),
            },
            '-=2',
          )
          .to(
            '.bubble-3',
            1,
            {
              top: '0%',
              y: '-100%',
              ease: SlowMo.ease.config(0.1, 0.7, false),
            },
            '-=1',
          )
          .to('.mobile-curtain', 4, {
            y: '-50%',
          })
          .to(
            '.bubble-4',
            1,
            {
              top: '0%',
              y: '-100%',
              ease: SlowMo.ease.config(0.1, 0.7, false),
            },
            '-=4',
          )
          .to(
            '.bubble-5',
            1,
            {
              top: '0%',
              y: '-100%',
              ease: SlowMo.ease.config(0.1, 0.7, false),
            },
            '-=3',
          )
          .to(
            '.bubble-6',
            1,
            {
              top: '0%',
              y: '-100%',
              ease: SlowMo.ease.config(0.1, 0.7, false),
            },
            '-=2',
          )
          .to(
            '.bubble-7',
            1,
            {
              top: '0%',
              y: '-100%',
              ease: SlowMo.ease.config(0.1, 0.7, false),
            },
            '-=1',
          )
          .to(
            '.scene-2',
            0,
            {
              opacity: 1,
            },
            '-=1',
          )
          .to(
            '.light',
            1,
            {
              opacity: 1,
            },
            '-=1',
          )
          .to(
            '.hero-think-1',
            0.5,
            {
              opacity: 1,
            },
            '-=1',
          )
          .to('.hero-think-1', 0.5, {
            opacity: 0,
          })
          .to(
            '.hero-think-2',
            0.5,
            {
              opacity: 1,
            },
            '-=0.25',
          )
          .to('.hero-think-2', 0.5, {
            opacity: 0,
          })
          .to(
            '.hero-think-3',
            0.5,
            {
              opacity: 1,
            },
            '-=0.25',
          )
          .to(
            '.bubble-8',
            1,
            {
              top: '0%',
              y: '-100%',
              ease: SlowMo.ease.config(0.1, 0.7, false),
            },
            '-=0.5',
          )
          .to('.img-bubble', 0.5, {
            opacity: 1,
          })
          .to('.hero-2', 0.5, {
            opacity: 1,
          })
          .to(
            '.hero-2',
            0.5,
            {
              opacity: 0,
            },
            '+=1',
          )
          .to(
            '.heroes',
            0.5,
            {
              opacity: 1,
            },
            '-=1',
          )
          .to(
            '.bubble-9',
            1,
            {
              top: '0%',
              y: '-100%',
              ease: SlowMo.ease.config(0.1, 0.7, false),
            },
            '-=0.5',
          )
          .to('.hill-1', 1, {
            opacity: 1,
          })
          .to(
            '.bubble-10',
            1,
            {
              top: '0%',
              y: '-100%',
              ease: SlowMo.ease.config(0.1, 0.7, false),
            },
            '-=0.5',
          )
          .to('.img-bubble', 1.5, {
            transform: 'scale(10)',
          })
          .to(
            '.heroes',
            1.5,
            {
              y: '1240px',
              x: '200px',
              scale: 4,
            },
            '-=1.5',
          )
          .to(
            '.hill-1',
            1.5,
            {
              transform: 'translateY(1240px) translateX(200px) scale(4)',
            },
            '-=1.5',
          )
          .to('.heroes', 0, {
            y: '1940px',
            x: '200px',
            scale: 4,
          })
          .to('.hill-1', 0, {
            transform: 'translateY(1940px) translateX(200px) scale(4)',
          })
          .to('.heroes', 7, {
            y: '540px',
            x: '200px',
            scale: 4,
          })
          .to(
            '.hill-1',
            7,
            {
              transform: 'translateY(540px) translateX(200px) scale(4)',
            },
            '-=7',
          )

          .to(
            '.img-bubble',
            0,
            {
              opacity: 0,
            },
            '-=7',
          )
          .to(
            '.light',
            0,
            {
              opacity: 0,
            },
            '-=7',
          )
          .to(
            '.hero-think-3',
            0,
            {
              opacity: 0,
            },
            '-=7',
          )
          .to(
            '.scene-2',
            0,
            {
              backgroundColor: 'white',
            },
            '-=7',
          )
          .to(
            '.mobile-scene-3',
            1,
            {
              opacity: 1,
            },
            '-=7',
          )
          .to(
            '.mobile-scene-3',
            8,
            {
              y: '0%',
            },
            '-=7',
          )
          .to(
            '.bubble-11',
            1,
            {
              top: '0%',
              y: '-100%',
              ease: SlowMo.ease.config(0.1, 0.7, false),
            },
            '-=7',
          )

          .to(
            '.bubble-12',
            1,
            {
              top: '0%',
              y: '-100%',
              ease: SlowMo.ease.config(0.1, 0.7, false),
            },
            '-=6',
          )

          .to(
            '.bubble-13',
            1,
            {
              top: '0%',
              y: '-100%',
              ease: SlowMo.ease.config(0.1, 0.7, false),
            },
            '-=5',
          )

          .to(
            '.bubble-14',
            1,
            {
              top: '0%',
              y: '-100%',
              ease: SlowMo.ease.config(0.1, 0.7, false),
            },
            '-=4',
          )

          .to(
            '.bubble-15',
            1,
            {
              top: '0%',
              y: '-100%',
              ease: SlowMo.ease.config(0.1, 0.7, false),
            },
            '-=3',
          )

          .to(
            '.bubble-16',
            1,
            {
              top: '0%',
              y: '-100%',
              ease: SlowMo.ease.config(0.1, 0.7, false),
            },
            '-=2',
          )

          .to(
            '.bubble-17',
            1,
            {
              top: '0%',
              y: '-100%',
              ease: SlowMo.ease.config(0.1, 0.7, false),
            },
            '-=1',
          )

          .to('.bubble-18', 2, {
            top: '0%',
            y: '-100%',
            ease: SlowMo.ease.config(0.1, 0.7, false),

            onComplete: function() {
              // vue.scrollToForm();
            },
          });
        //  const mobilecontroller = new ScrollMagic.Controller({ container: '.cartoon.mobile' });
        const mobilecontroller = new ScrollMagic.Controller();
        // build scene
        const pinscene = new ScrollMagic.Scene({
          triggerElement: '.cartoon.mobile',
          triggerHook: 0,
          duration: '8000%',
        })
          .setPin('.cartoon.mobile', { spacerClass: 'cartoonspacermobile', pushFollowers: true })
          .on('add', function() {
            const scrollscene = new ScrollMagic.Scene({
              triggerElement: '.cartoonspacermobile',
              triggerHook: 0,
              duration: '8000%',
            })
              .setTween(scene)
              .addTo(mobilecontroller);

            // const myScroll = new IScroll('.cartoon.mobile', {
            //   // don't scroll horizontal
            //   scrollX: false,
            //   // but do scroll vertical
            //   scrollY: true,
            //   // show scrollbars
            //   scrollbars: true,
            //   // deactivating -webkit-transform because pin wouldn't work because of a webkit bug: https://code.google.com/p/chromium/issues/detail?id=20574
            //   // if you dont use pinning, keep "useTransform" set to true, as it is far better in terms of performance.
            //   useTransform: false,
            //   // deativate css-transition to force requestAnimationFrame (implicit with probeType 3)
            //   useTransition: false,
            //   // set to highest probing level to get scroll events even during momentum and bounce
            //   // requires inclusion of iscroll-probe.js
            //   probeType: 3,
            //   // pass through clicks inside scroll container
            //   click: true,
            // });

            // // overwrite scroll position calculation to use child's offset instead of container's scrollTop();
            // mobilecontroller.scrollPos(function() {
            //   return -myScroll.y;
            // });
            // // thanks to iScroll 5 we now have a real onScroll event (with some performance drawbacks)
            // myScroll.on('scroll', function() {
            //   mobilecontroller.update();
            // });
          })
          .addTo(mobilecontroller);
      });

      imgLoad.on('progress', (instance, image) => {        
        this.progressNumber = Math.floor(100 * instance.progressedCount / instance.images.length);
      });
    }
  },
};
</script>

<style lang="scss">
.mute {
  position: fixed;
  bottom: 20px;
  left: 20px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  padding: 10px;
  width: 60px;
  height: 60px;
  cursor: pointer;
  z-index: 9999;
  img {
    width: 100%;
  }
  @at-root .app.mobile .mute {
    display: none;
  }
}
.app {
  overflow: hidden;
  // &.mobile {
  //   height: 100%;
  //   overflow-y: scroll;
  //   overflow-x: hidden;
  //   width: 100%;
  // }
}
.form,
.schedule,
.speakers,
footer,
.speakers .block-heading,
.person,
.credits {
  position: relative;
  z-index: 3;
  opacity: 0;
}
.mobile {
  .form,
  .schedule,
  .speakers,
  footer,
  .speakers .block-heading,
  .person,
  .credits {
    opacity: 1;
  }
}
</style>