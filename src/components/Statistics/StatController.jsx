import ScoreInformer from "../Informer/ScoreInformer"
import Credentials from "../Statistics/Credentials"
import { useState, useEffect } from "react"
export default function StatController(props) {
    let [time, updateTime] = useState(0)
    let [player, updatePlayer] = useState('')
    useEffect(() => {
        let interval = setInterval(() => {
            updateTime(time += 1)
        }, 1000)
        return () => clearInterval(interval)
    }, [time])
    useEffect(() => {
        props.updatePlayer(time, player)
    }, [player])
    return (
        <section>
            {props.gameState.stat
                ? <Credentials
                    player={player}
                    updatePlayer={(name) => updatePlayer(name)}
                    control={props.controlState}
                    statComplete={() => props.statComplete()} />
                : <ScoreInformer
                    bulletCount={props.bulletCount}
                    time={time}
                />
            }
        </section>
    )
}