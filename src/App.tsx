import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

const App = () => {
  let routes = (
    <Switch>
      <Route path="/" exact>
        <BurgerBuilder />
      </Route>
      <Route path="/auth">
        <Auth />
      </Route>
      <Route path="/logout">
        <Logout />
      </Route>
      <Route path="/checkout">
        <Checkout />
      </Route>
      <Route path="/orders">
        <Orders />
      </Route>
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
  return (
    <>
      <Layout>{routes}</Layout>
    </>
  );
};

export default App;
