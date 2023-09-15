import { FaDollarSign, FaBook, } from 'react-icons/fa';

const Course = () => {
    return (
            <div className="card w-80 bg-base-100 shadow-xl p-4 mx-auto md:mx-0">
                <figure className="">
                    <img src="https://i.ibb.co/1qtWS68/rec1.png" alt="Course thumbnail" className="rounded-xl w-72" />
                </figure>
                <div>
                    <h3 className="text-lg font-semibold text-center mb-3 mt-4">Introduction to C Programming</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <div className='flex justify-between my-5  text-xl'>
                        <div className='flex gap-2 items-center'>
                        <FaDollarSign></FaDollarSign>
                        <span className='text-base'>Price : 15000</span>
                        </div>
                        <div className='flex gap-2 items-center'>
                        <FaBook></FaBook>
                        <span className='text-base'>Credit : 1hr</span>
                        </div>
                    </div>
                    <button className='btn bg-[#2F80ED] w-full text-white text-lg'>Select</button>
                </div>
            </div>
    );
};

export default Course;