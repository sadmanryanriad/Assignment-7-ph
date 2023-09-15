import PropTypes from 'prop-types'; // ES6


const ListItem = ({cartTitle}) => {
    return (
        <>
            <li>{cartTitle}</li>
        </>
    );
};

ListItem.propTypes = {
    cartTitle: PropTypes.string.isRequired
}

export default ListItem;