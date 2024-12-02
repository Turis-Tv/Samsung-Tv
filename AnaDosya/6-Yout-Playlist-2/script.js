var videos = [
  {
    title: 'Porn Vod  1',
    url: 'http://video.eblinet.me/video/480/3.mp4',
    thumbnail: 'https://od.lk/s/OTFfMzE0ODk1MjZf/24.png'
  },
  {
    title: 'Porn Vod  2',
    url: 'http://video.eblinet.me/video/480/4.mp4',
    thumbnail: 'https://od.lk/s/OTFfMzE0ODk1MjZf/24.png'
  },
  {
    title: 'Porn Vod  3',
    url: 'http://video.eblinet.me/video/480/1.mp4',
    thumbnail: 'https://od.lk/s/OTFfMzE0ODk1MjZf/24.png'
  },
  {
    title: 'Porn Vod  4',
    url: 'http://video.eblinet.me/video/480/6.mp4',
    thumbnail: 'https://od.lk/s/OTFfMzE0ODk1MjZf/24.png'
  },
  {
    title: 'Porn Vod  5',
    url: 'http://video.eblinet.me/video/480/12.mp4',
    thumbnail: 'https://od.lk/s/OTFfMzE0ODk1MjZf/24.png'
  },
  {
    title: 'Porn Vod  6',
    url: 'http://video.eblinet.me/video/480/10.mp4',
    thumbnail: 'https://od.lk/s/OTFfMzE0ODk1MjZf/24.png'
  },
  {
    title: 'Porn Vod  7',
    url: 'http://video.eblinet.me/video/480/14.mp4',
    thumbnail: 'https://od.lk/s/OTFfMzE0ODk1MjZf/24.png'
  },
  {
    title: 'Porn Vod  8',
    url: 'http://video.eblinet.me/video/480/17.mp4',
    thumbnail: 'https://od.lk/s/OTFfMzE0ODk1MjZf/24.png'
  },
  {
    title: 'Porn Vod  9',
    url: 'http://video.eblinet.me/video/480/20.mp4',
    thumbnail: 'https://od.lk/s/OTFfMzE0ODk1MjZf/24.png'
  },
  {
    title: 'Porn Vod  10',
    url: 'http://video.eblinet.me/video/480/21.mp4',
    thumbnail: 'https://od.lk/s/OTFfMzE0ODk1MjZf/24.png'
  },
  {
    title: 'Porn Vod  11',
    url: 'http://video.eblinet.me/video/480/22.mp4',
    thumbnail: 'https://od.lk/s/OTFfMzE0ODk1MjZf/24.png'
  },
  {
    title: 'Porn Vod  12',
    url: 'http://video.eblinet.me/video/480/23.mp4',
    thumbnail: 'https://od.lk/s/OTFfMzE0ODk1MjZf/24.png'
  },
  {
    title: 'Porn Vod  13',
    url: 'http://video.eblinet.me/video/480/25.mp4',
    thumbnail: 'https://od.lk/s/OTFfMzE0ODk1MjZf/24.png'
  },
  {
    title: 'Porn Vod  14',
    url: 'http://video.eblinet.me/video/480/26.mp4',
    thumbnail: 'https://od.lk/s/OTFfMzE0ODk1MjZf/24.png'
  }
]

document.addEventListener('DOMContentLoaded', function() {
  
  var _bg = document.querySelector('.bg');
  var _video = document.querySelector('video');
  var _title = document.querySelector('.header .title');
  var _description = document.querySelector('.header .description');
  var _time = document.querySelector('.time');
  
  var loadVideo = function(url, title, thumbnail) {
    _video.src = url;
    _title.innerHTML = title;
    _bg.style.backgroundImage = 'url(' + thumbnail + ')';
    _video.play();
  }
  
  // Render video list
  
  var _list = document.querySelector('.list');
  var _listItem = document.querySelector('.media-item');
  var _listToggle = document.querySelector('[data-action = menu]');
  
  videos.forEach(function(video) {
    var _newListItem = _listItem.cloneNode(true);
    _newListItem.querySelector('.thumbnail').innerHTML = "<img src='" + video.thumbnail + "' />"
    _newListItem.querySelector('.title').innerHTML = video.title;
    _newListItem.addEventListener('click', function() {
      _list.querySelector('.active') && _list.querySelector('.active').classList.remove('active');
      _newListItem.classList.add('active');
      loadVideo(video.url, video.title, video.thumbnail);
    });
    _list.appendChild(_newListItem);
  });
  
  _listToggle.addEventListener('click', function() {
    toggle(_list);
  });
  
  
  // Map custom video controls
  
  var _header = document.querySelector('.header');
  var _controls = document.querySelector('.controls');
  var _playpause = _controls.querySelector('[data-action=playpause]');
  var _fullscreen = _controls.querySelector('[data-action=fullscreen]');
  var _progress = _controls.querySelector('progress');
  
  _playpause.addEventListener('click', function() {
    if (_video.paused) {
      _video.play();
      _playpause.innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Pause_font_awesome.svg/512px-Pause_font_awesome.svg.png" />';
    }
    else {
      _video.pause();
      _playpause.innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Play_font_awesome.svg/512px-Play_font_awesome.svg.png" />';
    }
  });
  
  _fullscreen.addEventListener('click', function() {
    //_video.webkitEnterFullscreen();
    hide(_header);
    hide(_controls);
    hide(_list);
  });
  
  document.addEventListener('keydown', function(e) {
    if (e.keyCode === 27) {
      show(_header);
      show(_controls);
      show(_list);
    }
  });
  
  _video.addEventListener('click', function(e) {
    show(_controls);
    show(_header);
  });
  
  _progress.addEventListener('click', function(e) {
    var x = (e.pageX  - this.offsetLeft) / this.offsetWidth;
    _video.currentTime = x * _video.duration;
  });
  
  _video.addEventListener('loadedmetadata', function() {
     _progress.setAttribute('max', _video.duration);
  });
  
  _video.addEventListener('ended', function() {
    _progress.value = _video.duration;
  })
  
  _video.addEventListener('timeupdate', function() {
    var currentTime = Math.floor(_video.currentTime);
    var timeString = new Date(currentTime * 1000).toISOString().substr(11, 8);
    
    _progress.value = currentTime;
    _time.innerHTML = timeString;
  });
  
});

function toggle(_e) {
  requestAnimationFrame(function() {
    _e.classList.contains('hidden') ? _e.classList.remove('hidden') : _e.classList.add('hidden');
  });
}

function hide(_e) {
  _e.classList.contains('hidden') ? undefined : _e.classList.add('hidden');
}

function show(_e) {
  _e.classList.contains('hidden') ?  _e.classList.remove('hidden') : undefined;
}