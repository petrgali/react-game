import config from "../config/GameConfig"
export { starBlink, starSetting }

const getRandomPos = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
}
const starSetting = (() => {
    let starsPos = []
    for (let idx = 0; idx < config.stars.total; idx++) {
        let x = getRandomPos(config.stars.offset, config.gamearea.width)
        let y = getRandomPos(config.stars.offset, config.gamearea.height)
        starsPos.push({ top: y, left: x })
    }
    return starsPos
})()
const starBlink = (() => {
    let stars = document.querySelectorAll('#star')
    for (let idx = 0; idx < config.stars.total - Math.floor(config.stars.total / 2); idx++) {
        stars[idx].classList.toggle('white')
    }
    for (let idx = Math.floor(config.stars.total / 2); idx < config.stars.total; idx++) {
        stars[idx].classList.toggle('hidden')
    }
})