import './Gamefield.css';
import Stars from "./Stars"
import ShipController from "./ShipController"
import config from "../config/GameConfig"
import { starSetting, starBlink } from '../utils/starHandler'

export default function Gamefield() {
  let { stars, gamearea, ship, hotkey } = config
  return (
    <div className="gamefield">
      <Stars blinkInterval={stars.blinkInterval} total={stars.total} elements={starSetting} effects={starBlink} />
      <ShipController ship={ship} hotkey={hotkey} area={gamearea} />
    </div>
  );
}

