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
        .to(
          '.bubble-1',
          1,
          {
            opacity: 0,
          },
          '+=3',
        )
        .to('.scene-img-moscow-city', 1, {
          opacity: 1,
        })
        .to('.scene-img-lighters', 1, {
          opacity: 1,
        })
        .to('.bubble-2', 1, {
          opacity: 1,
        })
        .to(
          '.bubble-2',
          1,
          {
            opacity: 0,
          },
          '+=3',
        )
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
        .to(
          '.bubble-3',
          1,
          {
            opacity: 0,
          },
          '+=3',
        )
        .to('.city', 1, {
          opacity: 0.5,
        });
      let quests = [].slice.call(document.querySelectorAll('.quest'));
      for (let i = 0; i < 20; i++) {
        const index = Math.floor(Math.random() * quests.length);
        const quest = quests[index];
        scene.to(quest, 0.1, {
          opacity: 1,
        });
        quests.splice(index, 1);
      }
      scene
        .to('.bubble-4', 1, {
          opacity: 1,
        })
        .to(
          '.bubble-4',
          1,
          {
            opacity: 0,
          },
          '+=3',
        );
      for (let i = 0; i < 50; i++) {
        const index = Math.floor(Math.random() * quests.length);
        const quest = quests[index];
        scene.to(quest, 0.05, {
          opacity: 1,
        });
        quests.splice(index, 1);
      }
      scene
        .to('.bubble-5', 1, {
          opacity: 1,
        })
        .to(
          '.bubble-5',
          1,
          {
            opacity: 0,
          },
          '+=3',
        )
        .to('.city', 1, {
          opacity: 0,
        });
      for (let i = 0; i < 200; i++) {
        const index = Math.floor(Math.random() * quests.length);
        const quest = quests[index];
        scene.to(quest, 0.006, {
          opacity: 1,
        });
        quests.splice(index, 1);
      }
      scene
        .to('.bubble-6', 1, {
          opacity: 1,
        })
        .to(
          '.bubble-6',
          1,
          {
            opacity: 0,
          },
          '+=3',
        );
      for (let i = 0; i < quests.length; i++) {
        const index = Math.floor(Math.random() * quests.length);
        const quest = quests[index];
        scene.to(quest, 0.006, {
          opacity: 1,
        });
        quests.splice(index, 1);
      }
      scene
        .to('.bubble-7', 1, {
          opacity: 1,
        })
        .to(
          '.bubble-7',
          1,
          {
            opacity: 0,
          },
          '+=3',
        )
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
        .to(
          '.bubble-8',
          1,
          {
            opacity: 0,
          },
          '+=3',
        )
        .to('.img-bubble', 1, {
          opacity: 1,
        })
        .to('.heroes', 1, {
          opacity: 1,
        })
        .to('.bubble-9', 1, {
          opacity: 1,
        })
        .to(
          '.bubble-9',
          1,
          {
            opacity: 0,
          },
          '+=3',
        )
        .to('.hill-1', 1, {
          opacity: 1,
        })
        .to('.bubble-10', 1, {
          opacity: 1,
        })
        .to(
          '.bubble-10',
          1,
          {
            opacity: 0,
          },
          '+=3',
        )
        .to('.img-bubble', 2, {
          transform: 'scale(10)',
        })
        .to(
          '.heroes',
          2,
          {
            width: '800px',
            top: '600px',
          },
          '-=2',
        )
        .to(
          '.hill-1',
          2,
          {
            width: '1281px',
            top: '990px',
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
        .to(
          '.bubble-11',
          1,
          {
            opacity: 0,
          },
          '+=3',
        )
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
        .to(
          '.bubble-12',
          1,
          {
            opacity: 0,
          },
          '+=3',
        )
        .to('.tree', 1, {
          opacity: 1,
        })
        .to('.bubble-13', 1, {
          opacity: 1,
        })
        .to(
          '.bubble-13',
          1,
          {
            opacity: 0,
          },
          '+=3',
        )
        .to('.bubble-14', 1, {
          opacity: 1,
        })
        .to(
          '.bubble-14',
          1,
          {
            opacity: 0,
          },
          '+=3',
        )
        .to('.people', 1, {
          opacity: 1,
        })
        .to('.bubble-15', 1, {
          opacity: 1,
        })
        .to(
          '.bubble-15',
          1,
          {
            opacity: 0,
          },
          '+=3',
        )
        .to('.hill-2', 1, {
          opacity: 1,
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

      document.querySelectorAll('.panel')[1].addEventListener('mousewheel', function(e) {
        e.preventDefault();
        if (e.wheelDelta < 0) {
          //scroll down
          console.log('Down');
          scene.tweenTo( scene.getLabelAfter() );
        } else {
          //scroll up
          console.log('Up');
          scene.tweenTo( scene.getLabelBefore() );
        }

        //prevent page fom scrolling
        return false;
      });

      var waypoint = new Waypoint({
        element: document.querySelectorAll('.panel')[1],
        handler: function(direction) {
          console.log('scene play');
          // scene.play();
        },
        offset: '50%',
      });
      var inview = new Waypoint.Inview({
        element: document.querySelectorAll('.panel')[1],
        enter: function(direction) {
          console.log('Enter triggered with direction ' + direction);
        },
        entered: function(direction) {
          console.log('Entered triggered with direction ' + direction);
          if (direction === 'up') {
            // TweenMax.to(window, 2, { scrollTo: 0 });
          }
        },
        exit: function(direction) {
          console.log('Exit triggered with direction ' + direction);
        },
        exited: function(direction) {
          console.log('Exited triggered with direction ' + direction);
        },
      });
      var inview2 = new Waypoint.Inview({
        element: document.querySelectorAll('.panel')[0],
        enter: function(direction) {
          console.log('logo Enter triggered with direction ' + direction);
        },
        entered: function(direction) {
          console.log('logo Entered triggered with direction ' + direction);
          if (direction === 'up') {
            TweenMax.to(window, 2, {
              scrollTo: { y: 0, autoKill: false },
              ease: Power2.easeOut,
            });
          }
        },
        exit: function(direction) {
          console.log('logo Exit triggered with direction ' + direction);
        },
        exited: function(direction) {
          console.log('logo Exited triggered with direction ' + direction);
        },
      });
    });
  },
};
</script>

<style lang="scss">
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
