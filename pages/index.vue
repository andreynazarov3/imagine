<template lang="html">
<div ref="app" class="app" id="app" :class="{mobile: isMobile}">      
    <Logo :data="header" :progressNumber='progressNumber'  @scrollToForm='scrollToForm' />
    <main v-show="imagesLoaded || isMobile">
      <Cartoon :isMobile="isMobile" v-show="!isMobile" />
      <CartoonMobile :isMobile="isMobile" v-show="isMobile" />
      <Form @sendmail="showPopup = true" />
      <Schedule :data="schedule" @scrollToForm='scrollToForm' />
      <Speakers />
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
  asyncData({ env }) {
    return Promise.all([      
      client.getEntries({
        content_type: env.CTF_SCHEDULE_TYPE_ID,
        order: 'sys.createdAt',
      }),
    ])
      .then(([{items}]) => {       
        return {
          schedule: items
        };
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
      progressNumber: 0,
      showPopup: false,
      isMobile: false,
      imagesLoaded: false,
      header: '{}',
      schedule: null
    };
  },
  methods: {
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
        // const loading = document.querySelector('.loading');
        // const main = document.querySelector('main');
        // main.style.display = 'block';
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
          .to('.scene-img-hero', 3, { top: '50%', transform: 'translateY(0px) scale(0.5)' }, '-=2')
          .to(
            '.quests-2[data-size="1"]',
            3,
            {
              y: '-100%',
              x: '-50%',
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
        console.log(this.progressNumber);
        this.progressNumber = Math.floor(100 * instance.progressedCount / instance.images.length);
      });
    }
  },
};
</script>

<style lang="scss">
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