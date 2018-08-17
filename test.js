const ctxAudio = new (window.AudioContext || window.webkitAudioContext)()

const oscillator = ctxAudio.createOscillator();

oscillator.type = 'triangle'; //you can change to type square, sine, etc.
//oscillator.start(); <--- it was working, but placing the .start method within the function below is not working

const clickableArea = document.getElementById('buttons');

let connect = false;
clickableArea.addEventListener('click', 
    (event) => {
        let elemClicked = event.target;
        console.log(elemClicked);
        if (elemClicked.id === 'btn_1') {
            oscillator.frequency.value = 200;
        } else {
            oscillator.frequency.value = 250;
        }
        oscillator.start(); // error: "InvalidStateError: An attempt was made to use an object that is not, or is no longer, usable"
        if (connect) oscillator.disconnect(ctxAudio.destination)
        else oscillator.connect(ctxAudio.destination);
        connect = !connect;
});