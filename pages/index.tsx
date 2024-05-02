// pages/index.tsx
import Link from 'next/link';


const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Bienvenido a la aplicación</h1>
      <Link href="/register">
        <a>Registrarse</a>
      </Link>
      <br />
      <Link href="/login">
        <a>Iniciar sesión</a>
      </Link>
    </div>
  );
};

export default HomePage;
