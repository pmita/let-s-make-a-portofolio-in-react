import React from 'react';
//Let's import our Pages
import AboutUs from './pages/AboutUs';
//Let's import our global css style
import GlobalStyle from './components/GlobalStyle';

function App() {
  return (
    <div className="App">
      <h1>Film</h1>
      <GlobalStyle />
      <AboutUs />
    </div>
  );
}

export default App;
