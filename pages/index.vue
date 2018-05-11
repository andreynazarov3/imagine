<template>
<div>  
    <Logo />
    <main>
    <Cartoon />
    <div class="panel main">
      <div class="additionalContent">
        <Form />
        <Speakers />
      </div>
    </div>
</main>
</div>
</template>

<script>
const imagesLoaded = require('imagesloaded');
import Cartoon from '~/components/Cartoon';
import Logo from '~/components/Logo';
import Form from '~/components/Form';
import Speakers from '~/components/Speakers';
export default {
  components: {
    Cartoon,
    Logo,
    Form,
    Speakers,
  },
  mounted: function() {
    let scene;
    imagesLoaded('img', function() {
      console.log('images loaded');
      const loading = document.querySelector('.loading');
      const main = document.querySelector('main');
      loading.style.display = 'none';
      main.style.display = 'block';
      const tbscene = new TimelineMax();
      tbscene.to('.top-background', 2, {
        opacity: 1,
      });
      scene = new TimelineMax({
        paused: true,
      });
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
        })
        .to('.city', 1, {
          opacity: 0.5,
        })
        .to('.quests-1', 2, {
          transform: 'translateY(1200px)',
        })
        .to(
          '.quests-2',
          1.7,
          {
            transform: 'translateY(1200px)',
          },
          '-=2',
        )
        .to(
          '.quests-3',
          1.5,
          {
            transform: 'translateY(1200px)',
          },
          '-=2',
        )
        .to(
          '.quests-4',
          1.2,
          {
            transform: 'translateY(1200px)',
          },
          '-=2',
        )
        .to(
          '.quests-5',
          1.1,
          {
            transform: 'translateY(1200px)',
          },
          '-=2',
        )
        .to(
          '.quests-6',
          1,
          {
            transform: 'translateY(1200px)',
          },
          '-=2',
        )
        .to('.bubble-4', 1, {
          opacity: 1,
        })
        .add('bubble-4')
        .to('.bubble-4', 1, {
          opacity: 0,
        })
        .to('.scene-img-hero', 1, {
          transform: 'scale(0.9)',
        })
        .to(
          '.quests-1',
          2,
          {
            transform: 'translateY(900px)',
          },
          '-=1',
        )
        .to(
          '.quests-2',
          1.7,
          {
            transform: 'translateY(900px)',
          },
          '-=2',
        )
        .to(
          '.quests-3',
          1.5,
          {
            transform: 'translateY(900px)',
          },
          '-=2',
        )
        .to(
          '.quests-4',
          1.2,
          {
            transform: 'translateY(900px)',
          },
          '-=2',
        )
        .to(
          '.quests-5',
          1.1,
          {
            transform: 'translateY(900px)',
          },
          '-=2',
        )
        .to(
          '.quests-6',
          1,
          {
            transform: 'translateY(900px)',
          },
          '-=2',
        );
      scene
        .to('.bubble-5', 1, {
          opacity: 1,
        })
        .add('bubble-5')
        .to('.bubble-5', 1, {
          opacity: 0,
        })
        .to('.city', 1, {
          opacity: 0,
        })
        .to('.scene-img-hero', 1, {
          transform: 'scale(0.7)',
        })
        .to(
          '.quests-1',
          2,
          {
            transform: 'translateY(500px)',
          },
          '-=1',
        )
        .to(
          '.quests-2',
          1.7,
          {
            transform: 'translateY(500px)',
          },
          '-=2',
        )
        .to(
          '.quests-3',
          1.5,
          {
            transform: 'translateY(500px)',
          },
          '-=2',
        )
        .to(
          '.quests-4',
          1.2,
          {
            transform: 'translateY(500px)',
          },
          '-=2',
        )
        .to(
          '.quests-5',
          1.1,
          {
            transform: 'translateY(500px)',
          },
          '-=2',
        )
        .to(
          '.quests-6',
          1,
          {
            transform: 'translateY(500px)',
          },
          '-=2',
        );
      scene
        .to('.bubble-6', 1, {
          opacity: 1,
        })
        .add('bubble-6')
        .to('.bubble-6', 1, {
          opacity: 0,
        })
        .to('.scene-img-hero', 1, {
          transform: 'scale(0.3)',
          opacity: 0,
        })
        .to(
          '.quests-1',
          2,
          {
            transform: 'translateY(0px)',
          },
          '-=1',
        )
        .to(
          '.quests-2',
          1.7,
          {
            transform: 'translateY(0px)',
          },
          '-=2',
        )
        .to(
          '.quests-3',
          1.5,
          {
            transform: 'translateY(0px)',
          },
          '-=2',
        )
        .to(
          '.quests-4',
          1.2,
          {
            transform: 'translateY(0px)',
          },
          '-=2',
        )
        .to(
          '.quests-5',
          1.1,
          {
            transform: 'translateY(0px)',
          },
          '-=2',
        )
        .to(
          '.quests-6',
          1,
          {
            transform: 'translateY(0px)',
          },
          '-=2',
        );
      scene
        .to('.bubble-7', 1, {
          opacity: 1,
        })
        .add('bubble-7')
        .to('.bubble-7', 1, {
          opacity: 0,
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
        })
        .to('.bubble-14', 1, {
          opacity: 1,
        })
        .add('bubble-14')
        .to('.bubble-14', 1, {
          opacity: 0,
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
        })
        .add('end');
      const controller = new ScrollMagic.Controller({
        globalSceneOptions: {
          triggerHook: 'onLeave',
        },
      });

      new ScrollMagic.Scene({
        triggerElement: document.querySelectorAll('.panel')[0],
        duration: '100%',
      })
        .setTween(document.querySelectorAll('.panel')[0], { scale: 0.7 })
        .setPin(document.querySelectorAll('.panel')[0], { pushFollowers: false })
        .addTo(controller);

      new ScrollMagic.Scene({
        triggerElement: document.querySelectorAll('.panel')[1],
        duration: '100%',
      })

        .setTween(document.querySelectorAll('.panel')[1], { scale: 0.7 })
        .setPin(document.querySelectorAll('.panel')[1], { pushFollowers: false })
        .addTo(controller);

      new ScrollMagic.Scene({
        triggerElement: document.querySelectorAll('.panel')[2],
      })
        .setPin(document.querySelectorAll('.panel')[2])
        .addTo(controller);
      // mouse event listeners
      document.querySelectorAll('.panel')[1].addEventListener('mousewheel', function(e) {
        e.preventDefault();
        if (e.wheelDelta < 0) {
          scene.tweenTo(scene.getLabelAfter());
          if (scene.progress() === 1) {
            TweenMax.to(window, 0.5, { scrollTo: document.querySelector('main').offsetTop * 2 });
          }
        } else {
          scene.tweenTo(scene.getLabelBefore());
          if (scene.progress() === 0) {
            TweenMax.to(window, 0.5, { scrollTo: 0 });
          }
        }
        return false;
      });
      document.querySelectorAll('.panel')[2].addEventListener('mousewheel', function(e) {
        if (e.wheelDelta > 0) {
          if (window.scrollY <= document.querySelector('main').offsetTop * 2 + 100) {
            e.preventDefault();
            TweenMax.to(window, 0.5, { scrollTo: document.querySelector('main').offsetTop });
          }
        }
         
      });

      // touch event listeners
      const touchCartoon = new Hammer(document.querySelectorAll('.panel')[1]);
      touchCartoon.get('pan').set({ direction: Hammer.DIRECTION_ALL });
      touchCartoon.on('panup', function(e) {
        e.preventDefault();
        scene.tweenTo(scene.getLabelAfter());
        if (scene.progress() === 1) {
          TweenMax.to(window, 0.5, { scrollTo: document.querySelector('main').offsetTop * 2 });
        }
      });
      touchCartoon.on('pandown', function(e) {
        e.preventDefault();
        scene.tweenTo(scene.getLabelBefore());
        if (scene.progress() === 0) {
          TweenMax.to(window, 0.5, { scrollTo: { y: 0, autoKill: false } });
        }
      });
      const touchMain = new Hammer(document.querySelectorAll('.panel')[2]);
      touchMain.get('pan').set({ direction: Hammer.DIRECTION_ALL, touchAction: "auto" });
      touchMain.on('pandown', function(e) {
        if (window.scrollY <= document.querySelector('main').offsetTop * 2 + 100) {
          e.preventDefault();
          TweenMax.to(window, 0.5, { scrollTo: document.querySelector('main').offsetTop });
        }
      });
      touchMain.on('panup', function(e) {
          console.log('pan up')
      });
      // logo scene
    document.querySelectorAll('.panel')[0].addEventListener('mousewheel', function(e) {
        e.preventDefault();
        if (e.wheelDelta < 0) {
          TweenMax.to(window, 0.5, {scrollTo:document.querySelector('main').offsetTop});      
          if (scene.progress() === 0) {
            scene.tweenTo(scene.getLabelAfter());
          }
        } else {        
          TweenMax.to(window, 0.5, {scrollTo:0});          
        }
        return false;
      });
    // touch event listeners
      const touchLogo = new Hammer(document.querySelectorAll('.panel')[0]);
      touchLogo.get('pan').set({ direction: Hammer.DIRECTION_ALL });
      touchLogo.on('panup', function(e) {
        e.preventDefault();       
        TweenMax.to(window, 0.5, {scrollTo:document.querySelector('main').offsetTop});
        if (scene.progress() === 0) {
            scene.tweenTo(scene.getLabelAfter());
          }
      });
      touchLogo.on('pandown', function(e) {
        e.preventDefault();
        TweenMax.to(window, 0.5, {scrollTo:0});     
      });
    document.querySelector('.becomehero').addEventListener('click', function(e) {
      e.preventDefault();
      TweenMax.to(window, 1, { scrollTo: document.querySelector('main').offsetTop * 2 });
    });
      // let waypoint = new Waypoint({
      //   element: document.querySelectorAll('.panel')[1],
      //   handler: function(direction) {
      //     scene.tweenTo(scene.getLabelAfter());
      //   },
      //   offset: '50%',
      // });
    });
  },
};
</script>

<style lang="scss">
main {
  display: none;
  overflow: hidden;
}
.panel {
  background: white;
  transform-origin: top;
  &.main {
    position: relative !important;
  }
}
</style>
