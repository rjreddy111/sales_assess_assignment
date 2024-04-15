// Write your code here
import {Component} from 'react'
import EachProduct from '../EachProduct'

import './index.css'

class Home extends Component {
  state = {storeData: []}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const url = 'https://mocki.io/v1/02abe173-bc13-41d7-881f-5c40ee42c5ab'
    const response = await fetch(url)
    const data = await response.json()
    this.setState({storeData: data.data})
  }

  render() {
    const {storeData} = this.state
    console.log(storeData)
    return (
      <div className="main-background">
        <div className="top-header">
          <p className="page_heading">TANN TRIM</p>
          <div>
            <ul className="top-unordered-list">
              <li>
                <img
                  src="https://res.cloudinary.com/dookgusbq/image/upload/v1713118842/saleassess/search.png"
                  alt="search"
                  className="each-image"
                />
              </li>
              <li>
                <img
                  src="https://res.cloudinary.com/dookgusbq/image/upload/v1713118879/saleassess/profile.png"
                  alt="profile"
                  className="each-image"
                />
              </li>
              <li>
                <img
                  src="https://res.cloudinary.com/dookgusbq/image/upload/v1713118895/saleassess/save.png"
                  alt="save"
                  className="each-image"
                />
              </li>
              <li>
                <img
                  src="https://res.cloudinary.com/dookgusbq/image/upload/v1713118941/saleassess/cartbag.png"
                  alt="cartbag"
                  className="each-image"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="inital-list-container">
          <ul className="unordered-list-one">
            <li>Bags</li>
            <li>Travel</li>
            <li>Accesories</li>
            <li>Gifting</li>
            <li>Jewelary</li>
          </ul>
        </div>
        <div className="inital-list-container">
          <ul className="unordered-list">
            <li className="each-option">
              <img
                src="https://res.cloudinary.com/dookgusbq/image/upload/v1713117243/saleassess/Group_475_zfdgit.png"
                alt="All bags"
              />
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/dookgusbq/image/upload/v1713085843/saleassess/vanity_puch.png"
                alt=" Vanity pouch"
              />
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/dookgusbq/image/upload/v1713085917/saleassess/tote%20bag.png"
                alt=" Tote bag"
              />
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/dookgusbq/image/upload/v1713086119/saleassess/duffle%20bag.png"
                alt=" Duffle bag"
              />
            </li>
            <li>
              <img
                src=" https://res.cloudinary.com/dookgusbq/image/upload/v1713086152/saleassess/laptop%20bag.png"
                alt="Laptop service"
              />
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/dookgusbq/image/upload/v1713086196/saleassess/messenger%20abg.png"
                alt=" Messenger bags"
              />
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/dookgusbq/image/upload/v1713086267/saleassess/shing%20bag.png"
                alt="  Sing bags"
              />
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/dookgusbq/image/upload/v1713086304/saleassess/handbag.png"
                alt="Hand bag"
              />
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/dookgusbq/image/upload/v1713086353/saleassess/buck%20bag.png"
                alt="bucket bag"
              />
            </li>
          </ul>
        </div>
        <div className="backpack-product-contaienr">
          <div className="backpakce-container">
            <p>Bags </p>
            <p className="elipse"> </p>
            <p>Backpacks</p>
          </div>
          <div className="products-containre">
            <p>13 Products</p>
            <img
              src="https://res.cloudinary.com/dookgusbq/image/upload/v1713117927/saleassess/Vector_4_oj9jdq.png"
              alt="vector"
              className="vector-image"
            />
          </div>
        </div>
        <ul className="products-unordered-list">
          {storeData.map(eachData => (
            <EachProduct eachData={eachData} key={eachData.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
