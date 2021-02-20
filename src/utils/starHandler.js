import config from "../config/Config"
export { starBlink, starSetting }

const getRandomPos = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
}
const starSetting = (() => {
    let starsPos = []
    for (let idx = 0; idx < config.starsCount; idx++) {
        let x = getRandomPos(config.starsMinPoint, config.gameareaWidth)
        let y = getRandomPos(config.starsMinPoint, config.gameareaHeight)
        starsPos.push({ top: y, left: x })
    }
    return starsPos
})()
const starBlink = (() => {
    let stars = document.querySelectorAll('#star')
    for (let idx = 0; idx < config.starsCount - Math.floor(config.starsCount / 2); idx++) {
        stars[idx].classList.toggle('white')
    }
    for (let idx = Math.floor(config.starsCount / 2); idx < config.starsCount; idx++) {
        stars[idx].classList.toggle('hidden')
    }
})