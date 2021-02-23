//////////////////////////////
//        hardcoded url     //
////////////////////////////// 



import "../css/Enemy.css"

export default function Enemy(props) {
    return (
        <div
            className="enemy fighter"
            style={{
                transform: `translate(${props.init.left}px, ${props.init.top}px)`,
                backgroundImage: `url('/UFO_enemy.png')`
            }}>
        </div>
    )
}