const ctxAudio = new (window.AudioContext || window.webkitAudioContext)()

const oscillator = ctxAudio.createOscillator();
oscillator.type = 'triangle'; //you can change to type square, sine, etc.
oscillator.frequency = 180;
oscillator.start();

const oscillator220 = ctxAudio.createOscillator();
oscillator220.type = 'square';
oscillator220.frequency = 220;
oscillator220.start();

/**
 * In order to build several oscillators:


 Oscillator = function() {
     this.name;
     this.type;
     this.frequencey;

 }

  * 
 */

const clickableArea = document.getElementById('buttons');

let osci_connect = false;
let osci220_connect = false;

clickableArea.addEventListener('click', 
    (event) => {
        let elemClicked = event.target;
        if (elemClicked.id === 'btn_1') {
            if (osci_connect) oscillator.disconnect(ctxAudio.destination)
            else oscillator.connect(ctxAudio.destination);
            osci_connect = !osci_connect;
        } else if (elemClicked.id === 'btn_2') {
            if (osci220_connect) oscillator220.disconnect(ctxAudio.destination)
            else oscillator220.connect(ctxAudio.destination);
            osci220_connect = !osci220_connect;
        }
        
});