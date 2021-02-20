import { useEffect, useState } from "react"
import "./Flagship.css"

export default function Ship(props) {
    let [ship, setShip] = useState(null)
    useEffect(() => setShip(document.querySelector(".ship")))
    const styles = { 
        transform: `translate(${props.left}px, ${props.top}px)` 
    };
    console.log(props)
    return (
        <div className="mothership">
            <img className="ship" src='/GLX_Galaxip.png'
                style={styles}
            ></img>
        </div>
    )
}