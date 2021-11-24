
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Routes} from "react-router";
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Navigation from './Pages/Shared/Navigation/Navigation';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Treatments from './Pages/Services/Treatments/Treatments';
import Fall from './Pages/Services/Fall/Fall';
import Winter from './Pages/Services/Winter/Winter';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Routes>
          <Route path='/'element={<Home/>} />
          <Route path='/home'element={<Home/>} />
          <Route path='/treatments'element={<Treatments/>} />
          <Route path='/fall'element={<Fall/>} />
          <Route path='/winter'element={<Winter/>} />
          <Route path='/about'element={<About/>} />
          <Route path='/contact'element={<Contact/>} />

          <Route path='*'element={<NotFound/>} />
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
