import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Cambiar Modo 
    </button>
  );
};

export default ThemeToggle;