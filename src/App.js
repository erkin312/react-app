import { Route, Switch } from 'react-router-dom';
import MainNavigation from './components/layout/MainNavigation';
import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';

const App = () => {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route exact path="/">
          <AllMeetupsPage />
        </Route>
        <Route exact path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route exact path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
