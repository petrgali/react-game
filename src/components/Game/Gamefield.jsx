import '../../css/game.css';
import Controller from "./Controller"
import config from "../../config/GameConfig"
import { useEffect, useState } from 'react'
import MenuScreen from "../Menu/MenuScreen"
import useEvent from "../../hooks/useEvent"
import { SFX } from "../../utils/audioProvider"
import goFullscreen from "../../utils/goFullscreen"
import StatController from '../Statistics/StatController';


export default function Gamefield() {
  let { enemyFleet, gamearea, ship, hotkey, bullet } = config
  let [controlState, setState] = useState({})
  let [gameState, updateGameState] = useState({ welcome: true, play: false, quitShow: false, stat: false })
  let [bgStyle, updateStyle] = useState({ backgroundImage: `url(${gamearea.background.default})` })
  let [skin, updateSkin] = useState(ship.skin.default)
  let [bulletCount, updateBullet] = useState(0)
  let [playerStat, updatePlayerStat] = useState({})

  SFX.mainTheme.pause()
  SFX.mainTheme.play()
  let enemies = JSON.parse(JSON.stringify(enemyFleet))
  useEvent("keydown", (event) => setState({ ...controlState, [event.code]: true }))
  useEvent("keyup", (event) => setState({ ...controlState, [event.code]: false }))

  useEffect(() => {
    if (!gameState.play) updateBullet(0)
  }, [gameState])
 
  if (controlState[hotkey.fullscreen] && !gameState.stat) goFullscreen()
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
        <StatController
          bulletCount={bulletCount}
          gameState={gameState}
          control={controlState}
          updatePlayer={(time, name) => updatePlayerStat({ player: name, time: time, bullets: bulletCount })}
          statComplete={() => updateGameState({
            ...gameState,
            stat: !gameState.stat,
            play: !gameState.play,
            welcome: !gameState.welcome
          })}
        />
        {gameState.stat
          ? null
          : <Controller
            area={gamearea}
            ship={ship}
            bullet={bullet}
            hotkey={hotkey}
            enemies={enemies}
            controls={controlState}
            gameState={gameState}
            SFX={SFX}
            skin={skin}
            addBullet={() => updateBullet(bulletCount += 1)}
            quitMenu={() => updateGameState({
              ...gameState,
              quitShow: !gameState.quitShow
            })}
            statMode={() => updateGameState({
              ...gameState,
              stat: !gameState.stat
            })}
            quitConfirm={() => updateGameState({
              ...gameState,
              quitShow: !gameState.quitShow,
              welcome: !gameState.welcome,
              play: !gameState.play
            })}
          />
        }
      </div>
    )
}

