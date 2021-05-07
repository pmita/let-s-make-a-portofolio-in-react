import React from 'react';
//Let's import our Pages
import AboutUs from './pages/AboutUs';
//Let's import our global css style
import GlobalStyle from './components/GlobalStyle';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import Nav from './components/Nav';
import MovieDetail from './pages/MovieDetail';
//Router
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <GlobalStyle />

      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>

        <Route path="/work" exact>
          <OurWork />
        </Route>

        <Route path="/work/:id">
          <MovieDetail />
        </Route>

        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
      
      
      
    </div>
  );
}

export default App;
