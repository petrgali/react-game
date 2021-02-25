import "../../css/menu.css"
import MenuItem from "./MenuItem"
export default function MenuScreen(props) {
    let list = ["options", "controls", "highscores"]

    const openMenu = (elem) => {
        console.log(elem.target.textContent)
    }
    return (
        <div className="menuscreen">
            <div className="header"
                onMouseEnter={(e) => e.target.classList.toggle("blink")}
                onMouseOut={(e) => e.target.classList.toggle("blink")}
                onClick={() => props.startGame()}
            >start game</div>
            {list.map((elem, idx) => <MenuItem
                key={list.length - idx}
                type={"listitem"}
                text={elem}
                selectItem={(item) => openMenu(item)}
            />)}
        </div>
    )
}