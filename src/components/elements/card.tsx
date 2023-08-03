import { cardInterface } from "../../interfaces/cards";

export const Card = (props: cardInterface) => {
    return (
        <section className="card">
            <div className="iconCard">
                <img src={props.Icon} alt="" />
            </div>
            <div className="textCard">
                <h3>{props.title}</h3>
                <p>{props.text}</p>
            </div>
        </section>
    )
}