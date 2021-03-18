// TODO: BgSwitcher and ShipSwitcher as one common component (so equal)
export default function BgSwitcher(props) {
    let list = []
    let classname
    for (let elem of Object.values(props.gamearea.background)) {
        props.activeBg === elem
            ? classname = "active"
            : classname = ""
        list.push(<Bg key={elem}
            elem={elem}
            /* TODO: switchBg={props.switchBg} */
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

// TODO: remove for of from BgSwitcher component
export const BgSwitcherV2 = (props) => (
  <div className="choice">
      {Object.values(props.gamearea.background).map(elem => (
        <Bg
          key={elem}
          elem={elem}
          switchBg={props.switchBg}
          newBg={props.newBg}
          style={props.style}
          type={props.activeBg === elem ? 'active' : ''}
        />
      ))}
  </div>
)

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
