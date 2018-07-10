jQuery(document).ready(function() {
  // start scrollmagic controller
  var controller = new ScrollMagic.Controller();
  // intro
  newScene('#intro > .trigger-50', '.title', 5, { top: '50%' }, 300).addTo(controller);
  newScene('#intro > .trigger-100', '.title', 15, { top: '0%' }, 600).addTo(controller);
  newScene('#scene1 > .trigger-0', '.title', 1, { opacity: '0' }, 60).addTo(controller);
  newScene('#scene1 > .trigger-0', '#text-scene1', 1, { opacity: '1' }, 100).addTo(controller);

  // scene 1
  newScene(
    '#scene1 > .trigger-0',
    '#swanegg',
    0.1,
    {
      x: '+=2',
      yoyo: true,
      repeat: -1,
      transform: 'rotate(10deg)',
      ease: Quad.easeInOut
    },
    300
  ).addTo(controller);
  newScene(
    '#scene1 > .trigger-40',
    '#swanegg',
    0.5,
    {
      left: '590px',
      top: '520px',
      rotation: '-240_short',
      rotationX: '-=540_cw',
      scale: 1.5
    },
    400
  ).addTo(controller);
  newScene('#scene1 > .trigger-100', '#text-scene2', 1, { opacity: '1'}, 70).addTo(controller);
  newScene(
    '#scene1 > .trigger-60',
    '#coverleft1, #covercenter1, #coverright1',
    0.5,
    {
      x: '+=1',
      yoyo: true,
      repeat: -1,
      transform: 'rotate(5deg)',
      ease: Quad.easeInOut
    },
    150
  ).addTo(controller);
  newScene(
    '#scene1 > .trigger-100',
    '#scene1',
    0.5,
    {
      opacity: 0
    },
    100
  ).addTo(controller);

  // scene 2
  newScene(
    '#scene2 > .trigger-0',
    '#scene2',
    0.5,
    {
      opacity: 1
    },
    300
  ).addTo(controller);
  newScene(
    '#scene2 > .trigger-0',
    '#coverleft, #covercenter, #coverright, #coverswanegg',
    0.2,
    {
      x: '+=0.5',
      yoyo: true,
      repeat: -1,
      transform: 'rotate(4deg)',
      ease: Quad.easeInOut
    },
    400
  ).addTo(controller);
  newScene(
    '#scene2 > .trigger-0',
    '#swan-nest-2',
    0.5,
    {
      scale: 0.5,
      x: '-=120',
      y: '-=130'
    },
    300
  ).addTo(controller);
  newScene(
    '#scene2 > .trigger-0',
    '#plants-2',
    0.5,
    {
      scale: 0.5,
      x: '-=120',
      y: '-=220'
    },
    300
  ).addTo(controller);
  newScene('#scene2 > .trigger-0', '#text-scene2-1', 4, { opacity: '1' }, 70).addTo(controller);
  newScene(
    '#scene2 > .trigger-0',
    '#duck-nest-alone-2',
    0.5,
    {
      scale: 1.4,
      x: '-=180',
      y: '-=10'
    },
    500
  ).addTo(controller);
  newScene('#scene2 > .trigger-50', '#text-scene2-2', 4, { opacity: '1' }, 70).addTo(controller);
  newScene('#scene2 > .trigger-80', '#scene2sub', 1, {}, 600).setPin('#scene2sub').addTo(controller);
  // babies born
  newScene(
    '#scene2 > .trigger-60',
    '#duck-nest-alone-2 > #coverleft',
    0.5,
    {
      rotation: '-165deg',
      x: '-120',
      y: '+=20'
    },
    200
  ).addTo(controller);
  newScene(
    '#scene2 > .trigger-60',
    '#duck-nest-alone-2 > #covercenter',
    1.8,
    {
      rotation: '35deg',
      x: '10',
      y: '-=120',
      zIndex: -1
    },
    200
  ).addTo(controller);
  newScene(
    '#scene2 > .trigger-60',
    '#duck-nest-alone-2 > #coverright',
    1,
    {
      rotation: '10deg',
      top: '-=70px',
      left: '-=10px',
      width: '-=40px'
    },
    100
  ).addTo(controller);
  newScene(
    '#scene2 > .trigger-60',
    '#duck-nest-alone-2 > #coverswanegg',
    1,
    {
      rotation: '-185deg',
      x: '-=100',
      y: '+=150'
    },
    200
  ).addTo(controller);
  newScene(
    '#scene2 > .trigger-60',
    '#yellow-ducks',
    1.5,
    {
      y: '-=120',
      x: '-=35',
      zIndex: 0,
      width: '300px'
    },
    70
  ).addTo(controller);
  newScene(
    '#scene2 > .trigger-60',
    '#baby-swan',
    .5,
    {
      top: '-25px',
      y: '+=2',
      yoyo: true,
      repeat: -1,
    },
    200
  ).addTo(controller);
  newScene('#scene2 > .trigger-100', '#swan-nest-2', 0.5, { left: '-200%' }, 200).addTo(controller);
  newScene('#scene2 > .trigger-100', '#plants-2', 0.5, { top: '-200%' }, 200).addTo(controller);
  newScene('#scene2 > .trigger-100', '#duck-nest-alone-2', 0.5, { opacity: '0' }, 400).addTo(controller);

  // scene 3
  newScene('#scene3 > .trigger-10', '#bush', 0.1, { left: '10px', zIndex: 3, opacity: '1' }, 60).addTo(controller);
  newScene('#scene3 > .trigger-0', '#scene3sub', 0.1, { }, 750).setPin('#scene3sub').addTo(controller);
  newScene('#scene3 > .trigger-20', '#duckmom', 0.1, { right: '40%', opacity: '1' }, 200).addTo(controller);
  newScene('#scene3 > .trigger-20', '#angrymom', 0.1, { right: '40%', opacity: '0' }, 200).addTo(controller);
  newScene('#scene3 > .trigger-30', '#text-scene3', 4, { opacity: '1' }, 70).addTo(controller);
  // mini ducks entry
  newScene('#scene3 > .trigger-50', '#duck5', 0.1, { left: '25%', opacity: '1' }, 80).addTo(controller);
  newScene('#scene3 > .trigger-60', '#duck6', 0.3, { left: '22%', opacity: '1' }, 120).addTo(controller);
  newScene('#scene3 > .trigger-70', '#duck7', 0.2, { left: '15%', opacity: '1' }, 120).addTo(controller);
  
  newScene('#scene3 > .trigger-80', '#swan-child', 0.3, { left: '20%', opacity: '1' }, 240).addTo(controller);
  newScene('#scene3 > .trigger-80', '#duck5, #duck6, #duck7', 0.3, { left: '42%', top: '120px' }, 180).addTo(controller);
  newScene('#scene3 > .trigger-90', '#angrymom', 0.3, { opacity: '1', right: '40%', top: '0px' }, 100).addTo(controller);
  newScene('#scene3 > .trigger-90', '#duckmom', 0.3, { opacity: '0', right: '40%' }, 100).addTo(controller);
  newScene('#scene4 > .trigger-0', '#scene3sub', 0.3, { opacity: '0' }, 150).addTo(controller);

  // scene 4
  newScene('#scene4 > .trigger-10', '#floor', 0.1, { left : '0%'}, 150).addTo(controller);
  newScene('#scene4 > .trigger-10', '#lake-s4', 0.1, { right : '0%'}, 150).addTo(controller);
  newScene('#scene4 > .trigger-20', '#scene4sub', 0.1, { }, 500)
    .setPin('#scene4sub')
    .addTo(controller);
  newScene('#scene4 > .trigger-20', '#sadswan', 10, { opacity: '1',  left: 'calc(60% - 200px)' }, 150).addTo(controller);
  newScene('#scene4 > .trigger-30', '#tear', 0.1, { opacity: 1}, 40).addTo(controller);
  newScene('#scene4 > .trigger-20', '#text-scene4', 0.1, { opacity: 1}, 70).addTo(controller);
  newScene('#scene4 > .trigger-60', '#tear', 0.1, { top: '115%', left: '100px'}, 80).addTo(controller);
  newScene('#scene4 > .trigger-70', '#reflection', 0.1, { opacity: 1}, 80).addTo(controller);
  newScene('#scene4 > .trigger-100', '#scene4sub', 0.1, { opacity: 0}, 120).addTo(controller);

  // scene 5
  newScene('#scene5 > .trigger-0', '#scene5sub', 0.1, { }, 700).setPin('#scene5sub').addTo(controller);
  newScene('#scene5 > .trigger-20', '#bg-birds', 0.1, { opacity: 1}, 20).addTo(controller);
  newScene('#scene5 > .trigger-0', '#ugly-duck-s5', 0.1, { right: '45%' }, 300).addTo(controller);
  newScene('#scene5 > .trigger-10', '#worm-bird', 2.5, { left: '80px', opacity: '1' }, 320).addTo(controller);
  newScene('#scene5 > .trigger-20', '#text-scene5', 5, { opacity: '1' }, 320).addTo(controller);
  newScene('#scene5 > .trigger-60', '#tr-2', 0.5, { opacity: '0' }, 10).addTo(controller);
  newScene('#scene5 > .trigger-60', '#tr-1', 0.5, { opacity: '1' }, 30).addTo(controller);

  // scene 6
  newScene('#scene6 > .trigger-0', '#scene5sub', 0.1, { opacity : '0'}, 160).addTo(controller);
  newScene('#scene6 > .trigger-0', '#scene6sub', 0.1, {}, 1300)
    .setPin('#scene6sub')
    .addTo(controller);
  newScene('#scene6 > .trigger-0', '#swan-nest-6', 0.1, {opacity: '1', top: '0%' }, 220).addTo(controller);
  newScene('#scene6 > .trigger-30', '#text-scene6-1', 0.1, { opacity: '1' }, 80).addTo(controller);
  newScene('#scene6 > .trigger-50', '#swan-waiting-food', 0.1, { opacity: '1', top: '-52%' }, 250).addTo(controller);
  newScene('#scene6 > .trigger-70', '#eat-1', 0.1, { opacity: '0' }, 40).addTo(controller);
  newScene('#scene6 > .trigger-70', '#eat-2', 0.1, { opacity: '1' }, 40).addTo(controller);
  newScene('#scene6 > .trigger-70', '#text-scene6-2', 0.1, { opacity: '1', right: '0px' }, 280).addTo(controller);
  newScene('#scene6 > .trigger-100', '#swan-waiting-food', 0.1, { top: '9%', opacity: '0' }, 60).addTo(controller);
  newScene('#scene6-1 > .trigger-10', '#eat-2', 0.1, { opacity: '0' }, 60).addTo(controller);
  newScene('#scene6-1 > .trigger-10', '#eat-1', 0.1, { opacity: '1' }, 60).addTo(controller);
  newScene('#scene6-1 > .trigger-80', '#scene6sub', 0.1, { opacity: '0' }, 150).addTo(controller);
  newScene('#scene6-1 > .trigger-90', '#text-scene7', 0.1, { opacity: '1' }, 10).addTo(controller);

  // scene 7
  newScene('#scene7 > .trigger-20', '#text-scene7', 0.1, { opacity: '1', top: '50px', left: '53%', backgroundColor: '#fff' }, 100).addTo(controller);
  newScene('#scene7 > .trigger-0', '#scene7sub', 0.1, { opacity: '1' }, 700).addTo(controller);
  newScene('#scene7 > .trigger-0', '#scene7', 0.1, { opacity: '1' }, 10).addTo(controller);
  newScene('#scene7 > .trigger-50', '#scene7sub', 0.1, { }, 700).setPin('#scene7sub').addTo(controller);
  newScene('#scene7 > .trigger-50', '#swan-7', 0.5, {
    left: '200px',
    top: '120px' 
  }, 100).addTo(controller);
  newScene('#scene7 > .trigger-70', '#tear-7', 0.5, { opacity: '1' }, 20).addTo(controller);
  newScene('#scene7 > .trigger-80', '#tear-7-a', 0.5, { opacity: '1' }, 20).addTo(controller);
  newScene('#scene7 > .trigger-90', '#tear-7-b', 0.5, { opacity: '1' }, 20).addTo(controller);
  newScene('#scene7 > .trigger-100', '#tear-7-c', 0.5, { opacity: '1' }, 20).addTo(controller);
  newScene('#scene7-1 > .trigger-10', '#tear-7-d', 0.5, { opacity: '1' }, 20).addTo(controller);

  newScene('#scene7 > .trigger-80', '#tear-7', 1.5, { top: '400px', left: '111px' }, 30).addTo(controller);
  newScene('#scene7 > .trigger-90', '#tear-7-a', 2.5, { top: '400px', left: '131px' }, 40).addTo(controller);
  newScene('#scene7 > .trigger-100', '#tear-7-b', 1.7, { top: '400px', left: '92px' }, 50).addTo(controller);
  newScene('#scene7-1 > .trigger-10', '#tear-7-c', 0.9, { top: '400px', left: '117px' }, 30).addTo(controller);
  newScene('#scene7-1 > .trigger-20', '#tear-7-d', 2.2, { top: '400px', left: '105px' }, 60).addTo(controller);
  
  newScene('#scene7 > .trigger-90', '#tear-7', 1.5, { opacity: '0' }, 60).addTo(controller);
  newScene('#scene7 > .trigger-100', '#tear-7-a', 2.5, { opacity: '0' }, 60).addTo(controller);
  newScene('#scene7-1 > .trigger-10', '#tear-7-b', 1.7, { opacity: '0' }, 60).addTo(controller);
  newScene('#scene7-1 > .trigger-20', '#tear-7-c', 0.9, { opacity: '0' }, 60).addTo(controller);
  newScene('#scene7-1 > .trigger-30', '#tear-7-d', 2.2, { opacity: '0' }, 60).addTo(controller);
  
  newScene('#scene7-1 > .trigger-20', '#swan-mom-7', 0.7, { opacity: '1' }, 100).addTo(controller);
  newScene('#scene7-1 > .trigger-20', '#swan-mom-7', 4.2, { left: '500px' }, 220).addTo(controller);
  newScene('#scene7-1 > .trigger-30', '#swan-bro', 1.2, { top: '0px' }, 70).addTo(controller);
  newScene('#scene7-1 > .trigger-40', '#swan-bro', 3.2, { top: '30px' }, 70).addTo(controller);
  newScene('#scene7-1 > .trigger-60', '#scene7sub', 3.2, { top: '-100px' }, 170).addTo(controller);
  newScene('#scene7-1 > .trigger-90', '#scene7sub', 3.2, { opacity: '0' }, 60).addTo(controller);

  // scene 8
  newScene('#scene8 > .trigger-0', '#text-scene8', 13, { opacity: '1' }, 70).addTo(controller);
  var scene8sub = newScene('#scene8 > .trigger-0', '#scene8sub', 3.2, { opacity: '1' }, 70).addTo(controller);
  scene8sub.triggerHook(0.1);
  scene8sub.setPin('#scene8sub');
  newScene('#scene8 > .trigger-10', '#swan-mom-8', 5.2, { opacity: '1', left: '10%' }, 180).addTo(controller);
  newScene('#scene8 > .trigger-20', '#swan-mom-8', 16, { left: '30%' }, 320).addTo(controller);
  newScene('#scene8 > .trigger-50', '#swan-mom-8', 6, { left: '70%' }, 220).addTo(controller);
  newScene('#scene8 > .trigger-70', '#swan-mom-8', 6, { left: '80%' }, 220).addTo(controller);
  newScene('#scene8 > .trigger-80', '#swan-mom-8', 2, { left: '100%', opacity: '0' }, 220).addTo(controller);
  
  newScene('#scene8 > .trigger-30', '#swan-bro-8', 6, { left: '10%', opacity: '1' }, 70).addTo(controller);
  newScene('#scene8 > .trigger-50', '#swan-bro-8', 2, { left: '50%' }, 120).addTo(controller);
  newScene('#scene8 > .trigger-70', '#swan-bro-8', 12, { left: '70%' }, 50).addTo(controller);
  newScene('#scene8 > .trigger-90', '#swan-bro-8', 12, { left: '100%', opacity: '0' }, 150).addTo(controller);
  
  newScene('#scene8 > .trigger-40', '#swan-8', 10, { opacity: '1', left: '10%' }, 120).addTo(controller);
  newScene('#scene8 > .trigger-60', '#swan-8', 12, { left: '20%' }, 80).addTo(controller);
  newScene('#scene8 > .trigger-70', '#swan-8', 12, { left: '40%' }, 60).addTo(controller);
  newScene('#scene8 > .trigger-80', '#swan-8', 12, { left: '60%' }, 60).addTo(controller);
  newScene('#scene8 > .trigger-100', '#swan-8', 12, { left: '100%', opacity: '0' }, 60).addTo(controller);

  newScene('#scene8-aux > .trigger-10', '#final-text', 20, {
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '50px',
    zIndex: '13',
    opacity: '1'
  }, 120).addTo(controller);

});

function newScene(activateOn, element, time, animation, duration) {
  return new ScrollMagic.Scene({
    triggerElement: activateOn,
    duration: duration
  })
    .setTween(element, time, animation)
    // .addIndicators({ name: `${element}` });
}
