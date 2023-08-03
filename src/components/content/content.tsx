import { Header } from "../items/header"
import { Body } from "../items/body"
import { Footer } from "../items/footer"
export const ContentBox = () => {
    return (
        <section className="contentBG grid-10">
            <Header/>
            <Body/>
            <Footer/>
        </section>
    )
}