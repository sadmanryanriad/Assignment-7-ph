import PropTypes from 'prop-types'; // ES6
import { useEffect, useState } from "react";
import Course from "./Course";

const Courses = ({handleCartButton}) => {

    const [courses,setCourses] = useState([]);

    useEffect(()=>{
        fetch('../../public/data.json')
        .then(res=> res.json())
        .then(data=>setCourses(data));
    },[])

    return (
        <div className="md:w-3/4 flex flex-wrap gap-6">
            {courses.map(course=> <Course key={course.id} course={course} handleCartButton={handleCartButton}></Course>)}
        </div>
    );
};

Courses.propTypes = {
    handleCartButton: PropTypes.func.isRequired
}

export default Courses;