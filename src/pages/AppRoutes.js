import { Redirect, Route, Switch } from 'react-router-dom'
import ProductDetail from './ProductDetail'
import Products from './Products'
import Welcome from './Welcome'

const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/welcome" />
      </Route>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products" exact>
        <Products />
      </Route>
      <Route path="/products/:productId">
        <ProductDetail />
      </Route>
    </Switch>
  )
}

export default AppRoutes
