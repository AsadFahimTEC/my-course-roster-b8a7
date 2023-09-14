/* eslint-disable react/prop-types */
import React from 'react';
import './Cart.css'

const Cart = ({selectedAllCourses, totalCredit, remainingCredit}) => {
    return (
        <div className='cart'>
            <h3>Credit Hour Remaining {remainingCredit} hr </h3>
            <hr />
            <h4>Course Name</h4>
            {
                selectedAllCourses.map(course=>(<li className='list' key={course.id}>{course.name}</li>
            ))}
            <hr />
            <h5>Total Credit Hour: {totalCredit}</h5>
            <hr />
        </div>
    );
};

export default Cart;