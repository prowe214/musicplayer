var song = document.getElementsByTagName('i');
var h1 = document.getElementsByTagName('h1');

function stop() {
  var i = 0;
  while (i<song.length) {
    song[i].firstChild.pause();
    song[i].className = 'fa fa-play';
    h1[0].innerHTML = 'Select a Song!';
    i++;
  };
};


song[0].addEventListener('click', function() {
  if (song[0].className === 'fa fa-stop') {
    stop();
  } else {
    stop()
    song[0].firstChild.play();
    song[0].className = 'fa fa-stop';
    h1[0].innerHTML = 'Now Playing: Star Scat by Caravan Palace';
  };
});

song[1].addEventListener('click', function() {
  if (song[1].className === 'fa fa-play') {
    stop();
    song[1].firstChild.play();
    song[1].className = 'fa fa-stop';
    h1[0].innerHTML = 'Now Playing: Keasbey Nights by Streetlight Manifesto';
  } else { stop() };
});

song[2].addEventListener('click', function() {
  if (song[2].className === 'fa fa-play') {
    stop();
    song[2].firstChild.play();
    song[2].className = 'fa fa-stop';
    h1[0].innerHTML = 'Now Playing: Strobe by Deadmau5';
  } else { stop() };
});

song[3].addEventListener('click', function() {
  if (song[3].className === 'fa fa-play') {
    stop();
    song[3].firstChild.play();
    song[3].className = 'fa fa-stop';
    h1[0].innerHTML = 'Now Playing: Blood Sugar Sex Magik by Red Hot Chili Peppers';
  } else { stop() };
});

