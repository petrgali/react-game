import { useEffect, useState } from "react"
import config from "../../config/GameConfig"
import MenuBack from "./MenuBack"
import { SFX } from "../../utils/audioProvider"
import ShipSwitcher from "./ShipSwitcher"
import BgSwitcher from "./BgSwitcher"


export default function MenuOptions(props) {
    let { bullet, ship, gamearea, icons, musicConfig, fxConfig } = config
    let [value, setValue] = useState(100 / bullet.refreshInterval)
    let [volMaster, setMaster] = useState(SFX.mainTheme.volume())
    let [volEffects, setEffects] = useState(SFX.menu.volume())
    // TODO: two places of truth: musicConfig and musicConfig.on
    let [music, updateMusic] = useState(musicConfig.on)
    let [fx, updateFX] = useState(fxConfig.on)
    let [activeSkin, updateActive] = useState()
    let [activeBg, updateBg] = useState()

    // TODO: why its here
    let shipStyle = { width: 35 + 'px', padding: 2 + "%" }
    let bgStyle = { width: 25 + '%', padding: 2 + "%" }


    const checkMusic = () => {
        if (music) {
            updateMusic(false)
            // TODO: you change config, should store config as state of GameField, also store config in several useState, rerender other components which depends on changed config parameter
            musicConfig.on = false
            musicConfig.pic = icons.sound.disable
            SFX.mainTheme.stop()
        } else {
            updateMusic(true)
            musicConfig.on = true
            musicConfig.pic = icons.sound.enable
            SFX.mainTheme.play()
        }
    }
    const checkFX = () => {
        if (fx) {
            updateFX(false)
            fxConfig.on = false
            fxConfig.pic = icons.sound.disable
        } else {
            updateFX(true)
            fxConfig.on = true
            fxConfig.pic = icons.sound.enable
        }
        SFX.shot.mute(fx)
        SFX.explosion.mute(fx)
        SFX.complete.mute(fx)
        SFX.menu.mute(fx)
    }
    useEffect(() => {
        SFX.mainTheme.volume(volMaster)
    }, [volMaster])
    useEffect(() => {
        SFX.complete.volume(volEffects)
        SFX.shot.volume(volEffects)
        SFX.explosion.volume(volEffects)
        SFX.menu.volume(volEffects)
        SFX.menu.play()
    }, [volEffects])
    useEffect(() => {
        bullet.refreshInterval = 100 / value
    }, [value])

    return (
        <div className="options bg">
            {/* TODO: listitem as separate component MenuOption */}
            {/* TODO: create common component MenuOptionSwitcher on base of MenuOption  */}
            <div className="listitem">
                <div>background</div>
                <BgSwitcher
                    newBg={(bg) => props.newBg(bg)}
                    switchBg={(bg) => updateBg(bg)}
                    style={bgStyle}
                    gamearea={gamearea}
                    activeBg={activeBg}
                />
            </div>
            <div className="listitem">
                <div>mothership</div>
                <ShipSwitcher
                    newSkin={(skin) => props.newSkin(skin)}
                    switchShip={(skin) => updateActive(skin)}
                    style={shipStyle}
                    ship={ship}
                    activeSkin={activeSkin}
                />
            </div>
            {/* TODO: create common component MenuOptionRange on base of MenuOption  */}
            <div className="listitem">
                <div>blaster speed</div>
                <input type="range" min="5" max="20" step="1" value={value}
                    onChange={(elem) => setValue(elem.target.value)} />
            </div>
            <div className="listitem">
                <div>theme volume</div>
                <input type="range" min="0" max="1" step="0.1" value={volMaster}
                    onChange={(elem) => setMaster(elem.target.value)} />
            </div>
            <div className="listitem">
                <div>effects volume</div>
                <input type="range" min="0" max="1" step="0.1" value={volEffects}
                    onChange={(elem) => setEffects(elem.target.value)} />
            </div>
            <div className="listitem">
                <div className="choice">
                    <div>
                        <label>music</label>
                        <img src={musicConfig.pic} style={shipStyle}
                             /* TODO: onClick={checkMusic} */
                            onClick={() => checkMusic()} />
                    </div>
                    <div>
                        <label>FX</label>
                        <img src={fxConfig.pic} style={shipStyle}
                            onClick={() => checkFX()} />
                    </div>
                </div>
            </div>

            <MenuBack
                type={'listitem'}
                goBack={() => props.goBack()}
                text={"back"}
                SFX={props.SFX}
            />
        </div>
    )
}
