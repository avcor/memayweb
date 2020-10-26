import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import MainTile from './MainTile';
import { Route, BrowserRouter as Router} from 'react-router-dom';
import PrivacyPolicy from './PrivacyPolicy';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/privacy-policy" component={PrivacyPolicy} />
      </Router>
    </div>
  );
}

function HomePage() {
  return (
      <MainTile />
  )
}

export default App;
