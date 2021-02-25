import '../../css/game.css';
import Controller from "./Controller"
import config from "../../config/GameConfig"
import { useState } from 'react';
import MenuScreen from "../Menu/MenuScreen"
import useEvent from "../../hooks/useEvent"
import { SFX } from "../../utils/audioProvider"

export default function Gamefield() {
  SFX.init()
  let [controlState, setState] = useState({})
  let [gameState, updateGameState] = useState({ welcome: true, play: false, quitShow: false })

  let { effects, enemyFleet, gamearea, ship, hotkey, bullet } = config
  let style = { backgroundImage: `url(${gamearea.background})` }
  let enemies = JSON.parse(JSON.stringify(enemyFleet))
  useEvent("keydown", (event) => setState({ ...controlState, [event.code]: true }))
  useEvent("keyup", (event) => setState({ ...controlState, [event.code]: false }))

  if (gameState.welcome)
    return (
      <div className="game field" style={style}>
        <MenuScreen
          startGame={() => updateGameState({
            welcome: !gameState.welcome,
            play: !gameState.play
          })} />
      </div>
    )
  if (gameState.play)
    return (
      <div className="game field" style={style}>
        <Controller
          area={gamearea}
          ship={ship}
          bullet={bullet}
          hotkey={hotkey}
          enemies={enemies}
          controls={controlState}
          gameState={gameState}
          effects={effects}

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

