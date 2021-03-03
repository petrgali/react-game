import MenuBack from "../Menu/MenuBack"
import { statStorage } from "../../utils/storageHandler"
export default function HighScores(props) {
    let stat = statStorage()
    return (
        <div className="highscores bg" >
            hail to heroes
            <div className="listitem score">
                <div className="position">#</div>
                <div className="player">name</div>
                <div className="time">sec</div>
                <div className="shots">shots</div>
            </div>
            {stat.map((row, idx) => {
                return (
                    <div className="listitem score" key={idx.toString()}>
                        <div className="position">{idx + 1}</div>
                        <div className="player"> {row.player}</div>
                        <div className="time"> {row.time}</div>
                        <div className="shots"> {row.bullets}</div>
                    </div>
                )
            })}
            <MenuBack
                type={'listitem'}
                goBack={() => props.goBack()}
                text={"back"}
                SFX={props.SFX}
            />
        </div>
    )
}