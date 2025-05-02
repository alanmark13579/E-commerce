import CartIcon from '../components/common/CartIcon';

const MainLayout = ({ children }) => {
    return (
        <div>
            <header style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
                <CartIcon />
            </header>
            <main>{children}</main>
        </div>
    );
};

export default MainLayout;