import {
  BrowserRouter as Router,
  Route,
  StaticRouter,
  Switch,
} from 'react-router-dom';

//components
import Layout from './components/Layout';
import About from './containers/About';
import Contact from './containers/Contact';
import Listings from './containers/Listings';
import ListingDetails from './containers/ListingDetail';
import Login from './containers/Login';
import SignUp from './containers/SignUp';
import Home from './containers/Home';
import NotFound from './components/NotFound';
import PrivateRoute from './components/PrivateRoute';
import MyHome from './containers/MyHome';
import './sass/main.scss';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MyHome} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <PrivateRoute exact path="/listings" component={Listings} />
        <PrivateRoute exact path="/listings/:id" component={ListingDetails} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
