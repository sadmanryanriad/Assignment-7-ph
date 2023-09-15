import { useState } from 'react'
import './App.css'
import Cart from './components/Cart'
import Courses from './components/Courses'

function App() {

    const [cart,setCart] = useState([]);
    const [totalHour,setTotalHour] = useState(0);
    const [totalPrice,setTotalPrice] = useState(0);

    const handleCartButton = (course) =>{

      const isExist = cart.find(data=> data===course);

      let num = course.credit_hour;
      let num2 = course.price;

      if(isExist) return alert('already added');

      else{
        cart.forEach(item => {
          num += item.credit_hour;
          num2 += item.price;
        });
      }
      if(num>20) return alert('credit limit exceeded');
      setTotalHour(num);
      setTotalPrice(num2);

      setCart([...cart, course]);
    }

  return (
    <>
    <h1 className="text-4xl font-bold text-center py-12">
      Course Registration
    </h1>


    <div className='flex flex-col md:flex-row md:justify-between max-w-[1400px] mx-auto'>
    <Courses handleCartButton={handleCartButton}></Courses>
    <Cart cart={cart} totalHour={totalHour} totalPrice={totalPrice}></Cart>
    </div>
    </>
  )
}

export default App
