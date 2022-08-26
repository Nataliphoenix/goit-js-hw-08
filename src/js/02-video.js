import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURRENT_TIME = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(evt) {

const currentTime = evt.seconds;
console.log(currentTime);
localStorage.setItem(CURRENT_TIME, currentTime);
      
};

restartCurrentTime();

function restartCurrentTime() {
    let savedCurrentTime = localStorage.getItem(CURRENT_TIME);
if (savedCurrentTime) {
    player.setCurrentTime(savedCurrentTime).then(function (seconds) { 
});
}
}


