
const audio = document.querySelector('.audio')
const btnPlay = document.querySelector('.btn-play')
const btnPlayIcon = document.querySelector('.play > use')
const navList = document.querySelector('.nav-list')
const mainContainer = document.querySelector('.main')
const btnLogo = document.querySelector('.logo')
const objVoiceBirds = {
    'solovey': './assets/audio/solovey.mp3',
    'drozd': './assets/audio/drozd.mp3',
    'zarynka': './assets/audio/zarynka.mp3',
    'javoronok': './assets/audio/javoronok.mp3',
    'slavka': './assets/audio/slavka.mp3',
    'forest': './assets/audio/forest.mp3',
}
const objImgBirds = {
    'solovey': './assets/img/solovey.jpg',
    'drozd': './assets/img/drozd.jpg',
    'zarynka': './assets/img/zarynka.jpg',
    'javoronok': './assets/img/javoronok.jpg',
    'slavka': './assets/img/slavka.jpg',
    'forest': './assets/img/forest.jpg',
}

let isPlay = false

btnPlay.addEventListener('click', playAudio)
navList.addEventListener('click', getNameBirds)
btnLogo.addEventListener('click', returnInStart)

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
        changeImg(value)
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
        // btnPlayIcon.setAttribute('xlink:href', '../eco-sounds/assets/svg/sprite.svg#pause')
        btnPlayIcon.setAttribute('xlink:href', './assets/svg/sprite.svg#pause')
    } else if (!isPlay) {
        btnPlayIcon.setAttribute('xlink:href', './assets/svg/sprite.svg#play')
    }
}


function changeImg(value) {
    let srcImg = objImgBirds[value]
    mainContainer.style.backgroundImage = `url(${srcImg})`
}

function returnInStart() {
    isPlay = false
    audio.pause()
    mainContainer.style.backgroundImage = `url(${'./assets/img/forest.jpg'})`
    audio.setAttribute('src', './assets/audio/forest.mp3')
    btnPlayIcon.setAttribute('xlink:href', '../eco-sounds/assets/svg/sprite.svg#play')
}

