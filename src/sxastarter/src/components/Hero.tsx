import { Image, ImageField, RichText, RichTextField } from "@sitecore-jss/sitecore-jss-nextjs"
import { ComponentProps } from "lib/component-props"

type HeroProps = ComponentProps & {
    fields: {
        HeroImage: ImageField,
        HeroText: RichTextField
    }
}
export const Default = (props: HeroProps): JSX.Element => {
    console.log(props.fields.HeroImage)
    return (
        <div className="hero">
            <div className="heroImg">
                <Image field={props.fields.HeroImage} />
            </div>
            <RichText field={props.fields.HeroText} className="herotext" />
            <div className="heroCTA">
                <button>FIND YOUR WATCH</button><button>FIND A BOUTIQUE</button><button>FIND YOUR STRAP</button>
            </div>

        </div>
    )
}
export const WithoutCTA = (props: HeroProps): JSX.Element => {
    return (
        <div className="hero">
            <div className="heroImg">
                <Image field={props.fields.HeroImage} />
            </div>
            <RichText field={props.fields.HeroText} className="herotext" />           
        </div>
    )
}