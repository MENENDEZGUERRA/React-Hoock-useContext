import { ThemeProvider } from './context/ThemeContext';
import ThemeDisplay from './components/ThemeDisplay';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <h1>Cambiador de Tema 🌞🌚</h1>
        <img src='https://web.archive.org/web/20091027154758/http://www.geocities.com/jacquelinehowett/sunblk.gif' alt='sol'></img>
        <img src='https://web.archive.org/web/20090831163129/http://geocities.com/joerileyus/GIF/manmoon.gif' alt='luna'></img>
        <ThemeDisplay />
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;