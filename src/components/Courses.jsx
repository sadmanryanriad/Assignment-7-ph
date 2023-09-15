import { useEffect, useState } from "react";
import Course from "./Course";

const Courses = () => {

    const [courses,setCourses] = useState([]);

    useEffect(()=>{
        fetch('../../public/data.json')
        .then(res=> res.json())
        .then(data=>setCourses(data));
    },[])

    return (
        <div className="md:w-3/4 flex flex-wrap gap-6">
            {courses.map(course=> <Course key={course.id} course={course}></Course>)}
        </div>
    );
};

export default Courses;