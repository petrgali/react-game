export default function MenuItem(props) {
    return (
        <div className={props.type}
            onMouseEnter={(e) => e.target.classList.toggle("blink")}
            onMouseOut={(e) => e.target.classList.toggle("blink")}
            onClick={(item) => props.selectItem(item)}
        >{props.text}</div>
    )
}