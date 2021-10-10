import "../src/style/App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Product from "./Product";
import Services from "./Services";
import Portfolio from "./Portfolio"
import Details from "./Details";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header"
function App  () {
  return (
    <div className="App">
      <Header/>
      
      <Router>
        <Navbar />
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/about us" exact component={AboutUs} />
          <Route path="/product" exact component={Product} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/details" exact component={Details} />
          <Route path="/services" exact component={Services} />
        </Switch>
        </Router>
    
      
      <Footer/>
    </div>
  );
}

export default App;
