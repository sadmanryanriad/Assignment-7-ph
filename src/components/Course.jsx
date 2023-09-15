import PropTypes from 'prop-types'; // ES6
import { FaDollarSign, FaBook, } from 'react-icons/fa';

const Course = ({ course,handleCartButton }) => {

    return (
        <div className="card w-80 bg-base-100 shadow-xl p-4 mx-auto md:mx-0">
            <figure className="">
                <img src={course.img} alt="Course thumbnail" className="rounded-xl w-72" />
            </figure>
            <div>
                <h3 className="text-lg font-semibold text-center mb-3 mt-4">{course.title}</h3>
                <p>{course.details}</p>
                <div className='flex justify-between my-5  text-xl'>
                    <div className='flex gap-2 items-center'>
                        <FaDollarSign></FaDollarSign>
                        <span className='text-base'>{course.price}</span>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <FaBook></FaBook>
                        <span className='text-base'>{course.credit_hour}hr</span>
                    </div>
                </div>
                <button onClick={()=>handleCartButton(course)} className='btn bg-[#2F80ED] w-full text-white text-lg'>Select</button>
            </div>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleCartButton: PropTypes.func.isRequired
}

export default Course;