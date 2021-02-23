import { useEffect, useState } from "react"
import Bullet from "./Bullet"

export default function BulletController(props) {
    let [bullet, updateBullet] = useState()
    useEffect(() => {
        if (props.state[props.hotkey.shipFire] && !bullet) {
            updateBullet({
                left: props.init.left + props.bullet.initOffsetLeft,
                top: props.init.top + props.bullet.initOffsetTop
            })
        }
    }, [props])
    if (!bullet) {
        return (
            <div className="bullets"></div>
        )
    }
    return (
        <div className="bullets">
            <Bullet
                bullet={props.bullet}
                init={{ left: bullet.left, top: bullet.top }}
                removeBullet={() => updateBullet()} 
                inform={(msg)=> props.inform(msg)}/>
        </div>
    )
}