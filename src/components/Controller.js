import { useEffect, useState } from 'react';
import Ship from './Ship'
import useEvent from "../hooks/useEvent"
import BulletController from './BulletController';
import EnemiesContoller from "./EnemiesController"
export default function Controller(props) {
    let [position, setPosition] = useState({
        left: props.ship.left,
        top: props.ship.top
    })
    let [bullet, setBullet] = useState()
    let [constrolState, setState] = useState({})

    useEvent("keydown", (event) => setState({ ...constrolState, [event.code]: true }))
    useEvent("keyup", (event) => setState({ ...constrolState, [event.code]: false }))

    useEffect(() => {
        let interval = setInterval(() => {
            if (constrolState[props.hotkey.shipLeft]
                && position.left > props.area.offset)
                setPosition({ ...position, left: position.left - props.ship.speed })
            if (constrolState[props.hotkey.shipRight]
                && position.left + props.area.offset + props.ship.width < props.area.width)
                setPosition({ ...position, left: position.left + props.ship.speed })
        }, props.ship.refreshInterval)
        return () => clearInterval(interval)
    })
    const gg = (msg) => {
        console.log(msg)
    }
    return (
        <div className="controller">
            <Ship
                style={{
                    left: position.left,
                    top: position.top
                }}
                skin={props.ship.skin} />
            <BulletController
                hotkey={props.hotkey}
                bullet={props.bullet}
                state={constrolState}
                init={position}
                inform={(pos) => gg(pos)}
            />
            <EnemiesContoller
                count={props.enemies}
            />
        </div>
    )
}
