import config from "../../config/GameConfig"
import MenuBack from "./MenuBack"
export default function MenuControls(props) {
    let { controlSkins } = config
    let list = []
    for (let [option, value] of Object.entries(controlSkins)) {
        list.push(<ControlsLine key={option} option={option} name={value} />)
    }
    return (
        <div className="control bg">
            Ingame  controls:
            {list}
            <MenuBack
                type={'listitem'}
                goBack={() => props.goBack()}
                text={"back"}
                SFX={props.SFX}
            />
        </div>
    )
}
const ControlsLine = (props) => {
    return (
        <div className="controls">
            <div className="item">{props.option}</div>
            <div className="listimg">
                <img className="item" src={props.name} />
            </div>
        </div>
    )
}