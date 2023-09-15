/* eslint-disable react/prop-types */
import React from "react";
import "./Cart.css";

const Cart = ({ selectedAllCourses, totalCredit, remainingCredit }) => {
  return (
    <div className="cart">
      <h3>Credit Hour Remaining {remainingCredit} hr </h3>
      <hr />
      <h4>Course Name</h4>
      <ol>
      {selectedAllCourses.map((course, index) => (
        <li className="list" key={index + 1}>
          {course.name}
        </li>
      ))}
      </ol>
      <hr />
      <h5>Total Credit Hour: {totalCredit}</h5>
      <hr />
    </div>
  );
};

export default Cart;
