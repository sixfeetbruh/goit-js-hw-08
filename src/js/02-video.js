
import Player from '@vimeo/player';
import { save, load } from './storage';
const throttle = require('lodash.throttle');

const iframe = document.querySelector(['#vimeo-player']);
const player = new Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";
const currentTime = load(LOCALSTORAGE_KEY);

player.setCurrentTime(currentTime).catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            console.error('the time was less than 0 or greater than the video’s duration');
            break;
    }
});

player.on('timeupdate', throttle(saveCurrentTimeToStorage, 1000));

function saveCurrentTimeToStorage(data) {
    save(LOCALSTORAGE_KEY, data.seconds);
    console.log('Time:',data.seconds);
};