import React from 'react';
import { star } from '@/assets';
import { Link } from 'react-router-dom';

export default function TutorCard({ name, experience, rating, img }) {
  return (
    <div className='tutor-courses-card'>
      <img className='tutor-courses-card-img' src={img} alt="Tutor's avatar" />
      <div className='tutor-footer'>
        <Link to='/teachers/1'>{name || 'John Doe'}</Link>
        <div className='flex-between'>
          <p className='tutor-card-country'>{experience || '3'} yil tajriba</p>
          <div className='flex-center gap-1'>
            <span className='rating'>{rating || '5'}</span>
            <img className='mb-[6px]' src={star} alt="Rating" />
          </div>
        </div>
      </div>
    </div>
  )
}


// slick - slide slick - active slick - current