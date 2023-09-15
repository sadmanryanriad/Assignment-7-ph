import { useState } from 'react'
import './App.css'
import Cart from './components/Cart'
import Courses from './components/Courses'

function App() {

    const [cart,setCart] = useState([]);

    const handleCartButton = (course) =>{
      console.log(course.id);
      setCart([...cart, course.id]);
    }

  return (
    <>
    <h1 className="text-4xl font-bold text-center py-12">
      Course Registration
    </h1>


    <div className='flex flex-col md:flex-row md:justify-between max-w-[1400px] mx-auto'>
    <Courses handleCartButton={handleCartButton}></Courses>
    <Cart cart={cart}></Cart>
    </div>
    </>
  )
}

export default App
