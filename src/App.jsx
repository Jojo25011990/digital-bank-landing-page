import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Disclaimer from './components/Disclaimer';

function App() {
  return (
    <div className="container">
      <Disclaimer />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
