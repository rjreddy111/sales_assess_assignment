import {CiBookmark} from 'react-icons/ci'

import './index.css'

const EachProduct = props => {
  const {eachData} = props
  const {
    name,
    price,
    actualPrice,
    discountPercentage,
    imgUrl,
    bagUrl,
  } = eachData

  return (
    <li className="each-product-card">
      <img src={imgUrl} className="product-image" alt={name} />
      <CiBookmark className="save-bag-icon" />
      <p>{name}</p>
      <div className="product-prices-container">
        <div className="product-price">
          <p className="main-price">
            <img
              src="https://res.cloudinary.com/dookgusbq/image/upload/v1713151312/saleassess/productImages/rupee-sign_pv7ps9.png"
              alt="price"
            />
            {price}
          </p>
          <p className="mrp-price">{actualPrice}</p>
          <p className="mrp-price discount">({discountPercentage})</p>
        </div>
        <div>
          <img src={bagUrl} alt="add to bag" />
        </div>
      </div>
    </li>
  )
}

export default EachProduct
