import ProductForm from '../components/product/ProductForm';
import { useParams, useLocation } from 'react-router-dom';

export default function ProductPage() {
    const { id } = useParams();
    const location = useLocation();

    return (
        <div
            style={{
                minHeight: '100vh',
                width: '100vw',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#1a1a1a',
            }}>
            <div>
                <ProductForm productId={id} product={location.state} />
            </div>
        </div>
    );
}
