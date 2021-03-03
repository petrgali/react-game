import config from '../config/GameConfig'

export default function detectCollision(bullet, aliens) {
    let { enemy } = config
    for (let [idx, alien] of Object.entries(aliens)) {
        if (bullet.left >= alien.left &&
            bullet.left <= alien.left + enemy.width &&
            bullet.top <= alien.top + enemy.height)
            return { id: +idx }
    }
    return null

}