import './products.css'
import QuantityPicker from './quantityPicker'

export default function Products({ product }) {
  return (
    <div className="products">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <h3>${product.price}</h3>
      <p>{product.category}</p>
      <QuantityPicker />
    </div>
  )
}