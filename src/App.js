import './App.css';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <div className="grid">
        <Header />
        <Form />
        <Footer />
      </div>
    </div>
  );
}

export default App;
