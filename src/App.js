import { Route, Switch } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <AllMeetupsPage />{' '}
        </Route>
        <Route path="new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
