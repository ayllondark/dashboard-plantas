import React from 'react';
import './activity.scss';
import {BsArrowRightShort} from 'react-icons/bs';
import user1 from '../../../assets/profile-1.jpg';
import user2 from '../../../assets/profile-2.jpg';
import user3 from '../../../assets/profile-3.jpg';
import user4 from '../../../assets/profile-4.jpg';


const Activity = () => {
  return (
    <div className='activitySection'>
      <div className="heading flex">
        <h1>Resent Activity</h1>
        <button className='btn flex'>
          See All <BsArrowRightShort className='icon' />
        </button>
      </div>

      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={user1} alt="" />
          <div className='customerDetails'>
            <span className="name">Ola Juan</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user2} alt="" />
          <div className='customerDetails'>
            <span className="name">Ola Juan</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user3} alt="" />
          <div className='customerDetails'>
            <span className="name">Ola Juan</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user4} alt="" />
          <div className='customerDetails'>
            <span className="name">Ola Juan</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>
        
      </div>

    </div>
  )
}

export default Activity