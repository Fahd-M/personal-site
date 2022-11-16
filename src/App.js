
import './styles/App.scss';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Experience from "./pages/Experience/Experience";
import Education from "./pages/Education/Education";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Hero from './components/Hero/Hero';

function App() {
  return (
    <BrowserRouter>  
      <Header />
      <Hero />
      <Switch>
        <Redirect from="/home" to="/" />
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/experience" component={Experience}/>
        <Route path="/education" component={Education}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/404" component={NotFound} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />


    </BrowserRouter>
  );
}

export default App;
