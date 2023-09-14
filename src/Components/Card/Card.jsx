import React, { useEffect, useState } from 'react';
import './Card.css'


const Card = () => {
  const [allCourse, setAllCourse] = useState([])

  useEffect(() =>{
    fetch('./data.json')
    .then(res=>res.json())
    .then(data=>setAllCourse(data))

  }, []);

  console.log(allCourse)

  return (
   <div className="container">
    <div className="card-container">
      <div className="card">
        <div className="card-img">
          <img className='photo' src="https://i.ibb.co/ZJDV3vc/Rectangle-2-2.png" alt="" />
        </div>
        <h2>fdssd</h2>
        <p><small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, dolor?</small></p>
        <div className="info">
          <p>Price</p>
          <p>Credit</p>
        </div>
        <button className='card-btn'>Select</button>
      </div>
    </div>
   </div>
  );
};

export default Card;