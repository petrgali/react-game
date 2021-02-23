import '../css/Gamefield.css';
import Stars from "./Stars"
import Controller from "./Controller"

import config from "../config/GameConfig"
import { starSetting, starBlink } from '../utils/starHandler'

export default function Gamefield() {
  let { stars, gamearea, ship, hotkey, bullet } = config
  let enemies = [
    { left: 20, top: 50 },
    { left: 60, top: 50 },
    { left: 100, top: 50 },
    { left: 140, top: 50 },
    { left: 180, top: 50 },
  ]
  return (
    <div className="gamefield">
      <Stars
        blinkInterval={stars.blinkInterval}
        total={stars.total}
        elements={starSetting}
        effects={starBlink} />
      <Controller
        area={gamearea}
        ship={ship}
        bullet={bullet}
        hotkey={hotkey}
        enemies={enemies} />

    </div>
  );
}

