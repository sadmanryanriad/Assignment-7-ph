import PropTypes from 'prop-types'; // ES6
import ListItem from './ListItem';



const Cart = ({ cart,totalHour }) => {

    return (
        <div className="md:w-1/4 w-80 h-max rounded-xl shadow-xl p-6 mx-auto md:mx-0">
            <h2 className="text-[#2F80ED] text-xl font-bold py-6 border-b-2">Credit Hour Remaining 7 hr</h2>
            <h2 className="text-xl font-bold my-5 ">Course Name</h2>
            <ol className="list-decimal list-inside">
                {
                    cart.map((item, key) => <ListItem key={key} cartTitle={item.title}></ListItem>)
                }
            </ol>
            <h3 className="text-base font-semibold py-4 my-6 border-t-2 border-b-2">Total Credit Hour : {totalHour}</h3>
            <h3 className="text-base font-semibold">Total Price : 48000 USD</h3>

        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    totalHour: PropTypes.number
}

export default Cart;