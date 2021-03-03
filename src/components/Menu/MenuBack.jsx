export default function Back(props) {
    return (
        <div className={props.type}
            onMouseEnter={(e) => {
                e.target.classList.toggle("blink")
                props.SFX.menu.play()
            }}
            onMouseOut={(e) => e.target.classList.toggle("blink")}
            onClick={() => props.goBack()}
        >{props.text}</div>
    )
}