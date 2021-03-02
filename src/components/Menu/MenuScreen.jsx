import "../../css/menu.css"
import { SFX } from "../../utils/audioProvider"
import MenuItem from "./MenuItem"
import { useState } from "react"
import MenuControls from "../Menu/MenuControls"
import MenuOptions from "./MenuOptions"

export default function MenuScreen(props) {
    let list = ["options", "controls", "highscores"]
    let [body, setBody] = useState()
    const openMenu = (elem) => {
        switch (elem.target.textContent) {
            case "options":
                setBody(() => <MenuOptions
                    SFX={SFX}
                    goBack={() => setBody()}
                    bgStyle={props.bgStyle}
                    newSkin={(skin) => props.newSkin(skin)}
                    newBg={(bg) => props.newBg(bg)} />
                )
                break
            case "controls":
                setBody(() => <MenuControls
                    SFX={SFX}
                    goBack={() => setBody()} />
                )
                break
            case "highscores":
                break
        }
    }
    if (body != undefined) return (
        <div className="menuscreen">
            { body}
        </div>
    )
    return (
        <div className="menuscreen">
            <div className="header">
                <div className="headertxt" onMouseEnter={(e) => {
                    e.target.classList.toggle("blink")
                    SFX.menu.play()
                }}
                    onMouseOut={(e) => e.target.classList.toggle("blink")}
                    onClick={() => props.startGame()}>new game</div>
            </div>
            <div className="list">
                {list.map((elem, idx) => <MenuItem
                    key={list.length - idx}
                    type={"listitem"}
                    text={elem}
                    SFX={SFX}
                    selectItem={(item) => openMenu(item)}
                />)}
            </div>
        </div>
    )
}