<template lang="html">
<div class="app">  
    <Logo :progressNumber='progressNumber'  @scrollToForm='scrollToForm' />
    <main>
      <Cartoon />
      <Form @sendmail="showPopup = true" />
      <Schedule @scrollToForm='scrollToForm' />
      <Speakers />
      <myFooter />
    </main>
<Popup v-if="showPopup" @close="showPopup = false" />
</div>
</template>

<script>
const imagesLoaded = require('imagesloaded');
const smoothScroll = require('~/assets/js/smoothscroll.js');
import Cartoon from '~/components/Cartoon';
import Logo from '~/components/Logo';
import Form from '~/components/Form';
import Speakers from '~/components/Speakers';
import Schedule from '~/components/Schedule';
import myFooter from '~/components/myFooter';
import Popup from '~/components/Popup';
export default {
  components: {
    Cartoon,
    Logo,
    Form,
    Speakers,
    Schedule,
    myFooter,
    Popup,
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
    };
  },
  methods: {
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
      TweenMax.to(window, 1, { scrollTo: getOffsetTop(document.querySelector('.form')) });
    },
  },
  mounted: function() {
    let scene;
    let images = document.querySelectorAll('.cartoon img');

    images.forEach(el => {
      el.src = el.dataset.src;
    });
    const vue = this;
    const imgLoad = imagesLoaded('body', function() {
      console.log('images loaded');
      const loading = document.querySelector('.loading');
      const main = document.querySelector('main');
      main.style.display = 'block';
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
        .to('.scene-img-bridge', 2, { top: '50%', transform: 'translateY(-400px) scale(1)' }, '-=2')
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
        .to('.scene-2', 0, {
          opacity: 1,
        },'-=1')
        .to('.light', 1, {
          opacity: 1,
        },'-=1')
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
        .to('.img-bubble', 2, {
          transform: 'scale(10)',
        })
        .to(
          '.heroes',
          2,
          {
            y: '1240px',
            x: '200px',
            scale: 4
          },
          '-=2',
        )        
        .to(
          '.hill-1',
          2,
          {
            transform: 'translateY(1240px) translateX(200px) scale(4)'
          },
          '-=2',
        )
        .to(
          '.heroes',
          0,
          {
             y: '1940px',
            x: '200px',
            scale: 4
          },
        )
        .to(
          '.hill-1',
          0,
          {
            transform: 'translateY(1940px) translateX(200px) scale(4)'
          }
        )
        .to(
          '.heroes',
          7,
          {
             y: '540px',
            x: '200px',
            scale: 4
          },
        )
        .to(
          '.hill-1',
          7,
          {
            transform: 'translateY(540px) translateX(200px) scale(4)'
          },
          '-=7',)
        
        .to('.img-bubble', 0, {
          opacity: 0,
        },
          '-=7',)
        .to('.light', 0, {
          opacity: 0,
        },
          '-=7',)
        .to('.hero-think-3', 0, {
          opacity: 0,
        },
          '-=7',)
        .to('.scene-2', 0, {
          backgroundColor: 'white',
        },
          '-=7',)
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
            y: '-700px',
          },
          '-=7',
        )
        .to(
          '.expoint',
          7,
          {
            y: '-720px',
          },
          '-=7',
        )
        .to(
          '.chairs',
          7,
          {
            y: '-1000px',
          },
          '-=7',
        )
        .to(
          '.pillows',
          7,
          {
            y: '-500px',
          },
          '-=7',
        )
        .to(
          '.tree',
          7,
          {
            y: '-800px',
          },
          '-=7',
        )
        .to(
          '.people',
          7,
          {
            y: '-800px',
          },
          '-=7',
        )
        .to(
          '.hill-2',
          7,
          {
            y: '-950px',
          },
          '-=7',
        )
        .to(
          '.hill-3',
          7,
          {
            y: '-800px',
          },
          '-=7',
        )
        .to(
          '.lamp',
          7,
          {
            y: '-2000px',
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
          1,
          {
            top: '50%',
            y: '-50%',
            ease: SlowMo.ease.config(0.1, 0.7, false),
          },
          '-=1',
        );

      const controller2 = new ScrollMagic.Controller();
      // build scene
      const pinscene = new ScrollMagic.Scene({
        triggerElement: '.cartoon',
        triggerHook: 0,
        duration: '9000%',
      })
        .setPin('.cartoon', { spacerClass: 'cartoonspacer', pushFollowers: true })
        .on('add', function() {
          const scrollscene = new ScrollMagic.Scene({
            triggerElement: '.cartoonspacer',
            triggerHook: 0,
            duration: '9000%',
          })
            .setTween(scene)
            .addTo(controller2);

          const cartoon = document.querySelector('.cartoon');
          const isMacLike = navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i) ? true : false;
          if (!isMacLike) {
            window.smoothScroller = new smoothScroll(document, 200, 12);
          }
        })
        .addTo(controller2);
    });

    imgLoad.on('progress', (instance, image) => {
      this.progressNumber = Math.floor(100 * instance.progressedCount / instance.images.length);
    });
  },
};
</script>

<style lang="scss">
.app {
  overflow: hidden;
}
main {
  display: none;
}
</style>