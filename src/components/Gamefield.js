import '../css/game.css';
import Controller from "./Controller"
import config from "../config/GameConfig"

import { useEffect, useState } from 'react';
import MenuScreen from "./MenuScreen"
import useEvent from "../hooks/useEvent"

export default function Gamefield() {
  let { gamearea, ship, hotkey, bullet } = config
  let [controlState, setState] = useState({})
  let [gameState, updateGameState] = useState({ welcome: true, play: false })

  useEvent("keydown", (event) => setState({ ...controlState, [event.code]: true }))
  useEvent("keyup", (event) => setState({ ...controlState, [event.code]: false }))

  useEffect(() => {
    if (controlState[hotkey.action]) updateGameState({
      welcome: !gameState.welcome,
      play: !gameState.play
    })
  }, [controlState])
  let enemies = [
    { left: 160, top: 50, destructible: true },
    { left: 220, top: 50, destructible: true },
    { left: 280, top: 50, destructible: true },
    { left: 340, top: 50, destructible: true },
    { left: 400, top: 50, destructible: true },
  ]

  if (gameState.welcome)
    return (
      <div className="game field" >
        <MenuScreen msg={'press Enter to start'} />
      </div>
    )
  if (gameState.play)
    return (
      <div className="game field">
        <Controller
          area={gamearea}
          ship={ship}
          bullet={bullet}
          hotkey={hotkey}
          enemies={enemies}
          controls={controlState}
        />
      </div>

    )
}

