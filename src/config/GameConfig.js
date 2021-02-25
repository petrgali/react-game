const config = {
    sounds: [
        "/shot.mp3",
        "/explode.mp3"
    ],
    effects: {
        shot: 0,
        explode: 1
    },
    hotkey: {
        shipLeft: "ArrowLeft",
        shipRight: "ArrowRight",
        shipFire: "Space",
        escape: "Escape",
        // confirm: "Enter"
    },
    gamearea: {
        width: 500,
        height: 550,
        offset: 8,
        background: '/bg-space1.gif'
    },
    stars: {
        total: 30,
        offset: 5,
        blinkInterval: 1300,
    },
    ship: {
        top: 500,
        left: 240,
        width: 32,
        speed: 7,
        skin: '/GLX_Galaxip.png',
        refreshInterval: 15,
    },
    bullet: {
        initOffsetLeft: 14,
        initOffsetTop: -6,
        height: 5,
        speed: 10,
        refreshInterval: 15
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
    ]

}

export default config