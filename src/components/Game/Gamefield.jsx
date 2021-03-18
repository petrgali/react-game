import '../../css/game.css';
import Controller from "./Controller"
import config from "../../config/GameConfig"
import { useEffect, useState } from 'react'
import MenuScreen from "../Menu/MenuScreen"
import useEvent from "../../hooks/useEvent"
import { SFX } from "../../utils/audioProvider"
import goFullscreen from "../../utils/goFullscreen"
import StatController from '../Statistics/StatController';
import { statStorage } from "../../utils/storageHandler"

export default function Gamefield() {
  // TODO: move that destructuring to import or may be use like config.bullet
  let { enemyFleet, gamearea, ship, hotkey, bullet } = config
  // TODO: const instead of let for useState
  let [controlState, setState] = useState({})
  // TODO: create separate variable GAME_INITIAL_STATE outside of component and use it
  // TODO: you store welcome and play, I think welcome === !play and play === !welcome ALWAYS, is it true?
  // TODO: I would store only `phase` = ['play', 'welcome', ...] because user can be only in one state at one time -> easier if-else below
  let [gameState, updateGameState] = useState({ welcome: true, play: false, quitShow: false, stat: false })
  let [bgStyle, updateStyle] = useState({ backgroundImage: `url(${gamearea.background.default})` })
  let [skin, updateSkin] = useState(ship.skin.default)
  let [bulletCount, updateBullet] = useState(0)
  let [playerStat, updatePlayerStat] = useState({})
  let [count, setCount] = useState(0)
  // TODO: if you want just copy array use spread operator [...enemyFleet]
  let enemies = JSON.parse(JSON.stringify(enemyFleet))

  // TODO: ideal way -> setState(prevState => ({ ...prevState.controlState }))
  // QUEST:
  useEvent("keydown", (event) => setState({ ...controlState, [event.code]: true }))
  useEvent("keyup", (event) => setState({ ...controlState, [event.code]: false }))

  useEffect(() => {
    if (!gameState.play) updateBullet(0)
  }, [gameState])

  if (controlState[hotkey.fullscreen] && !gameState.stat) goFullscreen()
  if (gameState.welcome)
    return (
      /* TODO: the same container for both return -> <div className="game field" style={bgStyle}> */
      <div className="game field" style={bgStyle}>
        <MenuScreen
          startGame={() => updateGameState({
            welcome: !gameState.welcome,
            play: !gameState.play
          })}
          playerStat={playerStat}
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
          updatePlayer={(name) =>
            updatePlayerStat({
              ...playerStat,
              player: name,
            })}
          updateTime={(time) => updatePlayerStat({
            ...playerStat,
            time: time,
            bullets: bulletCount
          })}
          statComplete={() => {
            statStorage(playerStat)
            updateGameState({
              ...gameState,
              stat: !gameState.stat,
              play: !gameState.play,
              welcome: !gameState.welcome
            })
          }
          }
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

