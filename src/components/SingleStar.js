export default function SingleStar(props) {
    return (
        <div className="red" id="star"
            style={{ top: props.position.top + 'px', left: props.position.left + 'px' }}>
        </div>
    )
}