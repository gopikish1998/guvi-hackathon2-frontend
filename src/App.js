import './App.css';
import Register from './Register';
import Login from './Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home';
import Loginadmin from './Loginadmin';
import Registeradmin from './Registeradmin';
import Admin from './Admin';
import User from './User';
import Addtheatre from './Addtheatre';
import Addmovie from './Addmovie';
import Theatre from './Theatre';
import Bookshow from './Bookshow';
import Viewbooks from './Viewbooks';

function App() {
  return (

    <div>
      <Router>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
         <a class="navbar-brand" href="#">Movie Booking</a>
         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
         </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
             <Link class="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/login-user">User</Link>
          </li>
          <li class="nav-item">
           <Link class="nav-link" to="/login-admin">Admin</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        <Switch>
          <Route path="/" component={Home} exact="true"/>
          <Route path="/admin" component={Admin} exact="true"/>
          <Route path="/user" component={User} exact="true"/>
          <Route path="/addtheatre" component={Addtheatre} exact="true"/>
          <Route path="/addmovie" component={Addmovie} exact="true"/>
          <Route path="/bookshow" component={Bookshow} exact="true"/>
          <Route path="/viewbooks" component={Viewbooks} exact="true"/>
          <Route path="/theatre/:id" component={Theatre} exact="true"/>
          <Route path="/login-user" component={Login} exact="true"/>
          <Route path="/register-user" component={Register} exact="true"/>
          <Route path="/login-admin" component={Loginadmin} exact="true"/>
          <Route path="/register-admin" component={Registeradmin} exact="true"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
