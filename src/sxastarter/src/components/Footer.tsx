import { ComponentProps } from "lib/component-props"
type FooterItem = {
    link: string,
    text: string
}
interface Fields {
    footerimage: {
        url: string
    },
    items: FooterItem[]
}
type FooterProps = ComponentProps & {
    fields: Fields
}
const FooterLink = (props: FooterItem) => {
    return <a href={props.link}>{props.text}</a>
}
export const Default = (props: FooterProps): JSX.Element => {
    const list = props.fields.items.map((element: FooterItem, key: number) => (
        <FooterLink key={key} link={element.link} text={element.text} />
    ));
    return (
        <div className="footer">
            <div className="newsletter">
                <h2>KEEP ME UPDATED</h2><p>Stay Up To date with the latest Hubolt news</p><a className="open-button">Sign Up</a>
            </div>
            <div className="footerlogo">
                <img src={props.fields.footerimage.url}></img>
            </div>
            <div className="footernav">
                <nav>
                    {list}
                </nav>
                <nav><a href=""><i className="fa fa-facebook"></i></a><a href=""><i className="fa fa-instagram"></i></a><a href=""><i className="fa fa-twitter"></i></a><a href=""><i className="fa fa-github"></i></a><a href=""><i className="fa fa-whatsapp"></i></a><a href=""><i className="fa fa-youtube"></i></a></nav>
            </div>
        </div>
    )
}