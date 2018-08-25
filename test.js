const context = new (window.AudioContext || window.webkitAudioContext)()

/*
const oscillator = context.createOscillator();
oscillator.type = 'triangle'; //you can change to type square, sine, etc.
oscillator.frequency = 180;
oscillator.start();


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

 **/

const oscillators = []; //an array of potential oscillators

/*user fills indicates type and frequency via form,
clicks on start oscillator,
so at the end there are three arguments passed:
oscillator slot within array (0,1,2, depending on form filled), type, and frequency.
Let's wrap it all into a func */

const Oscillator = function(n, type, frequency) { 
    //n : number, type : string, frequency : number
    oscillators[n] = context.createOscillator();
    oscillators[n].type = type;
    oscillators[n].frequency = frequency;
    oscillators[n].start();
    oscillators[n].isPlaying = false; //in this property we will store the oscillator is current playing status (either playing or not playing)
}


 //when user clicks on Play/Stop btn
 const play = function(n) {
     let osc = oscillators[n];
     if (osc.isPlaying) {
        osc.disconnect(context.destination);
     } else {
        osc.connect(context.destination);
        }
    osc.isPlaying = !osc.isPlaying;
 }


const view = {
    setUpEventListener : function() {
        let oscillatorsBox = document.getElementById('oscillators_box');
        oscillatorsBox.addEventListener('click',
            (event) => {
                let target = event.target
                ,   parent = target.parentElement
                ,   granpa = parent.parentElement
                ,   index = Array.prototype.indexOf.call(granpa.children, parent);
                // index will be passed to Oscillator function as first parameter
                
                if (target.classList.contains('start')) {
                    console.log('you have clicked start osc btn');
                    //if btn clicked by user is a "start oscillator" btn
                    this.startOscillator(index);
                } else if (target.classList.contains('play')) {
                    console.log('you have clicked play osc');
                    //if the btn clicked is Play:
                    play(index);
                }

                
                

    })
    },

    startOscillator : function(n) {
        let oscillators = document.getElementsByClassName('oscillator')
        ,   osc         = oscillators[n]
        ,   type        = osc.querySelector('select').value
        ,   frequency   = osc.querySelector('input').value;
        console.log(`type is ${type} and freq is ${frequency}`); 
        //works but it updates constantly, I only want it to run after oscillator creation

        Oscillator(n, type, frequency);
    }
}

view.setUpEventListener();