
import { Howl } from "howler"
import config from "../config/GameConfig"
let { sounds, effect } = config

export const SFX = {
    mainTheme: new Howl({
        src: [sounds[effect.theme]],
        loop: true,
        volume: 1,
    }),
    menu: new Howl({
        src: [sounds[effect.menu]],
        volume: 0.3,
    }),
    shot: new Howl({
        src: [sounds[effect.shot]],
        volume: 0.3,
    }),
    explosion: new Howl({
        src: [sounds[effect.explosion]],
        volume: 0.3,
    })
}


