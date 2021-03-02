import "../../css/informer.css"

export default function ScoreInformer(props) {
    return (
        <div className="informer">
            <div>sec:{props.time}</div>
            <div>shots:{props.bulletCount}</div>
        </div>
    )
}