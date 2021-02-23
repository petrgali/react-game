import { useEffect, useState } from "react"
import Bullet from "./Bullet"
export default function BulletController(props) {
    let [bullet, addBullet] = useState()
    useEffect(() => {
        if (props.state[props.hotkey.shipFire] && !bullet) {
            addBullet({ left: props.init.left + 14, top: props.init.top - 6 })
        }
    }, [props])
    
    if (!!bullet) {
        return (
            <div className="bullets">
                <Bullet
                    init={{ left: bullet.left, top: bullet.top }}
                    removeBullet={() => addBullet()} />
            </div>
        )
    }
    return (
        <div className="bullets"></div>
    )
}