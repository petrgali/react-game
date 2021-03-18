import config from "../config/GameConfig"

// TODO1: function do only one task, here `statStorage` add new data and get data, depending on function argument
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
