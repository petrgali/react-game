const config = {
    name: {
        length: 10,
        sanitize: [" ", "<", ">"]
    },
    musicConfig: {
        on: true,
        pic: "/sound_on.png"
    },
    fxConfig: {
        on: true,
        pic: "/sound_on.png"
    },
    sounds: [
        "/shot.mp3",
        "/explode.mp3",
        "/menu.mp3",
        "/complete.mp3",
        "/bg_music.ogg"
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
            enable: "/sound_on.png",
            disable: "/sound_off.png"
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
            default: '/bg_space_1.gif',
            optional: '/bg_space_2.gif'
        }
    },
    ship: {
        top: 500,
        left: 240,
        width: 32,
        speed: 7,
        skin: {
            default: '/GLX_Galaxip_1.png',
            optional: '/GLX_Galaxip_2.png'
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
        height: 14
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