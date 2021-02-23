import "../css/Bullet.css"
import { useState, useEffect } from "react"

export default function Bullet(props) {
    let [top, setTop] = useState(props.init.top)
    useEffect(() => {
        let interval = setInterval(() => {
            setTop(top - 5)
            if (top <= 0) props.removeBullet()
        }, 10)
        return () => clearInterval(interval)
    }, [top])
    return (
        <div className="bullet"
            style={{ transform: `translate(${props.init.left}px, ${top}px)` }}>
        </div>
    )
}