import { useParams } from "react-router-dom"
const ProductDetail = () => {
    const { id } = useParams()
    console.log(id)
    return <p> This is a ProductDetail</p>

}

export default ProductDetail