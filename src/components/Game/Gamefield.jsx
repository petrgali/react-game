import '../../css/game.css';
import Controller from "./Controller"
import config from "../../config/GameConfig"
import { useState } from 'react'
import MenuScreen from "../Menu/MenuScreen"
import useEvent from "../../hooks/useEvent"
import { SFX } from "../../utils/audioProvider"


export default function Gamefield() {
  let { enemyFleet, gamearea, ship, hotkey, bullet } = config
  let [controlState, setState] = useState({})
  let [gameState, updateGameState] = useState({ welcome: true, play: false, quitShow: false })
  let [bgStyle, updateStyle] = useState({ backgroundImage: `url(${gamearea.background.default})` })
  let [skin, updateSkin] = useState(ship.skin.default)

  const goFullscreen = () => {
    let elem = document.querySelector(".screen")
    if (!document.fullscreenElement) {
      elem.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
  }
  SFX.mainTheme.pause()
  SFX.mainTheme.play()
  let enemies = JSON.parse(JSON.stringify(enemyFleet))
  useEvent("keydown", (event) => setState({ ...controlState, [event.code]: true }))
  useEvent("keyup", (event) => setState({ ...controlState, [event.code]: false }))

  if (controlState[hotkey.fullscreen]) goFullscreen(true)

  if (gameState.welcome)
    return (
      <div className="game field" style={bgStyle}>
        <MenuScreen
          startGame={() => updateGameState({
            welcome: !gameState.welcome,
            play: !gameState.play
          })}
          bgStyle={bgStyle}
          newSkin={(skin) => updateSkin(skin)}
          newBg={(bg) => updateStyle(bg)}
        />
      </div>
    )
  if (gameState.play)
    return (
      <div className="game field" style={bgStyle}>
        <Controller
          area={gamearea}
          ship={ship}
          bullet={bullet}
          hotkey={hotkey}
          enemies={enemies}
          controls={controlState}
          gameState={gameState}
          SFX={SFX}
          skin={skin}
          quitMenu={() => updateGameState({ ...gameState, quitShow: !gameState.quitShow })}
          quitConfirm={() => updateGameState({
            ...gameState,
            quitShow: !gameState.quitShow,
            welcome: !gameState.welcome,
            play: !gameState.play
          })}
        />
      </div>

    )
}

