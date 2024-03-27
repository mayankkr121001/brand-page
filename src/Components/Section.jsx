import React from 'react';
import '../index.css';
import shoeImage from '../images/shoe_image.png';
import flipkart from '../images/flipkart-icon.png';
import amazon from '../images/amazon-a-logo-icon.png';

function Section() {
    return (
        <>
            <div className='section'>
                <div className="info">
                    <h1>YOUR FEET</h1>
                    <h1>DESERVE</h1>
                    <h1>THE BEST</h1>
                    <p className='infoPara'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                    <div className="infoBtns">
                        <button className="shopNow">Shop Now</button>
                        <button className="category">Category</button>
                    </div>
                    <div className="infoLinksDiv">
                        <p className='infoLinksText'>Also Available On</p>
                        <div className="infoLinks">
                            <img src={flipkart} alt="flipkart" className='infoLinksImg'/>
                            <img src={amazon} alt="amazon" className='infoLinksImg'/>
                        </div>
                    </div>
                </div>
                <div className="image">
                    <img src={shoeImage} alt="show" />
                </div>
            </div>
        </>
    )
}

export default Section;