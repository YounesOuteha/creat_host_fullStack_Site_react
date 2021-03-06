import React from 'react'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ArticlePage from './pages/ArticlePage'
import ArticlesList from './pages/ArticlesList'

function App() {
  return (
    
      <Router>
          <div className="App">
            <div id="page-body">
              <Route path="/" component={HomePage} exact/>
              <Route path="/about" component={AboutPage} />
              <Route path="/article" component={ArticlePage} />
              <Route path="/articles-list" component={ArticlesList} />
            </div>
          </div>
      </Router>
      
    
  );
}

export default App;
