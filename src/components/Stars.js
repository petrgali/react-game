import { useEffect, useState } from "react"
import '../css/Stars.css'
import SingleStar from "./SingleStar"

export default function Stars(props) {
    let [count, setCount] = useState(0)
    useEffect(() => {
        let interval = setInterval(() => {
            setCount(count + 1)
            props.effects()
        }, props.blinkInterval)
        return () => clearInterval(interval)
    })
    return (
        <div className="stars">
            {props.elements.map((elem, idx) => <SingleStar key={idx} position={elem} />)}
        </div>
    )
}