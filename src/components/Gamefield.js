import '../css/Gamefield.css';
import Stars from "./Stars"
import Controller from "./Controller"
import config from "../config/GameConfig"
import { starSetting, starBlink } from '../utils/starHandler'

export default function Gamefield() {
  let { stars, gamearea, ship, hotkey } = config

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
        hotkey={hotkey} />
    </div>
  );
}

