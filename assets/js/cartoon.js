
  const scene = new TimelineMax({
    paused: true
  });
  scene       
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
    scene
      .to(quest, 0.1, {
        opacity: 1,
      });
    quests.splice(index, 1);
  };
  scene
    .to('.bubble-4', 1, {
      opacity: 1,
    })
    .to('.bubble-4', 1, {
      opacity: 0
    }, '+=3');
  for (let i = 0; i < 50; i++) {
    const index = Math.floor(Math.random() * quests.length);
    const quest = quests[index];
    scene
      .to(quest, 0.05, {
        opacity: 1,
      });
    quests.splice(index, 1);
  };
  scene
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
    scene
      .to(quest, 0.006, {
        opacity: 1,
      });
    quests.splice(index, 1);
  };
  scene
    .to('.bubble-6', 1, {
      opacity: 1,
    })
    .to('.bubble-6', 1, {
      opacity: 0
    }, '+=3');
  for (let i = 0; i < quests.length; i++) {
    const index = Math.floor(Math.random() * quests.length);
    const quest = quests[index];
    scene
      .to(quest, 0.006, {
        opacity: 1,
      });
    quests.splice(index, 1);
  };
  scene
    .to('.bubble-7', 1, {
      opacity: 1,
    })
    .to('.bubble-7', 1, {
      opacity: 0
    }, '+=3')
    .to('.scene-2', 1, {
      opacity: 1,
    })
    .to('.light', 1, {
      opacity: 1,
    })
    .to('.hero-think-1', 0.5, {
      opacity: 1,
    }, '-=1')
    .to('.hero-think-1', 0.5, {
      opacity: 0,
    })
    .to('.hero-think-2', 0.5, {
      opacity: 1,
    }, '-=0.25')
    .to('.hero-think-2', 0.5, {
      opacity: 0,
    })
    .to('.hero-think-3', 0.5, {
      opacity: 1,
    })
    .to('.bubble-8', 1, {
      opacity: 1,
    })
    .to('.bubble-8', 1, {
      opacity: 0,
    }, '+=3')
    .to('.img-bubble', 1, {
      opacity: 1,
    })
    .to('.heroes', 1, {
      opacity: 1,
    })
    .to('.bubble-9', 1, {
      opacity: 1,
    })
    .to('.bubble-9', 1, {
      opacity: 0,
    }, '+=3')
    .to('.hill-1', 1, {
      opacity: 1,
    })
    .to('.bubble-10', 1, {
      opacity: 1,
    })
    .to('.bubble-10', 1, {
      opacity: 0,
    }, '+=3')
    .to('.img-bubble', 2, {
      transform: 'scale(10)'
    })
    .to('.heroes', 2, {
      width: '800px',
      top: '600px'
    }, '-=2')
    .to('.hill-1', 2, {
      width: '1281px',
      top: '990px',
      left: 'calc(50% - 403px)'
    }, '-=2')
    .to('.img-bubble', 0, {
      opacity: 0
    })
    .to('.light', 0, {
      opacity: 0
    })
    .to('.hero-think-3', 0, {
      opacity: 0
    })
    .to('.scene-2', 0, {
      backgroundColor: 'white'
    })
    .to('.mountain', 1, {
      opacity: 1,
    })
    .to('.bubble-11', 1, {
      opacity: 1,
    })
    .to('.bubble-11', 1, {
      opacity: 0,
    }, '+=3')
    .to('.chairs', 1, {
      opacity: 1,
    })
    .to('.pillows', 1, {
      opacity: 1,
    }, '-=1')
    .to('.bubble-12', 1, {
      opacity: 1,
    })
    .to('.bubble-12', 1, {
      opacity: 0,
    }, '+=3')
    .to('.tree', 1, {
      opacity: 1,
    })
    .to('.bubble-13', 1, {
      opacity: 1,
    })
    .to('.bubble-13', 1, {
      opacity: 0,
    }, '+=3')
    .to('.bubble-14', 1, {
      opacity: 1,
    })
    .to('.bubble-14', 1, {
      opacity: 0,
    }, '+=3')
    .to('.people', 1, {
      opacity: 1,
    })
    .to('.bubble-15', 1, {
      opacity: 1,
    })
    .to('.bubble-15', 1, {
      opacity: 0,
    }, '+=3')
    .to('.hill-2', 1, {
      opacity: 1,
    })


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