function playSound (selectorAudio) {

   const element = document.querySelector(selectorAudio);

   if (element && element.localName === 'audio') {
            element.play();
        }
    else {
        alert('Element not found or invalid selector');
    }
}

const buttonList = document.querySelectorAll('.tecla');


for (let contador = 0; contador < buttonList.length; contador++) {

    const button = buttonList[contador];
    const instrument = button.classList[1];
    const idAudio = `#som_${instrument}`;

    button.onclick = function () {
        playSound(idAudio);
    }

    button.onkeydown = function (event) {

        if (event.code === 'Space' || event.code === 'Enter') {
            button.classList.add('ativa');
        }
    }

    button.onkeyup = function () {
        button.classList.remove('ativa');
    }

}