module.exports = function (self) {
  const controller = new ScrollMagic.Controller();
  const all_scenes = new TimelineMax({
    repeat: 0,
    paused: false
  });
  const scene_0 = new TimelineMax({
    paused: true
  });
  scene_0.to('.scene-0', 1.5, {
      opacity: 1,
    })
    .to('.scene-0', 1.5, {
      opacity: 0,
    });
  const scene_1 = new TimelineMax();
  scene_1
    .to('#cartoon', 0, {
      height: '3000px',
    })
    .to('.scene-1', 0, {
      opacity: 1,
    })
    .to('.scene-img-hero', 1, {
      opacity: 1,
    })
    .to('.scene-img-background', 1, {
      opacity: 1,
    }, '-=0.5')
    .to('.scene-img-bridge', 1, {
      opacity: 1,
    })
    .to('.bubble-1', 1, {
      opacity: 1,
    })
    .to('.bubble-1', 1, {
      opacity: 0,
    }, '+=3')
    .to('.scene-img-moscow-city', 1, {
      opacity: 1,
    })
    .to('.scene-img-lighters', 1, {
      opacity: 1,
    })
    .to('.bubble-2', 1, {
      opacity: 1,
    })
    .to('.bubble-2', 1, {
      opacity: 0,
    }, '+=3')
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
    .to('.bubble-3', 1, {
      opacity: 0,
    }, '+=3')
    .to('.city', 1, {
      opacity: 0.5,
    });
  let quests = [].slice.call(document.querySelectorAll('.quest'));
  for (let i = 0; i < 20; i++) {
    const index = Math.floor(Math.random() * quests.length);
    const quest = quests[index];
    scene_1
      .to(quest, 0.1, {
        opacity: 1,
      });
    quests.splice(index, 1);
  };
  scene_1
    .to('.bubble-4', 1, {
      opacity: 1,
    })
    .to('.bubble-4', 1, {
      opacity: 0
    }, '+=3');
  for (let i = 0; i < 50; i++) {
    const index = Math.floor(Math.random() * quests.length);
    const quest = quests[index];
    scene_1
      .to(quest, 0.05, {
        opacity: 1,
      });
    quests.splice(index, 1);
  };
  scene_1
    .to('.bubble-5', 1, {
      opacity: 1,
    })
    .to('.bubble-5', 1, {
      opacity: 0
    }, '+=3')
    .to('.city', 1, {
      opacity: 0,
    });
  for (let i = 0; i < 200; i++) {
    const index = Math.floor(Math.random() * quests.length);
    const quest = quests[index];
    scene_1
      .to(quest, 0.006, {
        opacity: 1,
      });
    quests.splice(index, 1);
  };
  scene_1
    .to('.bubble-6', 1, {
      opacity: 1,
    })
    .to('.bubble-6', 1, {
      opacity: 0
    }, '+=3');
  for (let i = 0; i < quests.length; i++) {
    const index = Math.floor(Math.random() * quests.length);
    const quest = quests[index];
    scene_1
      .to(quest, 0.006, {
        opacity: 1,
      });
    quests.splice(index, 1);
  };
  scene_1
    .to('.scene-2', 1, {
      opacity: 1,
    });
  // all_scenes.add(scene_0);
  all_scenes.add(scene_1);

}

/*
const scene = new ScrollMagic.Scene({
  triggerElement: self.$refs.cartoon,
  reverse: false,
})
.on('start', function () {
  console.log('in');
  // tl.play();
})
// .addIndicators()
.addTo(controller); 
*/
