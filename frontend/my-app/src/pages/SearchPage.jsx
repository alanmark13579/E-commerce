import SearchForm from '../components/search/SearchForm';
import MainLayout from '../layouts/mainLayout';

export default function SearchPage() {
    return (
        <div
            style={{
                minHeight: '100vh',
                width: '100vw',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#ffffff',
            }}>
            <MainLayout>
                <SearchForm/>
            </MainLayout>
        </div>
    );
}
