
const audio = document.querySelector('.audio')
const btnPlay = document.querySelector('.btn-play')
let isPlay = false

btnPlay.addEventListener('click', playAudio)

function playAudio() {
    if (!isPlay) {
        audio.currentTime = 0
        audio.play()
        isPlay = true
    } else if (isPlay) {
        audio.pause()
        isPlay = false
    }
}

