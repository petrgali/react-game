import "../css/Ship.css"

export default function Ship(props) {
    return (
        <img className="ship" src={props.skin}
            style={{ transform: `translate(${props.style.left}px, ${props.style.top}px)` }}>
        </img>
    )
}