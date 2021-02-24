import SingleEnemy from "./SingleEnemy"

export default function Enemies(props) {

    return (
        <div className="enemies">{props.count.map((elem, idx) =>
            <SingleEnemy
                key={idx.toString()}
                init={elem}
            />
        )}
        </div>
    )
}