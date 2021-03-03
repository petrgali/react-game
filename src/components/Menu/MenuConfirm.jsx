import { useEffect } from "react"

import config from "../../config/GameConfig"

export default function Confirm(props) {
    let { hotkey } = config
    useEffect(() => {
        props.SFX.menu.play()
    }, [])
    useEffect(() => {
        if (props.controls[hotkey.confirm]) props.quitConfirm()
    })
    return (
        <div className="testitem blink">
            <div>{props.message}</div>
        </div>
    )
}