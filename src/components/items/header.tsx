import "animate.css"
export const Header = () => {
    return (
        <section className="header">
            <h1 className="name">noon</h1>
            <ul className="rowlist">
                <li className="animate">Pricing</li>
                <li className="animate">Features</li>
                <li className="animate">Open sources</li>
                <li className="animate">Contact</li>
            </ul>
            <button className="signinbutton">Sign In</button>
        </section>
    )
}