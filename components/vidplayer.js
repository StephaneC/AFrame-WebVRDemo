  AFRAME.registerComponent('vid-player-hover', {
    init: function () {
      console.log('vid-player-hover init');
      var data = this.data;
      var el = this.el;  // <a-box>
      el.addEventListener('mouseenter', function () {
        console.log('will start play');
        el.play();
      });
      el.addEventListener('mouseleave', function () {
        console.log('will pause');
        el.pause();
      });
    }
  });

