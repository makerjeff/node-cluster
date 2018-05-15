/* prototype of soundboard server (controlled over socket.io)
* by Jefferson Wu 05/15/2018 
*
* NPM pkgs used: web-audio-api, node-speaker
* https://www.npmjs.com/package/web-audio-api
* https://www.npmjs.com/package/speaker
*/

const AudioContext      = require('web-audio-api').AudioContext;
const speaker           = require('speaker');
const fs                = require('fs');

let track1              = './audio/ok.ogg';

let context             = new AudioContext();

context.outStream = new speaker({
    channels: context.format.numberOfChannels,
    bitDepth: context.format.bidDepth,
    sampleRate: context.format.sampleRate
});

function play(audio_buffer) {
    if (!audio_buffer) {
        console.log('no audio file designated. ');
        return;
    }

    let buffer_source = context.createBufferSource();

    buffer_source.connect(context.destination);
    buffer_source.buffer = audio_buffer;
    buffer_source.loop = false;
    buffer_source.start(0);
}

let audio_data = fs.readFileSync(track1);

let audio_buffer_1, audio_buffer_2;

context.decodeAudioData(audio_data, function(audio_buffer) {
    audio_buffer_1 = audio_buffer;
});


function play() {
    console.log('playing clip');
    play(audio_buffer_1);
}

// fire the lasers!
play();