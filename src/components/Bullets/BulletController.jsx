import { useEffect, useState } from "react"
import Bullet from "./Bullet"
import { SFX } from "../../utils/audioProvider"

export default function BulletController(props) {
    let [bullet, updateBullet] = useState()
    useEffect(() => {
        if (props.state[props.hotkey.shipFire] && !bullet) {
            props.addBullet()
            SFX.shot.play()
            updateBullet({
                left: props.init.left + props.bullet.initOffsetLeft,
                top: props.init.top + props.bullet.initOffsetTop
            })
        }
        if (props.init.remove) {
            updateBullet()
            props.confirmRemove()
        }
    }, [props])

    if (!bullet) {
        return (
            null
        )
    }
    return (
        <div className="bullets">
            <Bullet
                bullet={props.bullet}
                init={{ left: bullet.left, top: bullet.top }}
                removeBullet={() => updateBullet()}
                inform={(msg) => props.inform(msg)} />
        </div>
    )
}