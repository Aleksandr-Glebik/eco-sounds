
const audio = document.querySelector('.audio')
const btnPlay = document.querySelector('.btn-play')
const btnPlayIcon = document.querySelector('.play > use')
const navList = document.querySelector('.nav-list')
const objVoiceBirds = {
    'solovey': './assets/audio/solovey.mp3',
    'drozd': './assets/audio/drozd.mp3',
    'zarynka': './assets/audio/zarynka.mp3',
    'javoronok': './assets/audio/javoronok.mp3',
    'slavka': './assets/audio/slavka.mp3',
    'forest': './assets/audio/forest.mp3',
}

let isPlay = false

btnPlay.addEventListener('click', playAudio)
navList.addEventListener('click', getNameBirds)

function playAudio() {
    if (!isPlay) {
        audio.currentTime = 0
        audio.play()
        isPlay = true
        changeIconPlayer(isPlay)
    } else if (isPlay) {
        audio.pause()
        isPlay = false
        changeIconPlayer(isPlay)
    }
}

function getNameBirds(event) {
    if (event.target.classList.contains('btn-birds')) {
        let value = event.target.dataset.birds
        // console.log('value', value);
        changeAudio(value)
    }
}

function changeAudio(value) {
    let src = objVoiceBirds[value]
    // console.log('src', src);
    // console.log('src get', audio.getAttribute('src', src));
    audio.setAttribute('src', src)
    isPlay = false
    playAudio()
    changeIconPlayer(isPlay)

}

function changeIconPlayer(isPlay) {
    if (isPlay) {
        btnPlayIcon.setAttribute('xlink:href', '../eco-sounds/assets/svg/sprite.svg#pause')
    } else if (!isPlay) {
        btnPlayIcon.setAttribute('xlink:href', '../eco-sounds/assets/svg/sprite.svg#play')
    }
}

