const ctxAudio = new (window.AudioContext || window.webkitAudioContext)()

const oscillator = ctxAudio.createOscillator();

oscillator.type = 'triangle'; //you can change to type square, sine, etc.
oscillator.frequency.value = 200; 
oscillator.start();

const button = document.getElementById('btn');


let connect = false;
button.addEventListener('click', 
    function(){
        if (connect) oscillator.disconnect(ctxAudio.destination)
        else oscillator.connect(ctxAudio.destination);
        connect = !connect;
});