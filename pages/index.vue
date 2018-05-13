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
      tbscene
        .to('.top-background', 2, {
          opacity: 1,
        })
        .to(
          '.ideas',
          1,
          {
            opacity: 1,
          },
          '-=2',
        )
        .to(
          '.becomehero',
          1,
          {
            opacity: 0.5,
          },
          '-=2',
        );
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

      // new ScrollMagic.Scene({
      //   triggerElement: document.querySelectorAll('.panel')[0],
      //   duration: '100%',
      // })
      //   .setTween(document.querySelectorAll('.panel')[0], { scale: 0.7 })
      //   .setPin(document.querySelectorAll('.panel')[0], { pushFollowers: false })
      //   .addTo(controller);

      // new ScrollMagic.Scene({
      //   triggerElement: document.querySelectorAll('.panel')[1],
      //   duration: '100%',
      // })

      //   .setTween(document.querySelectorAll('.panel')[1], { scale: 0.7 })
      //   .setPin(document.querySelectorAll('.panel')[1], { pushFollowers: false })
      //   .addTo(controller);

      // new ScrollMagic.Scene({
      //   triggerElement: document.querySelectorAll('.panel')[2],
      // })
      //   .setPin(document.querySelectorAll('.panel')[2])
      //   .addTo(controller);
      // mouse event listeners
      if (
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
          navigator.userAgent,
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          navigator.userAgent.substr(0, 4),
        )
      ) {
      } else {
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
      }

      document.querySelectorAll('.panel')[2].addEventListener('mousewheel', function(e) {
        if (e.wheelDelta > 0) {
          if (window.scrollY <= document.querySelector('main').offsetTop * 2) {
            e.preventDefault();
            if (scene.progress() === 0) {
              scene.tweenTo(scene.getLabelAfter());
            }
            TweenMax.to(window, 0.5, { scrollTo: document.querySelector('main').offsetTop });
          }
        }
      });

      // touch event listeners
      const touchCartoon = new Hammer(document.querySelectorAll('.panel')[1]);

      touchCartoon.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });
      touchCartoon.on('swiperight', function(e) {
        e.preventDefault();
        scene.tweenTo(scene.getLabelAfter());
        if (scene.progress() === 1) {
          TweenMax.to(window, 0.5, { scrollTo: document.querySelector('main').offsetTop * 2 });
        }
      });
      touchCartoon.on('swipeleft', function(e) {
        e.preventDefault();
        scene.tweenTo(scene.getLabelBefore());
        if (scene.progress() === 0) {
          TweenMax.to(window, 0.5, { scrollTo: { y: 0, autoKill: false } });
        }
      });

      // logo scene
      document.querySelectorAll('.panel')[0].addEventListener('mousewheel', function(e) {
        e.preventDefault();
        if (e.wheelDelta < 0) {
          TweenMax.to(window, 0.5, { scrollTo: document.querySelector('main').offsetTop });
          if (scene.progress() === 0) {
            scene.tweenTo(scene.getLabelAfter());
          }
        } else {
          TweenMax.to(window, 0.5, { scrollTo: 0 });
        }
        return false;
      });
      // touch event listeners
      const touchLogo = new Hammer(document.querySelectorAll('.panel')[0]);
      touchLogo.get('pan').set({ direction: Hammer.DIRECTION_VERTICAL });
      touchLogo.on('panup', function(e) {
        e.preventDefault();
        TweenMax.to(window, 0.5, { scrollTo: document.querySelector('main').offsetTop });
        if (scene.progress() === 0) {
          scene.tweenTo(scene.getLabelAfter());
        }
      });
      touchLogo.on('pandown', function(e) {
        e.preventDefault();
        TweenMax.to(window, 0.5, { scrollTo: 0 });
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
