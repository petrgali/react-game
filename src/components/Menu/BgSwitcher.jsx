export default function BgSwitcher(props) {
    let list = []
    let classname
    for (let elem of Object.values(props.gamearea.background)) {
        props.activeBg === elem
            ? classname = "active"
            : classname = ""
        list.push(<Bg key={elem}
            elem={elem}
            switchBg={(skin) => props.switchBg(skin)}
            newBg={(skin) => props.newBg(skin)}
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
function Bg(props) {
    return (
        <img className={props.type}
            src={props.elem}
            onClick={() => {
                props.switchBg(props.elem)
                props.newBg({ backgroundImage: `url(${props.elem})` })
            }}
            style={props.style}
        />
    )
}
