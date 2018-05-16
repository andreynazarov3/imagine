<template lang="html">
<div class="app">  
    <Logo :progressNumber='progressNumber'  @scrollToForm='scrollToForm' />
    <main>
    <Cartoon />
    <div class="panel main">

        <Form @sendmail="showPopup = true" />
        <Schedule @scrollToForm='scrollToForm' />
        <Speakers />
        <myFooter />
    </div>
</main>
<Popup v-if="showPopup" @close="showPopup = false" />
</div>
</template>

<script>
const imagesLoaded = require('imagesloaded');
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
    scrollToForm: function() {},
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
        );
      const scene = new TimelineMax();
      scene
        .add('start')
        .to('.scene-img-hero', 1, {
          opacity: 1,
        })
        .to(
          '.scene-img-background',
          1,
          {
            opacity: 1,
          },
          '-=0.5',
        )
        .to('.scene-img-bridge', 1, {
          opacity: 1,
        })
        .to('.bubble-1', 1, {
          opacity: 1,
        })
        .add('bubble-1')
        .to('.bubble-1', 1, {
          opacity: 0,
          delay: 5,
        })
        .to('.scene-img-moscow-city', 1, {
          opacity: 1,
        })
        .to('.scene-img-lighters', 1, {
          opacity: 1,
        })
        .to('.bubble-2', 1, {
          opacity: 1,
        })
        .add('bubble-2')
        .to('.bubble-2', 1, {
          opacity: 0,
          delay: 5,
        })
        .to('.scene-img-house-1', 1, {
          opacity: 1,
        })
        .to('.scene-img-house-2', 1, {
          opacity: 1,
        })
        .to('.scene-img-house-3', 1, {
          opacity: 1,
        })
        .to('.bubble-3', 1, {
          opacity: 1,
        })
        .add('bubble-3')
        .to('.bubble-3', 1, {
          opacity: 0,
          delay: 5,
        })
        .to('.city', 1, {
          opacity: 0.5,
        })
        .to('.quests-1', 2, {
          transform: 'translateY(0)',
        })
        .to(
          '.quests-2',
          1.7,
          {
            transform: 'translateY(0)',
          },
          '-=2',
        )
        .to(
          '.quests-3',
          1.5,
          {
            transform: 'translateY(0)',
          },
          '-=2',
        )
        .to(
          '.quests-4',
          1.2,
          {
            transform: 'translateY(0)',
          },
          '-=2',
        )
        .to(
          '.quests-5',
          1.1,
          {
            transform: 'translateY(0)',
          },
          '-=2',
        )
        .to(
          '.quests-6',
          1,
          {
            transform: 'translateY(0)',
          },
          '-=2',
        )
        .to('.bubble-4', 1, {
          opacity: 1,
        })
        .add('bubble-4')
        .to('.bubble-4', 1, {
          opacity: 0,
          delay: 5,
        });

      scene.to('.scene-img-hero', 1, {
        transform: 'scale(0.9)',
      });

      document.querySelectorAll('.quests-more-1 .quest').forEach(function(item) {
        let delay = Math.random();
        delay = 0.3 + Math.round(delay * 100) / 100;
        scene.to(
          item,
          delay,
          {
            transform: 'translateX(0) translateY(0)',
          },
          '-=1',
        );
      });

      scene
        .to('.bubble-5', 1, {
          opacity: 1,
        })
        .add('bubble-5')
        .to('.bubble-5', 1, {
          opacity: 0,
          delay: 5,
        })
        .to('.city', 1, {
          opacity: 0,
        });

      scene.to('.scene-img-hero', 1, {
        transform: 'scale(0.7)',
      });
      document.querySelectorAll('.quests-more-2 .quest').forEach(function(item) {
        let delay = Math.random();
        delay = 0.3 + Math.round(delay * 100) / 100;
        scene.to(
          item,
          delay,
          {
            transform: 'translateX(0) translateY(0)',
          },
          '-=1',
        );
      });
      scene
        .to('.bubble-6', 1, {
          opacity: 1,
        })
        .add('bubble-6')
        .to('.bubble-6', 1, {
          opacity: 0,
          delay: 5,
        });

      scene.to('.scene-img-hero', 1, {
        transform: 'scale(0)',
      });
      document.querySelectorAll('.quests-more-3 .quest').forEach(function(item) {
        let delay = Math.random();
        delay = 0.3 + Math.round(delay * 100) / 100;
        scene.to(
          item,
          delay,
          {
            transform: 'translateX(0) translateY(0)',
          },
          '-=1',
        );
      });
      scene
        .to('.bubble-7', 1, {
          opacity: 1,
        })
        .add('bubble-7')
        .to('.bubble-7', 1, {
          opacity: 0,
          delay: 5,
        })
        .to('.scene-2', 1, {
          opacity: 1,
        })
        .to('.light', 1, {
          opacity: 1,
        })
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
        .to('.hero-think-3', 0.5, {
          opacity: 1,
        })
        .to('.bubble-8', 1, {
          opacity: 1,
        })
        .add('bubble-8')
        .to('.bubble-8', 1, {
          opacity: 0,
          delay: 5,
        })
        .to('.img-bubble', 1, {
          opacity: 1,
        })
        .to('.hero-2', 1, {
          opacity: 1,
        })
        .to(
          '.hero-2',
          1,
          {
            opacity: 0,
          },
          '+=1',
        )
        .to(
          '.heroes',
          1,
          {
            opacity: 1,
          },
          '-=1',
        )
        .to('.bubble-9', 1, {
          opacity: 1,
        })
        .add('bubble-9')
        .to('.bubble-9', 1, {
          opacity: 0,
          delay: 5,
        })
        .to('.hill-1', 1, {
          opacity: 1,
        })
        .to('.bubble-10', 1, {
          opacity: 1,
        })
        .add('bubble-10')
        .to('.bubble-10', 1, {
          opacity: 0,
          delay: 5,
        })
        .to('.img-bubble', 2, {
          transform: 'scale(10)',
        })
        .to(
          '.heroes',
          2,
          {
            width: '800px',
            top: 'calc(50% - 199px)',
          },
          '-=2',
        )
        .to(
          '.hill-1',
          2,
          {
            width: '1281px',
            top: 'calc(50% + 150px)',
            left: 'calc(50% - 403px)',
          },
          '-=2',
        )
        .to('.img-bubble', 0, {
          opacity: 0,
        })
        .to('.light', 0, {
          opacity: 0,
        })
        .to('.hero-think-3', 0, {
          opacity: 0,
        })
        .to('.scene-2', 0, {
          backgroundColor: 'white',
        })
        .to('.mountain', 1, {
          opacity: 1,
        })
        .to('.bubble-11', 1, {
          opacity: 1,
        })
        .add('bubble-11')
        .to('.bubble-11', 1, {
          opacity: 0,
          delay: 5,
        })
        .to('.chairs', 1, {
          opacity: 1,
        })
        .to(
          '.pillows',
          1,
          {
            opacity: 1,
          },
          '-=1',
        )
        .to('.bubble-12', 1, {
          opacity: 1,
        })
        .add('bubble-12')
        .to('.bubble-12', 1, {
          opacity: 0,
          delay: 5,
        })
        .to('.tree', 1, {
          opacity: 1,
        })
        .to('.bubble-13', 1, {
          opacity: 1,
        })
        .add('bubble-13')
        .to('.bubble-13', 1, {
          opacity: 0,
          delay: 5,
        })
        .to('.bubble-14', 1, {
          opacity: 1,
        })
        .add('bubble-14')
        .to('.bubble-14', 1, {
          opacity: 0,
          delay: 5,
        })
        .to('.people', 1, {
          opacity: 1,
        })
        .to('.bubble-15', 1, {
          opacity: 1,
        })
        .add('bubble-15')
        .to('.bubble-15', 1, {
          opacity: 0,
          delay: 5,
        })
        .to('.hill-2', 1, {
          opacity: 1,
        })
        .to(
          '.hill-3',
          1,
          {
            opacity: 1,
          },
          '-=1',
        )
        .to('.bubble-16', 1, {
          opacity: 1,
        })
        .add('bubble-16')
        .to('.bubble-16', 1, {
          opacity: 0,
          delay: 5,
        })
        .to('.lamp', 1, {
          opacity: 1,
        })
        .to('.bubble-17', 1, {
          opacity: 1,
        })
        .add('bubble-17')
        .to('.bubble-17', 1, {
          opacity: 0,
          delay: 5,
        })
        .to('.expoint', 1, {
          opacity: 1,
        })
        .to('.bubble-18', 1, {
          opacity: 1,
        })
        .add('bubble-18')
        .to('.bubble-18', 1, {
          opacity: 0,
          delay: 5,
        })
        .add('end');

      const controller2 = new ScrollMagic.Controller();
      // build scene
      const pinscene = new ScrollMagic.Scene({
        triggerElement: '.cartoon',
        triggerHook: 0,
        duration: '4000%',
      })
        .setPin('.cartoon', { spacerClass: 'cartoonspacer', pushFollowers: true })
        .on('add', function() {
          const scrollscene = new ScrollMagic.Scene({
            triggerElement: '.cartoonspacer',
            triggerHook: 0,
            duration: '4000%',
          })
            .setTween(scene)
            .addTo(controller2);

          function getOffsetTop(elem) {
            let getOffsetTop = 0;
            do {
              if (!isNaN(elem.offsetTop)) {
                getOffsetTop += elem.offsetTop;
              }
            } while ((elem = elem.offsetParent));
            return getOffsetTop;
          }

          vue.scrollToForm = function() {
            TweenMax.to(window, 1, { scrollTo: getOffsetTop(document.querySelector('.form')) });            
          };
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
.panel {
  background: white;
  transform-origin: top;
  &.main {
    position: relative !important;
  }
}
</style>
