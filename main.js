const gSecretAnswers = ['גוזל', 'זחל'];
const theSong = new Audio('./audio/loveSong.mp3');

const onClickHandler = (ev) => {
    ev && ev.preventDefault();
    const { value } = document.querySelector('.baba');
    if (!value || !gSecretAnswers.includes(value)) {
        document.querySelector('.wrong').classList.remove('hide');
        document.querySelector('input').classList.add('red-border');
        setTimeout(() => {
            document.querySelector('.wrong').classList.add('hide');
            document.querySelector('input').classList.remove('red-border');
        }, 1000);
    } else {
        document.querySelector('.first').classList.add('hidden');
        document.querySelector('.second').classList.remove('hidden');
        theSong.play();
    }
}


const showThird = () => {
    document.querySelector('.second').classList.add('hidden');
    document.querySelector('.third').classList.remove('hidden');
}

const showFourth = () => {
    document.querySelector('.third').classList.add('hidden');
    document.querySelector('.fourth').classList.remove('hidden');
}

const showFifth = () => {
    document.querySelector('.fourth').classList.add('hidden');
    document.querySelector('.fifth').classList.remove('hidden');
}