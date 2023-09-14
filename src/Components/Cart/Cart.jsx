/* eslint-disable react/prop-types */
import React from 'react';

const Cart = ({selectedAllCourses}) => {
    return (
        <div>
            <h3>Course Name</h3>
            {
                selectedAllCourses.map(course=>(<li key={course.id}>{course.name}</li>
            ))}
        </div>
    );
};

export default Cart;