import { useNavigate } from 'react-router-dom';
import cartIcon from '../../assets/cart.svg'

const CartIcon = () => {
    const navigate = useNavigate();
    return (
        <img
            src={cartIcon}
            alt="Cart"
            style={{ cursor: 'pointer', width: '24px', height: '24px' }}
            onClick={() => navigate('/cart')}
        />
    );
};

export default CartIcon;