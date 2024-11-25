import React from 'react';
import './styles/App.css';
import Header from './components/header/header';
import Search from './components/search/search';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Footer />
    </div>
  );
}

export default App;
