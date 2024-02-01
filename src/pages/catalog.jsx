import './catalog.css'
import Products from '../components/products'

export default function Catalog() {
  return (
    <div className="catalog">
      <h1>Catalog</h1>
      <Products />
      <Products />
      <Products />
      <Products />
      <Products />
    </div>
  )
}