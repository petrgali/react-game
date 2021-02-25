///////////////////////////////////////////////////
//    !!hardcoded url && explosion offset!!      //
/////////////////////////////////////////////////// 



import "../../css/enemies.css"

export default function Enemy(props) {
    if (!props.init.class)
        return (
            <div
                className="enemy fighter"
                style={{
                    transform: `translate(${props.init.left}px, ${props.init.top}px)`,
                    backgroundImage: `url('/UFO_enemy.png')`
                }}>
            </div>
        )
    return (
        <div
            className={props.init.class}
            style={{
                transform: `translate(${props.init.left}px, ${props.init.top - 8}px)`,
                backgroundImage: `url('/explosion.png')`
            }}>
        </div>
    )
}