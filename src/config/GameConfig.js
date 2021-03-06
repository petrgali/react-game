const config = {
    controlSkins: {
        fire: "/assets/controls/Space.png",
        left: "/assets/controls/Left.png",
        right: "/assets/controls/Right.png",
        confirm: "/assets/controls/Enter.png",
        escape: "/assets/controls/KeyQ.png",
        fullscreen: "/assets/controls/KeyF.png",
        confirm: "/assets/controls/Enter.png",
    },
    highscoreCapacity: 10,
    name: {
        length: 10,
        sanitize: [" ", "<", ">"]
    },
    musicConfig: {
        on: true,
        pic: "/assets/game/sound_on.png"
    },
    fxConfig: {
        on: true,
        pic: "/assets/game/sound_on.png"
    },
    sounds: [
        "/sounds/shot.mp3",
        "/sounds/explode.mp3",
        "/sounds/menu.mp3",
        "/sounds/complete.mp3",
        "/sounds/bg_music.ogg"
    ],
    effect: {
        shot: 0,
        explosion: 1,
        menu: 2,
        complete: 3,
        theme: 4
    },
    icons: {
        sound: {
            enable: "/assets/game/sound_on.png",
            disable: "/assets/game/sound_off.png"
        }
    },
    hotkey: {
        shipLeft: "ArrowLeft",
        shipRight: "ArrowRight",
        shipFire: "Space",
        escape: "KeyQ",
        confirm: "Enter",
        fullscreen: "KeyF"
    },
    gamearea: {
        width: 500,
        height: 550,
        offset: 8,
        background: {
            default: '/assets/game/bg_space_1.gif',
            optional: '/assets/game/bg_space_2.gif'
        }
    },
    ship: {
        top: 500,
        left: 240,
        width: 32,
        speed: 7,
        skin: {
            default: '/assets/game/GLX_Galaxip_1.png',
            optional: '/assets/game/GLX_Galaxip_2.png'
        },
        refreshInterval: 15,
    },
    bullet: {
        initOffsetLeft: 14,
        initOffsetTop: -6,
        height: 5,
        speed: 10,
        refreshInterval: 20
    },
    enemy: {
        width: 24,
        height: 14,
        skin: "/assets/game/UFO_enemy.png",
        explode: "assets/game/explosion.png"
    },
    enemyFleet: [
        { left: 100, top: 50, destructible: true },
        { left: 160, top: 50, destructible: true },
        { left: 220, top: 50, destructible: true },
        { left: 280, top: 50, destructible: true },
        { left: 340, top: 50, destructible: true },
        { left: 400, top: 50, destructible: true },
        { left: 130, top: 100, destructible: true },
        { left: 190, top: 100, destructible: true },
        { left: 250, top: 100, destructible: true },
        { left: 310, top: 100, destructible: true },
        { left: 370, top: 100, destructible: true },
        { left: 100, top: 150, destructible: true },
        { left: 160, top: 150, destructible: true },
        { left: 220, top: 150, destructible: true },
        { left: 280, top: 150, destructible: true },
        { left: 340, top: 150, destructible: true },
        { left: 400, top: 150, destructible: true }
    ]

}

export default config