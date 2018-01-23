// Object
var Body = {
  setColor: function(color) {
    document.querySelector('body').style.color = color;
  },
  setBackgroundColor: function(color) {
    document.querySelector('body').style.backgroundColor = color;
  },
  setMode: function(data) {
    document.querySelector('body').dataset.mode = data;
  }
}
var Links = {
  setColor:function(color) {
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length) {
      alist[i].style.color = color;
      i++;
    }
  }
}

// Handler
function nightDayHandler(self) {
  var target = document.querySelector('body');
  if(target.dataset.mode === 'night') {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    Body.setMode('day');
    self.innerHTML = 'Toggle - Night';
    Links.setColor('#22a1c4');
  } else {
    Body.setBackgroundColor('black');
    Body.setColor('white');
    Body.setMode('night');
    self.innerHTML = 'Toggle - Day';
    Links.setColor('powderblue');
  }
}
function nightHandler() {
  Body.setBackgroundColor('black');
  Body.setColor('white');
  document.querySelector('body').dataset.mode = 'night';
  var alist = document.querySelectorAll('a');
  var i = 0;
  while(i < alist.length) {
    alist[i].style.color = 'powderblue';
    i++;
  }
}
function dayHandler() {
  Body.setBackgroundColor('white');
  Body.setColor('black');
  document.querySelector('body').dataset.mode = 'day';
  var alist = document.querySelectorAll('a');
  var i = 0;
  while(i < alist.length) {
    alist[i].style.color = '#22a1c4';
    i++;
  }
}
