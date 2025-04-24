import React from 'react'
import { Link } from 'react-router-dom';
import ger from '../assets/ger.jpg'
import electronic from '../assets/electronic.jpg'
import fashion from '../assets/fashion.jpg'
import furniture from '../assets/furniture.jpg'
import laptop from '../assets/laptop.jpeg'
import mobile from '../assets/mobile.jpeg'
import product from '../assets/product.jpg'
import watch from '../assets/watch.png'

function Navbar() {
    const phoneLink = "http://localhost:5173/products/phone"
    return (
        <>
            <div className='navbar'>
                <div className="brand">Apna Fashions</div>
                <div className='search-bar'><input type="text" placeholder='Search for Products , Brands and More' /></div>
                <div className='user'><i className="bi bi-person-circle"></i>Login</div>
                <div className='cart'><i className="bi bi-cart"></i>Cart</div>
            </div>
            <div className='nav-bar-wrapper'>
    
                <div className="items"><img src={fashion} />Fashion</div>
                <div className="items"><img src={electronic} />Electronic</div>
                <div className="items"><img src={laptop} />Laptop</div>
                <div className="items"><img src={watch} />watch</div>
                <div className="items"><img src={furniture} />Home & Furniture</div>
                <div className="items"><img src={product} />Beauty</div>


                <div className="items">
                    <Link to="/products/phone"><img src={ger} alt="Grocery" /></Link>
                    Grocery
                </div>
                <div className="items">
                    <Link to="/products/phone"><img src={mobile} alt="Mobile" /></Link>
                    Mobile
                </div>

            </div>

        </>
    )
}

export default Navbar

