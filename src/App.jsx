import './App.css';
import BrowserRouterContainer from './containers/BrowserRouterContainer/BrowserRouterContainer';
import ContextProvider from './Context/ContextProvider';

function App() {

  return (
    <ContextProvider>
       <BrowserRouterContainer />
    </ContextProvider>
  );
}



export default App;