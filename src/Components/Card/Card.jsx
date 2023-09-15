/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import "./Card.css";
import Cart from "../Cart/Cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { HiOutlineBookOpen } from 'react-icons/hi';



const Card = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [selectedAllCourses, setSelectedAllCourses] = useState([]);
  const [remainingCredit, setCreditRemaining] = useState(20);
  const [totalCredit, setTotalCredit] = useState([0]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setAllCourses(data));
  }, []);

  const handleSelectCourse = (course) => {
    const isExist = selectedAllCourses.find((item) => item.id === course.id);
    let count = course.credit;
    if (isExist) {
      return toast.error('Failed ! Already Added', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      
    } else {
      selectedAllCourses.forEach((item) => {
        count = count + item.credit;
      });

      const totalRemaining = 20 - count;

      if (count > 20) {
        return toast.warn('Sorry ! Credit Finished', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      } else {
        setTotalCredit(count);
        setCreditRemaining(totalRemaining);
        setSelectedAllCourses([...selectedAllCourses, course]);
      }
    }
  };

  // console.log(selectedAllCourses);

  return (
    <div className="container">
      <div className="home-container">
        <div className="card-container">
          {allCourses.map((course) => (
            <div key={course.id} className="card">
              <div className="card-img">
                <img className="photo" src={course.image} alt="" />
              </div>
              <h2 className="title">{course.name}</h2>
              <p className="details">
                <small>{course.details}</small>
              </p>
              <div className="info">
                <p>$ Price: {course.price}</p>
                <p><HiOutlineBookOpen className="icon" /></p>
                <p> Credit: {course.credit} hr</p>
              </div>
              <button
                onClick={() => handleSelectCourse(course)}
                className="card-btn"
              >
                Select
              </button>
              <ToastContainer />
            </div>
          ))}
        </div>
        <div className="cart">
          <Cart
            selectedAllCourses={selectedAllCourses}
            totalCredit={totalCredit}
            remainingCredit={remainingCredit}
          ></Cart>
        </div>
      </div>
    </div>
  );
};

export default Card;
