import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//COMPONENTS
import NavBar from './components/NavBar/NavBar.js';

//VIEWS
import Home from './views/Home/Home.js';
import ItemDetailContainer from './views/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/detail/:id' exact component={ItemDetailContainer}></Route>
          <Route path='/category/:categoryName' exact component={ItemListContainer}></Route>
          <Route path='*'> <h1>404</h1></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
