import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';

const App = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default App;
