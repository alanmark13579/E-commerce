import RegisterForm from '../components/register/RegisterForm';

export default function RegisterPage() {
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
              <RegisterForm/>
          </div>
      </div>
  );
}
