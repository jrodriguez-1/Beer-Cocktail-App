import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage'
import './index.css';
import Register from './components/Register';
import Login from './components/Login'
import Logout from './components/Logout'
import BeerListPage from './pages/BeerListPage';
import CocktailListPage from './pages/CocktailListPage';
import FavoritesPage from './pages/FavoritesPage';
import BeerDetail from './pages/BeerDetail'
import CocktailDetail from './pages/CocktailDetail'

function App() {   
  
  return (
    <div className="App">
      
      <React.Fragment> 
          <Router>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/beer" component={BeerListPage} /> 
              <Route path="/beerdetail/:id" component={BeerDetail} /> 
              <Route path= "/cocktails" component={CocktailListPage} /> 
              <Route path="/cocktaildetail/:id" component={CocktailDetail} /> 
              <Route path="/register" component={Register} />
				      <Route path="/login" component={Login} />
              <Route path="/logout" component={Logout} />
              <Route path="/favorites" component={FavoritesPage} />
            </Switch>
          </Router> 
      </React.Fragment>
    </div>
    )
  }  

export default App;


