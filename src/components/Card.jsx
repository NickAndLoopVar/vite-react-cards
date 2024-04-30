import "./Card.css"
import { Link } from "react-router-dom"

function Card ({proyecto = "proyecto", integrante = "integrante"}) {
    return(
        <div className="card">
            <Link to = {proyecto}>
            <h2>{proyecto}</h2>
            </Link>
            <p>{integrante}</p>
        </div>
    )
}
export default Card