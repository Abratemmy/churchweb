import React from 'react';

import './App.css';
import Navigation from './pages/navigation';
import Router from './pages/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer';

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faCheckSquare, faCoffee, faClock } from '@fortawesome/free-solid-svg-icons';
// import { faFacebookF } from '@fortawesome/free-brands-svg-icons' 

// library.add(faFacebookF); 

// library.add( faCheckSquare, faCoffee, faClock )

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Router />
      <Footer />
    </div>
  );
}

export default App;
