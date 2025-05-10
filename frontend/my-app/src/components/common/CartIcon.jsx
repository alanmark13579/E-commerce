import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import cartIcon from '../../assets/cart.svg'

const CartIcon = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        const token = Cookies.get('access_token')
        if (!token) {
            alert('Please log in to view the shopping cart')
            navigate('/login')
            return
        }

        navigate('/cart')
    }

    return (
        <img
            src={cartIcon}
            alt="Cart"
            style={{ cursor: 'pointer', width: '24px', height: '24px' }}
            onClick={handleClick}
        />
    )
}

export default CartIcon
