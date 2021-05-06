import React from 'react';
//Let's import our Pages
import AboutUs from './pages/AboutUs';
//Let's import our global css style
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <Nav />
      <GlobalStyle />
      <AboutUs />
    </div>
  );
}

export default App;
