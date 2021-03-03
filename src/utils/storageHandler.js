import config from "../config/GameConfig"

export const statStorage = (playerStat) => {
    let stat = JSON.parse(window.localStorage.getItem("stat")) || []
    if (playerStat) {
        stat.unshift(playerStat)
        window.localStorage.setItem("stat", JSON.stringify(stat))
    }
    if (stat.length >= config.highscoreCapacity)
        return stat.slice(0, config.highscoreCapacity)
    return stat
}