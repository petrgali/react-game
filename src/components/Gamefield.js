import './Gamefield.css';
import Stars from "./Stars"
import Ship from "./Flagship"
import config from "../config/Config"
import { starSetting, starBlink } from '../utils/starHandler'

export default function Gamefield() {
  let { blinkInterval, starsCount, shipTop,shipLeft } = config
  let starArray = starSetting
  return (
    <div className="gamefield">
      <Stars blink={blinkInterval} total={starsCount} elements={starArray} effects={starBlink}/>
      <Ship top={shipTop} left={shipLeft}/>
    </div>
  );
}


