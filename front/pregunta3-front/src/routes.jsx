import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom"
import { Busqueda } from "./componentes/busqueda/busqueda"
import { Footer } from "./componentes/footer/footer"
import { Login } from "./componentes/login/login"
export const Routes = () => (
  <Router>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/busqueda" component={Busqueda} />
      <Route render={() => <Footer />} />
    </Switch>
  </Router>
)
