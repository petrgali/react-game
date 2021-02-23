const config = {
    hotkey: {
        shipLeft: "ArrowLeft",
        shipRight: "ArrowRight",
        shipFire: "Space",
    },
    gamearea: {
        width: 500,
        height: 550,
        offset: 8
    },
    stars: {
        total: 30,
        offset: 5,
        blinkInterval: 1500,
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
        speed: 15,
        refreshInterval: 15
    }
}

export default config