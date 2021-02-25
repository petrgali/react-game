export default function Confirm(props) {
    return (
        <div className="testitem">
            <div>Want to quit?</div>
            <div onMouseEnter={(e) => e.target.classList.toggle("blink")}
                onMouseOut={(e) => e.target.classList.toggle("blink")}
                onClick={() => props.quitConfirm()}
            >yes</div>
        </div>
    )
}