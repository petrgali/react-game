import { useEffect, useState } from "react"
import useEvent from "../../hooks/useEvent"
import config from "../../config/GameConfig"
import "../../css/statistics.css"

export default function Credentials(props) {
    let [warningOpen, updateWarning] = useState(false)
    let { name } = config

    const setName = (key) => {
        (key.length === 1 && !name.sanitize.includes(key) && !warningOpen)
            ? props.updatePlayer(props.player + key)
            : key === "Backspace"
                ? props.updatePlayer(props.player.slice(0, -1))
                : (key === "Enter" && props.player.length >= 3)
                    ? props.statComplete()
                    : props.updatePlayer(props.player)
    }
    useEffect(() => {
        props.player.length <= name.length
            ? updateWarning(false)
            : updateWarning(true)
    })
    useEvent("keydown", (event) => setName(event.key))
    return (
        <div className="statistics">
            <div>enter your name:</div>
            <div>{props.player}</div>
            {warningOpen ? <div>max name length reached!</div> : null}
        </div>

    )
}