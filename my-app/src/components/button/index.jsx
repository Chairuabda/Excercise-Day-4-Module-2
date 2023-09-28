import "./index.css"

export default function Btn(props) {
    return (
        <div className="btn-container">
            <button>{props.text}</button>
        </div>
    )
}