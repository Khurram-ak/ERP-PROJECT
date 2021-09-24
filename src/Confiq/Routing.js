import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "../Screens/Home/Home";
import CategoriesPage from "../Screens/CategoriesPage/";

export default function Routing() {
  return (
    <Router>
        <Switch>
          <Route exact path="">
                <Home />
          </Route>
          <Route path="/categoriesPages">
              <CategoriesPage  />
          </Route>
        </Switch>
    </Router>   
    )
}
