import "./Ship.css"

export default function Ship(props) {
    return (
        <img className="ship" src='/GLX_Galaxip.png'
            style={props.style}>
        </img>
    )
}