/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import './Card.css'
import Cart from '../Cart/Cart';


const Card = () => {
  const [allCourses, setAllCourses] = useState([])
  const [selectedAllCourses, setSelectedAllCourses] = useState([])

  useEffect(() =>{
    fetch('./data.json')
    .then(res=>res.json())
    .then(data=>setAllCourses(data))

  }, []);

  const handleSelectCourse = (course) =>{
    setSelectedAllCourses([...selectedAllCourses, course]);
  }
  console.log(selectedAllCourses);
 

  return (
   <div className="container">
    <div className="home-container">
      <div className="card-container">
     {
      allCourses.map((course) => ( 
      <div key={course.id} className="card">
      <div className="card-img">
        <img className='photo' src={course.image} alt="" />
      </div>
      <h2 className='title'>{course.name}</h2>
      <p className='details'><small>{course.details}</small></p>
      <div className="info">
        <p>$ Price: {course.price}</p>
        <p>Credit: {course.credit}</p>
      </div>
      <button onClick={()=>handleSelectCourse(course)} className='card-btn'>Select</button>
    </div>
))}
      </div>
      <div className="cart">
        <Cart selectedAllCourses={selectedAllCourses}></Cart>
      </div>
    </div>
   </div>
  );
};

export default Card;