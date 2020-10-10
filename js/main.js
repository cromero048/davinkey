document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // used to implement sequence of input
    // let lastKeyTime = Date.now();
    keyMapper();

    function keyMapper(callback){

        document.addEventListener('keydown', event => {
            // all available key input -- insensitive alphanumeric
            const charList = 'abcdefghijklmnopqrstuvwxyz0123456789'
            const key = event.key.toLowerCase();

            const currentTime = Date.now();
            let buffer = [];
            // only use for sequences
            // if (currentTime - lastKeyTime > 250) {
            //     buffer = [];
            // }

            if (charList.indexOf(key) === -1) return;
            buffer.push(key);
            // lastKeyTime = currentTime;
            // console.log(buffer);
            callback(buffer);
            
        });
    };
    function updateBackground(buffed){
        const container = document.querySelector('#background');
            container.style.backgroundImage = `url(images/${buffed.join('')}.img)`;
    }
});
