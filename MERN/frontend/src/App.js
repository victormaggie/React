import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import {Container} from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';


// import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <Router>
    <div>
        <Header />
        <main className="py-3">
        <Container>
          <Route exact path='/' component={HomeScreen} />
          <Route path='/product/:id' component={ProductScreen} />
        </Container>
      </main>
        <Footer/>
    </div>
    </Router>
  )
}

export default App;