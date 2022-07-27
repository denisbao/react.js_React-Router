import { Link, useParams } from 'react-router-dom'

const ProductDetail = () => {
  const params = useParams()

  return (
    <>
      <section>
        <h1>Product Details</h1>
        <p>{params.productId}</p>
      </section>
      <div>
        <Link to={'/products'}>Go Back</Link>
      </div>
    </>
  )
}

export default ProductDetail
