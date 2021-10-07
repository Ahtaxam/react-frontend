import logo from './logo.svg';
import './App.css';
import Todo from './component/Todo';
import Header from './component/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Todoid from './component/Todoid';
import Add from './component/Add';
function App() {
  return (
    <div className="App">
      
      <Router>
        <Header></Header>
        <Switch>

          <Route path = "/" exact >
            <Todo></Todo>
          </Route>

          <Route path = "/to/:id" > 
            <Todoid></Todoid>
          </Route>

          <Route path = "/add" > 
            <Add></Add>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
