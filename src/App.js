
import './App.css';
import Header from './components/header';
import Sidebar from './components/sidebar';

function App() {
  return (
    <div className="Crisp">
      <Header />
      <main className="CrispContent">
        <Sidebar />
        
      </main>
    </div>
  );
}

export default App;
