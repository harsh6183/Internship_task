import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HomeSection';
import SignUpForm from './components/SignUpForm';
import UserCards from './components/UserCard';
import WelcomeLoader from './components/WelcomeLoader';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [users, setUsers] = useState([
    { id: 1, name: 'Soham Mahajan', email: 'soham@example.com' },
    { id: 2, name: 'Yash Roy', email: 'yash@example.com' },
    { id: 3, name: 'Raj Desai', email: 'raj@example.com' }
  ]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);
  const handleUserAdd = (user) => setUsers(prev => [...prev, user]);

  useEffect(() => {
    const link1 = document.createElement('link');
    link1.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300..900&display=swap';
    link1.rel = 'stylesheet';
    document.head.appendChild(link1);

    const link2 = document.createElement('link');
    link2.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300..900&display=swap';
    link2.rel = 'stylesheet';
    document.head.appendChild(link2);

    const style = document.createElement('style');
    style.textContent = `
      .animate-fade-in-up {
        animation: fadeInUp 1s ease-out;
      }
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }
      body { font-family: 'Inter', sans-serif; }
      h1, h2, h3, h4, h5, h6 { font-family: 'Poppins', sans-serif; }
      html { scroll-behavior: smooth; }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(link1);
      document.head.removeChild(link2);
      document.head.removeChild(style);
    };
  }, []);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <WelcomeLoader />;

  return (
    <div className={`${darkMode ? 'bg-gray-900' : 'bg-white'} min-h-screen`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <HeroSection darkMode={darkMode} />
      <SignUpForm darkMode={darkMode} onUserAdd={handleUserAdd} />
      <UserCards darkMode={darkMode} users={users} />
    </div>
  );
};

export default App;
