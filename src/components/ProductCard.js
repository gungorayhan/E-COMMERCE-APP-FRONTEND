import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import ReactStars from "react-rating-stars-component"
import prodcompare from "../images/prodcompare.svg"
import wish from "../images/wish.svg"
import wishlist from "../images/wishlist.svg"
import watch from "../images/watch.jpg"
import watch2 from "../images/watch-1.avif"
import addcart from "../images/add-cart.svg"
import view from "../images/view.svg"
function ProductCard(props) {
    const {grid} = props;
    let location=useLocation();

  return (
    <>
        <div className={`${location.pathname=="/product" ? `gr-${grid}`:"col-3"}`}>
        <Link to={`${
            location.pathname=="/"
            ?"product/:id"
            :location.pathname=="/product/:id"
            ? "/product/:id"
            :":id"
        }`} className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
                <button className='border-0 bg-transparent'>
                <img src={wish} alt="wishlist" />
                </button>
            </div>
            <div className="product-image">
                <img src={watch} className='img-fluid' alt="product image" />
                <img src={watch2} className='img-fluid' alt="product image" />
            </div>
            <div className="product-details">
                <h6 className="brand">Havels</h6>
                <h5 className="product-title">
                    Kids headphones bulk 10 pack multi colored fot students
                </h5>
                <ReactStars 
                    count={5}
                    value="3"
                    size={24}
                    edit={false}
                    activeColor="#ffd700"
                />
                <p className={`description ${grid==12? "d-block" :"d-none"}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Tenetur vel accusamus doloribus, consectetur, quas,
                     natus iusto debitis aspernatur exercitationem
                     voluptatibus dolorum neque laborum autem magni 
                     iste illo nisi maxime culpa.
                </p>
                <p className="price">$1000.00</p>
            </div>
            <div className="action-bar position-absolute">
                <div className="d-flex flex-column">
                <button className='border-0 bg-transparent'>
                    <img src={prodcompare} alt="compare" />
                </button>
                <button className='border-0 bg-transparent'>
                    <img src={view} alt="view" />
                </button>
                <button className='border-0 bg-transparent'>
                    <img src={addcart} alt="addcart" />
                </button>
                </div>
            </div>
        </Link>
    </div>    
    </>
  )
}

export default ProductCard