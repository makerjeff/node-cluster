// using NPM aplay package.
// https://www.npmjs.com/package/aplay

const Sound = require('aplay');


let music = new Sound();

let track_url = './audio/ok.wav';

music.play(track_url);


music.on('complete', () => {
    console.log('music done playing. ');
});
