import "../../css/bullets.css"
import { useState, useEffect } from "react"

export default function Bullet(props) {

    let [top, setTop] = useState(props.init.top)
    useEffect(() => {
        let interval = setInterval(() => {
            setTop(top - props.bullet.speed)
            props.inform({
                left: props.init.left,
                top: top
            })
            if (top < props.bullet.height) props.removeBullet()
        }, props.bullet.refreshInterval)
        return () => clearInterval(interval)
    }, [top])
    return (
        <div className="bullet"
            style={{ transform: `translate(${props.init.left}px, ${top}px)` }}>
        </div>
    )
}