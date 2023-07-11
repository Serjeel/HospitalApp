import Header from './components/Header/Header';
import Prewiev from './components/Prewiev/Prewiev';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';
import './App.scss';

function App() {
  return (
    <div className="main">
      <Header />
      <Prewiev />
      <Products />
      <Footer />
    </div>
  );
}

export default App;