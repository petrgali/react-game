import "../../css/menu.css"
import { SFX } from "../../utils/audioProvider"
import MenuItem from "./MenuItem"
import { useState } from "react"
import MenuControls from "../Menu/MenuControls"
import MenuOptions from "./MenuOptions"
import HighScores from "../Statistics/HighScores";

// TODO1: Instead of `body` I would store `openedMenu` which stores element from ["options", "controls", "hall of fame"] -> store inside state less data
export default function MenuScreen(props) {
    // TODO1: static variables move outside of component
    let list = ["options", "controls", "hall of fame"]
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
            case "hall of fame":
                setBody(() => <HighScores
                    SFX={SFX}
                    goBack={() => setBody()}
                />
                )
                break
        }
    }
    // TODO1: if (body) {}
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
                  /* TODO1: key={elem} */
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
