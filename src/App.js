import './App.css';
import { MainRouter } from './routes/MainRoutes';
import { WeatherProvider } from './contexts/WeatherProvider';

function App() {
  return (
    <>
      <WeatherProvider>
        <MainRouter />
      </WeatherProvider>
    </>
  );
}

export default App;
