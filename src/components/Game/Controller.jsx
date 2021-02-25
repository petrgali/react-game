import { useEffect, useState } from 'react';
import Ship from '../Ship/Ship'
import BulletController from '../Bullets/BulletController';
import EnemiesContoller from "../Enemies/EnemiesController"
import detectCollision from "../../utils/collisionCheck"
import ConfirmMenu from "../Menu/MenuConfirm"
import { SFX } from "../../utils/audioProvider"

export default function Controller(props) {
    let [position, setPosition] = useState({
        left: props.ship.left,
        top: props.ship.top,
    })
    let [enemies, updateEnemies] = useState(props.enemies)

    ////////////////////////////////////////
    //   in game menu activation watcher  //
    ////////////////////////////////////////
    useEffect(() => {
        if (props.controls[props.hotkey.escape]) props.quitMenu()
    }, [props.controls])


    ///////////////////////////////////
    //   ship control state watcher  //
    ///////////////////////////////////
    useEffect(() => {
        let interval = setInterval(() => {
            if (props.controls[props.hotkey.shipLeft]
                && position.left > props.area.offset)
                setPosition({ ...position, left: position.left - props.ship.speed })
            if (props.controls[props.hotkey.shipRight]
                && position.left + props.area.offset + props.ship.width < props.area.width)
                setPosition({ ...position, left: position.left + props.ship.speed })
        }, props.ship.refreshInterval)
        return () => clearInterval(interval)
    })


    ///////////////////////////////
    //      end round watcher    //
    ///////////////////////////////
    useEffect(() => {
        if (enemies.length < 1) props.quitConfirm()
    }, [enemies])


    const collisionControl = (bulletPos) => {
        let result = (detectCollision(bulletPos, enemies))
        if (result != null) updateEnemies(() => [...enemies.filter((alien, idx) => {
            if (idx === result.id && alien.destructible) {
                setPosition({ ...position, remove: true })
                SFX.play(props.effects.explode)
                alien.class = "explosion"
                alien.destructible = false
                setTimeout(() => {
                    updateEnemies(() => [...enemies.filter((_, idx) => idx !== result.id)])
                }, 250);
            }
            return { ...alien }
        })])
    }


    let menu = props.gameState.quitShow ? <ConfirmMenu quitConfirm={() => props.quitConfirm()} /> : ""
    return (
        <div className="controller">
            <Ship
                style={{
                    left: position.left,
                    top: position.top
                }}
                skin={props.ship.skin}
            />
            <BulletController
                hotkey={props.hotkey}
                bullet={props.bullet}
                state={props.controls}
                init={position}
                inform={(bulletPos) => collisionControl(bulletPos)}
                confirmRemove={() => setPosition({ ...position, remove: false })}
            />
            <EnemiesContoller
                count={enemies}
            />
            {menu}
        </div>
    )
}