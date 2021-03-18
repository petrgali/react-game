//
export default function ShipSwitcher(props) {
    let list = []
    let classname
    for (let elem of Object.values(props.ship.skin)) {
        props.activeSkin === elem ? classname = "active" : classname = ""
        list.push(<Ship key={elem}
            elem={elem}
            switchShip={(skin) => props.switchShip(skin)}
            newSkin={(skin) => props.newSkin(skin)}
            style={props.style}
            type={classname}
        />)
    }
    return (
        <div className="choice">
            {list}
        </div>
    )
}
function Ship(props) {
    return (
        <img className={props.type}
            src={props.elem}
            onClick={() => {
                props.switchShip(props.elem)
                props.newSkin(props.elem)
            }}
            style={props.style}
        />
    )
}
