import config from "../../config/GameConfig"
import "../../css/enemies.css"

export default function Enemy(props) {
    let { enemy } = config
    if (!props.init.class)
        return (
            <div
                className="enemy fighter"
                style={{
                    transform: `translate(${props.init.left}px, ${props.init.top}px)`,
                    backgroundImage: `url(${enemy.skin})`
                }}>
            </div>
        )
    return (
        <div
            className={props.init.class}
            style={{
                transform: `translate(${props.init.left}px, ${props.init.top - 8}px)`,
                backgroundImage: `url(${enemy.explode})`
            }}>
        </div>
    )
}