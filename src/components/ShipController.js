import useEvent from "../hooks/useEvent"
import { useEffect, useState } from 'react';
import Ship from '../components/Ship'

export default function ShipController(props) {
    let [position, setPosition] = useState({ left: props.ship.left, top: props.ship.top })
    let [constrolState, setState] = useState({})

    const moveShip = (key, state) => setState({ ...constrolState, [key]: state })
    useEvent("keydown", (event) => moveShip(event.code, true))
    useEvent("keyup", (event) => moveShip(event.code, false))


    useEffect(() => {
        let interval = setInterval(() => {
            if (constrolState[props.hotkey.shipLeft]
                && position.left > props.ship.width)
                setPosition({ ...position, left: position.left - props.ship.speed })
            if (constrolState[props.hotkey.shipRight]
                && position.left < props.area.width - props.ship.width*2)
                setPosition({ ...position, left: position.left + props.ship.speed })
        }, props.ship.refreshInterval)
        return () => clearInterval(interval)
    })
    let styles = {
        transform: `translate(${position.left}px, ${position.top}px)`
    };
    return (
        <div className="controller">
            <Ship style={styles} />
        </div>
    )
}
