import CartIcon from '../components/common/CartIcon'
import { Link } from 'react-router-dom'

const MainLayout = ({ children }) => {
    return (
        <div>
            <header style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '10px', gap: '12px' }}>
                <Link to="/login" style={{ textDecoration: 'none', color: 'white', padding: '6px 12px', border: '1px solid white', borderRadius: '4px' }}>
                    Login
                </Link>
                <Link to="/register" style={{ textDecoration: 'none', color: 'white', padding: '6px 12px', border: '1px solid white', borderRadius: '4px' }}>
                    Register
                </Link>
                <CartIcon />
            </header>
            <main>{children}</main>
        </div>
    )
}

export default MainLayout