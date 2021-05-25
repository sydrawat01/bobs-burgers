import { Route, Switch, Redirect } from 'react-router-dom';

import { useAppSelector, items } from './store/hooks/rtkHooks';

import Layout from './hoc/Layout/Layout';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

const App = () => {
  const { ingredients } = useAppSelector(items);
  const valid =
    Object.keys(ingredients)
      .map((igKey) => ingredients[igKey])
      .reduce((acc, el) => acc + el, 0) !== 0;

  let routes = (
    <Switch>
      <Route path="/" exact>
        <BurgerBuilder />
      </Route>
      <Route path="/checkout">
        {valid && <Checkout />}
        {!valid && <Redirect to="/" />}
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
