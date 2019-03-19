 
 // Elements
  var canvas      = document.querySelector('.canvas');
  var outerRadius = document.querySelector('.outer-radius');
  var innerRadius = document.querySelector('.inner-radius');
  var diameter    = document.querySelector('.diameter');
  var startBtn    = document.querySelector('.start');
  var clearBtn    = document.querySelector('.clear');

  var ctx = canvas.getContext('2d'); // Canvas context

  function Spirograph(){
    var elem = elem;

    // Basic values

    var R,r,d;
    var x,y;
    var timer;
    var angle = 0;

    function getOuterRadius(){
      R = outerRadius.value;
    }

    function getInnerRadius(){
      r = innerRadius.value;
    }

    function getDiameter(){
      d = diameter.value;
    }

    function draw(){
      x = (R - r) * Math.cos(angle) + d * Math.cos((R - r)/r * angle);
      y = (R - r) * Math.sin(angle) - d * Math.sin((R - r)/r * angle);
      angle += 0.2;

      ctx.fillRect(400 + x, 400 + y, 1,1);
      
      timer = setTimeout(draw,10);
    }


    function clear(){
      ctx.clearRect(0, 0, 800, 800);
      clearTimeout(timer);
    }

    this.draw = draw;
    this.clear = clear;

    this.getOuterRadius = getOuterRadius;
    this.getInnerRadius = getInnerRadius;
    this.getDiameter    = getDiameter;

  };

  var drawing = new Spirograph();

  startBtn.onclick = function(){
    drawing.draw();
  };

  clearBtn.onclick = function(){
    drawing.clear();
  };  

  innerRadius.oninput = function(){
    drawing.getInnerRadius();
  };

  outerRadius.oninput = function(){
    drawing.getOuterRadius();
  };

  diameter.oninput = function(){
    drawing.getDiameter();
  };