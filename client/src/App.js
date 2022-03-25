import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EditAuthor from './views/EditAuthor';
import Main from './views/Main';
import NewAuthor from './views/NewAuthor';

function App() {
  return (
    <BrowserRouter>
      <Container className='my-3'>
        <h1>Favorite Authors</h1>
        <Switch>
          <Route exact path={'/'}>
            <Main />
          </Route>
          <Route path={'/new'}>
            <NewAuthor />
          </Route>
          <Route path={'/edit/:id'}>
            <EditAuthor />
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
