import { useTheme } from '../context/ThemeContext';

const ThemeDisplay = () => {
  const { theme } = useTheme();
  
  const themeStyles = {
    backgroundColor: theme === 'dia' ? '#fff' : '#333',
    color: theme === 'dia' ? '#333' : '#fff',
    padding: '20px',
    margin: '20px 0',
    borderRadius: '8px',
    transition: 'all 0.3s ease'
  };

  return (
    <div style={themeStyles}>
      Modo: {theme.toUpperCase()}
    </div>
  );
};

export default ThemeDisplay;