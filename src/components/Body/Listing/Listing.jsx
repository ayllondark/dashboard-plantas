import React from 'react';
import './listing.scss';
import plant1 from '../../../assets/01.png';
import plant2 from '../../../assets/02.png';
import plant3 from '../../../assets/03.png';
import plant4 from '../../../assets/04.png';
import img2 from '../../../assets/profile-1.jpg';
import img3 from '../../../assets/profile-2.jpg';
import img4 from '../../../assets/profile-3.jpg';
import img5 from '../../../assets/profile-4.jpg';
import {BsArrowRightShort} from 'react-icons/bs';
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai';


const Listing = () => {
  return (
    <div className='listingSection'>
      <div className="heading flex">
        <h1>My Listings</h1>
        <button className='btn flex'>
          See All <BsArrowRightShort className='icon' />
        </button>
      </div>

      <div className="secContainer flex">
        <div className="singleItem">
          <AiFillHeart className='icon' />
          <img src={plant1} alt="" />
          <h3>Annual Vince</h3>
        </div>
        <div className="singleItem">
          <AiOutlineHeart className='icon' />
          <img src={plant2} alt="" />
          <h3>Cofee Plant</h3>
        </div>
        <div className="singleItem">
          <AiOutlineHeart className='icon' />
          <img src={plant3} alt="" />
          <h3>Button Fern</h3>
        </div>
        <div className="singleItem">
          <AiFillHeart className='icon' />
          <img src={plant4} alt="" />
          <h3>Spider Plant</h3>
        </div>
      </div>

      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Sellers</h3>
            <button className='btn flex'>
              See All <BsArrowRightShort className='icon' />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={img2} alt="" />
              <img src={img3} alt="" />
              <img src={img4} alt="" />
              <img src={img5} alt="" />
            </div>
            <div className="cardText">
              <span>
                14.556 Plant sold <br />
                <small>
                  21 Sellers <span className='date'>7 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>

        <div className="featuredSellers">
          <div className="heading flex">
            <h3>Features Sellers</h3>
            <button className='btn flex'>
              See All <BsArrowRightShort className='icon' />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={img2} alt="" />
              <img src={img3} alt="" />
              <img src={img4} alt="" />
              <img src={img5} alt="" />
            </div>
            <div className="cardText">
              <span>
                28.556 Plant sold <br />
                <small>
                  26 Sellers <span className='date'>31 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Listing