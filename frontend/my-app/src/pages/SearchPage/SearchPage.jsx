import SearchForm from '../../components/search/SearchForm';

export default function SearchPage() {
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
                <SearchForm/>
            </div>
        </div>
    );
}
