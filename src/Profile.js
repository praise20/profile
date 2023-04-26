import React from 'react'
import image from './images.jpg'

function Profile() {
  return (
    <div className="container">
        <img className='house-img' src={image} alt=" image"  />
        <div className="info">
            <h3>Sarah Jones</h3>
            <p className='job'>Frontend develper</p>
            <div className='button'>
                <button className='btn'><a href='' target='_blank'>Linkedin</a></button>
                <button className='btn'><a href='' target='_blank'>Gitbub</a></button>
            </div>
            <hr/>
            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
        </div>
   </div> 
  )
}

export default Profile