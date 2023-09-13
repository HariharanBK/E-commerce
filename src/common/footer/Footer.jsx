import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
            <div className="box">
                <h1>Bonik</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, labore qui. Reiciendis quibusdam aliquid</p>
                <div className="icon d_flex">
                    <div className="img d_flex">
                    <i class="bi bi-google"></i>
                                            <span>Google play</span>
                       </div>
                    <div className="img d_flex">
                        <i class='fa-brands fa-app-store-ios'></i>
                        <span>App Store</span>
                    </div>
                </div>
            </div>
            <div className="box_1">
                <h2>About us</h2>
                <ul>
                    <li>Careers</li>
                    <li>Our Stores</li>
                    <li>Our Cares</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
           < div className="box">
                <h2>Customer Care</h2>
                <ul>
                    <li>Help Center</li>
                    <li>How to Buy</li>
                    <li>Track Your Order</li>
                    <li>Corporate & Bulk Purchasing</li>
                    <li>Returns & Refunds</li>
                </ul>
            </div>
            <div className="box_3">
                <h2>Contact Us</h2>
                <ul>
                    <li>No:13 Anna nagar, Chennai 600002</li>
                    <li>Email: products@gmail.com</li>
                    <li>Phone:+8013 0813 1106</li>
                    <li>Instagram:Bonik_Products</li>
                </ul>
            </div>
        </div>
        
      </footer>
    </>
  )
}

export default Footer