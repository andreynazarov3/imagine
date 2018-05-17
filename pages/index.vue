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
        );
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
        .to(
          '.scene-img-house-2',
          2,
          { top: '50%', transform: 'translateY(-900px)  scale(0.9)' },
          '-=2',
        )
        .to(
          '.scene-img-house-3',
          2,
          { top: '50%', transform: 'translateY(-500px) scale(1)' },
          '-=2',
        )
        .to(
          '.scene-img-lighters',
          2,
          { top: '50%', transform: 'translateY(-400px) scale(1.15)' },
          '-=2',
        )
        .to('.scene-img-moscow-city', 2, { top: '50%', transform: 'translateY(-950px)' }, '-=2')
        .to('.bubble-1', 1, {
          top: '0%', 
          y:'-100%'
        },'-=2',)
    
        .to('.bubble-2', 1, {
          top: '0%', 
          y:'-100%'
        },'-=1.5')
    
        .to('.bubble-3', 1, { 
          top: '0%', 
          y:'-100%'
        },'-=1')
        
        .to('.city', 0.3, {
          opacity: 0.3,
        })
        .to('.quests-1', 1, {
          y: '0%',
          x: '-50%'
        })  
        .to('.bubble-4', 1, {
          top: '0%', 
          y:'-100%'
        },
          '-=1',)
          .to('.scene-img-hero', 1, {
        transform: 'scale(0.9)',
      })
        .to('.quests-2', 1, {
          y: '0%',
          x: '-50%'
        },
          '-=1',)
        .to('.bubble-5', 1, {
         top: '0%', 
          y:'-100%'
        },
          '-=1',)        
        .to('.city', 1, {
          opacity: 0,
        })
        .to('.scene-img-hero', 1, {
        transform: 'scale(0.7)',
      },          '-=1')
      .to('.quests-3', 1, {
          y: '0%',
          x: '-50%'
        },
          '-=1',)
        
          
          .to('.scene-img-hero', 1, {
          transform: 'scale(0)',
        })
        .to('.bubble-6', 1, {
          top: '0%', 
          y:'-100%'
        },
          '-=1',)

        .to('.bubble-7', 1, {
          top: '0%', 
          y:'-100%'
        }
        ,)
               
        .to('.quest', 1, {
          transform: 'scale(6)'
        },
          '-=1',)
        .to('.scene-2', 1, {
          opacity: 1,
        })
        .to('.light', 1, {
          opacity: 1,
        },'-=1',)
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
        },
          '-=0.25',)
        .to('.bubble-8', 1, {
          top: '0%', 
          y:'-100%'
        },'-=0.5',)
        .to('.img-bubble',  0.5, {
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
        .to('.bubble-9', 1, {
          top: '0%', 
          y:'-100%'
        },'-=0.5',)
        .to('.hill-1', 1, {
          opacity: 1,
        })
        .to('.bubble-10', 1, {
          top: '0%', 
          y:'-100%'
        },'-=0.5',)
        .to('.img-bubble', 2, {
          transform: 'scale(10)',
        })
        .to(
          '.heroes',
          2,
          {
            width: '800px',
            y: '0px',
          },
          '-=2',
        )
        .to(
          '.hill-1',
          2,
          {
            width: '1281px',
            y: '350px',
            x: '-403px',
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
        },'-=1')
        .to('.chairs', 1, {
          opacity: 1,
        },'-=1')
        .to(
          '.pillows',
          1,
          {
            opacity: 1,
          }
          ,'-=1'
        )
        .to('.tree', 1, {
          opacity: 1,
        },'-=1')
        .to('.people', 1, {
          opacity: 1,
        },'-=1')
        .to('.hill-2', 1, {
          opacity: 1,
        },'-=1')
        .to('.hill-3', 1,{
          opacity: 1,
          },
          '-=1',
        )
        .to('.lamp', 1, {
          opacity: 1,
        },
          '-=1')
          .to('.expoint', 1, {
          opacity: 1,
        },
          '-=1')
        // move up
        .to('.mountain', 7, {
          y: '-700px',
        },'-=1')
        .to('.expoint', 7, {
          y: '-720px'
        },
          '-=7')
        .to('.chairs', 7, {
          y: '-1200px',
        },'-=7')
        .to(
          '.pillows',
          7,
          {
            y: '-700px',
          }
          ,'-=7'
        )
        .to('.tree', 7, {
          y: '-1400px',
        },'-=7')
        .to('.people', 7, {
          y: '-700px',
        },'-=7')
        .to('.hill-2', 7, {
          y: '-700px',
        },'-=7')
        .to('.hill-3', 7,{
          y: '-700px',
          },
          '-=7',
        )
        .to('.lamp', 7, {
          y: '-400px',
        },
          '-=17',
        )

        .to('.bubble-11', 1, {
           top: '0%', 
          y:'-100%'
        },'-=7',)
     
        .to(
          '.heroes',
          7,
          {
            width: '600px',
            y: '-200px',
          },
          '-=7',
        )
        .to(
          '.hill-1',
          2,
          {
            width: '1281px',
            y: '150px',
            x: '-403px',
          },
          '-=7',
        )
        
        
        .to('.bubble-12', 1, {
           top: '0%', 
          y:'-100%'
        },'-=7',)
     
        
        
        .to('.bubble-13', 1, {
           top: '0%', 
          y:'-100%'
        },'-=6',)
     
        
        .to('.bubble-14', 1, {
           top: '0%', 
          y:'-100%'
        },'-=5',)
        
        .to('.bubble-15', 1, {
           top: '0%', 
          y:'-100%'
        },'-=4',)
        
        .to('.bubble-16', 1, {
           top: '0%', 
          y:'-100%'
        },'-=3')
        
        .to('.bubble-17', 1, {
           top: '0%', 
          y:'-100%'
        },'-=2',)
        
        .to('.bubble-18', 1, {
           top: '50%', 
          y:'-50%'
        },'-=1',)
  

      const controller2 = new ScrollMagic.Controller();
      // build scene
      const pinscene = new ScrollMagic.Scene({
        triggerElement: '.cartoon',
        triggerHook: 0,
        duration: '8000%',
      })
        .setPin('.cartoon', { spacerClass: 'cartoonspacer', pushFollowers: true })
        .on('add', function() {
          const scrollscene = new ScrollMagic.Scene({
            triggerElement: '.cartoonspacer',
            triggerHook: 0,
            duration: '8000%',
          })
            .setTween(scene)
            .addTo(controller2);

          const cartoon = document.querySelector('.cartoon');
          if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
            window.smoothScroller = new smoothScroll(document, 120, 12);
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