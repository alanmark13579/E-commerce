import CartForm from '../components/cart/CartForm.jsx';

export default function CartPage() {

    return (
            <div
            style={{
                minHeight: '100vh',
                width: '100vw',
                backgroundColor: '#030202',
                paddingTop: '40px',
                paddingBottom: '40px',
            }}
            >
            <div>
                <CartForm />
            </div>
        </div>
    );
}
