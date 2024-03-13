import { Field, Image, ImageField } from "@sitecore-jss/sitecore-jss-nextjs"
import { ComponentProps } from "lib/component-props"
type Product = {
    title: Field<string>,
    model: Field<string>,
    image: {
        field: ImageField
    },
    price: Field<string>
    pageurl: {
        url: string
    }
}

interface Fields {
    data: {
        datasource: {
            productsList: {
                products: Product[]
            }

        }
    }
}
type ProductsProps = ComponentProps & {
    fields: Fields
}
export const Default = (props: ProductsProps): JSX.Element => {

    const datasource = props.fields.data.datasource.productsList;
    return (
        <div className="allproducts">
            {datasource.products.map((listitem, index) => (
                <a key={listitem.title.value + index} href={`${listitem.pageurl.url.replace("http://cm","")}`}>
                    <article key={index} className="product">
                        <div className="productimage">
                            <Image field={listitem.image.field} />
                        </div>
                        <div>
                            <h3>{listitem.title.value}</h3>
                            <p>INR {listitem.price.value}</p>
                        </div>
                    </article>
                </a>
            ))}
        </div>
    )
}