import LoginForm from '../components/login/LoginForm';

export default function LoginPage() {
  return (
      <div
          style={{
              height: '100vh',
              width: '100vw',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#1a1a1a',
          }}>
          <div>
              <LoginForm/>
          </div>
      </div>
  );
}
