// DEPENDENCIES
import React, {useState, useEffect} from "react"
import {Route, Switch} from "react-router-dom"

// STYLES
import './App.css'; // This will probably get removed in favor of bootstrap, etc.

// COMPONENTS
import Main from "./components/Main"
import Header from "./components/Header"
import Footer from "./components/Footer"

import Index from "./pages/Index"
import Create from "./pages/Create"
import Show from "./pages/Show"
import Edit from "./pages/Edit"

// PAGES

// HOOKS

function App(props) {
  return (
    <div className="App">
      <Header />
      <Switch>
        {/* HOME ROUTE */}
        <Route exact
          path="/"
          render={(routerProps) => <Main {...routerProps}
            // props/hooks go here
          />}
        />
        <Route 
          path="/swords/new"
          render={(routerProps) => <Create {...routerProps}
            // props/hooks go here
          />}
        />
        <Route 
          path="/swords/:id/edit"
          render={(routerProps) => <Edit {...routerProps}
            // props/hooks go here
          />}
        />
        <Route 
          path="/swords/:id"
          render={(routerProps) => <Show {...routerProps}
            // props/hooks go here
          />}
        />
        <Route 
          path="/swords"
          render={(routerProps) => <Index {...routerProps}
            // props/hooks go here
          />}
        />
      </Switch>
      <Footer />
</div>
  );
}

export default App;
