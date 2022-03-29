import Home from './routes/Home';
import Description from './routes/Description';
import MovieSection from './routes/MovieSection';
import Navbar from './routes/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/movie/:id'>
          <Description />
        </Route>
        <Route path='/movie'>
          <MovieSection />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
