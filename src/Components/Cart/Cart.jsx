/* eslint-disable react/prop-types */
import React from 'react';
import './Cart.css'

const Cart = ({selectedAllCourses, totalCredit, remainingCredit}) => {
    return (
        <div className='cart'>
            <h3>Credit Hour Remaining: {remainingCredit} hr </h3>
            <hr />
            <h3>Course Name</h3>
            {
                selectedAllCourses.map(course=>(<li key={course.id}>{course.name}</li>
            ))}
            <hr />
            <h3>Total Credit Hour: {totalCredit}</h3>
            <hr />
        </div>
    );
};

export default Cart;