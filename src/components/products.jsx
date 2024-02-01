import './products.css'
import QuantityPicker from './quantityPicker'

export default function Products() {
  return (
    <div className="products">
    <img src="https://th.bing.com/th/id/OIG1.dQ1Hsi1n6D65.Qbbo5az?pid=ImgGn" alt="product" />
      <h2>hello im a product</h2>
      <QuantityPicker />
    </div>
  )
}