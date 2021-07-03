import logo from './logo.svg';
import './App.css';
import Basic1 from './components/Basic1';
import Basic3 from './components/Basic3';
import AppContext from './contexts/AppContext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppContext.Provider value={'from app_context'}>
          <Basic3 />
        </AppContext.Provider>
      </header>
    </div>
  );
}

export default App;
