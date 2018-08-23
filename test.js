const context = new (window.AudioContext || window.webkitAudioContext)()

/*
const oscillator = context.createOscillator();
oscillator.type = 'triangle'; //you can change to type square, sine, etc.
oscillator.frequency = 180;
oscillator.start();

const oscillator220 = context.createOscillator();
oscillator220.type = 'square';
oscillator220.frequency = 220;
oscillator220.start();

const clickableArea = document.getElementById('buttons');

let osci_connect = false;
let osci220_connect = false;

clickableArea.addEventListener('click', 
    (event) => {
        let elemClicked = event.target;
        if (elemClicked.id === 'btn_1') {
            if (osci_connect) oscillator.disconnect(context.destination)
            else oscillator.connect(context.destination);
            osci_connect = !osci_connect;
        } else if (elemClicked.id === 'btn_2') {
            if (osci220_connect) oscillator220.disconnect(context.destination)
            else oscillator220.connect(context.destination);
            osci220_connect = !osci220_connect;
        }
});


 * All the above is working fine, but 
 * In order to build several oscillators dynamically:
 * Oscillator Class

const oscillators = [a, b, c];

 Oscillator = function(oscillators.a, type, frequency) {
     this.name = this.newName();
     this.type = type;
     this.frequency = frequency;
 }


* 
 **/

const oscillators = []; //a list of potential oscillators

/*user fills form indicating type and frequency,
clicks on start oscillator,
so at the end there are three arguments passed:
oscillator container (a,b,c, depending on form filled), type, and frequency.
Let's wrap it all into a func */

const Oscillator = function(n, type, frequency) { //n number, type string, frequency number
    oscillators[n] = context.createOscillator();
    oscillators[n].type = type;
    oscillators[n].frequency = frequency;
    oscillators[n].start();
    oscillators[n].isPlaying = false; //in this property we will store the oscillator is current playing status (either playing or not playing)
}


 //when user clicks on Play/Stop btn
 const play = function(n) {
     if (isPlaying) {
         oscillators[n].disconnect(context.destination);
     } else {
         oscillators[n].connect(context.destination);
        }
    isPlaying = !isPlaying;
 }

 //