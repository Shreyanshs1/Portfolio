import './App.css';
import Main from './Components/Main';
import ReactGA from 'react-ga4';
import { useEffect } from 'react';
    
ReactGA.initialize('G-1R39Z7358Q');

function App() {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (
    <>
    <Main/>
    </>
  );
}

export default App;
