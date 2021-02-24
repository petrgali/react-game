import { useEffect, useState } from "react"
import '../css/stars.css'
import SingleStar from "./SingleStar"
import config from "../config/GameConfig"
import { starSetting, starBlink } from '../utils/starHandler'

export default function Stars() {
    let { stars } = config
    let [count, setCount] = useState(0)
    useEffect(() => {
        let interval = setInterval(() => {
            setCount(count + 1)
            starBlink()
        }, stars.blinkInterval)
        return () => clearInterval(interval)
    })
    return (
        <div className="stars field">
            {starSetting.map((elem, idx) => <SingleStar key={idx} position={elem} />)}
        </div>
    )
}