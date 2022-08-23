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

player.setCurrentTime(localStorage.getItem(CURRENT_TIME)).then(function (seconds) {
      
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
        break;
        default:
        break;
    }
      
});