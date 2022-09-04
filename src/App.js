import './App.css';
import Navigation from "./components/Navigation";
import HomePage from "./views/HomePage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
        <Navigation/>
        <HomePage/>
        <Footer/>
    </div>
  );
}

export default App;
