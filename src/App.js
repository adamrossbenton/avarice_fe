// DEPENDENCIES
import React from "react"
import {Route, Switch} from "react-router-dom"

// STYLES
import './App.css'; // This will probably get removed in favor of bootstrap, etc.
import "./styles.css"

// COMPONENTS
import Main from "./components/Main"
import Header from "./components/Header"
import Footer from "./components/Footer"

// PAGES
import Index from "./pages/Index"
import Create from "./pages/Create"
import Show from "./pages/Show"
import Edit from "./pages/Edit"
import Login from "./pages/Login"

// HOOKS
import SwordsHooks from "./hooks/SwordsHooks"
import AdminHooks from "./hooks/AdminHooks"
import RenderHooks from "./hooks/RenderHooks"

function App(props) {
  // HOOKS
  const {swords, getSwords, createSwords, updateSwords, deleteSwords} = SwordsHooks()
  const {token, handleChange, handleLogin} = AdminHooks()
  const {loading, renderPage} = RenderHooks()

  // ROUTES
  return (
    <div className="App">
      <Header token={token}/>
      <Switch>
        {/* HOME ROUTE */}
        <Route exact
          path="/"
          render={(routerProps) => <Main {...routerProps}
            token={token}
            renderPage={renderPage}
          />}
        />
        {/* ADMIN */}
        <Route 
          path="/login"
          render={(routerProps) => <Login {...routerProps}
            handleChange={handleChange}
            handleLogin={handleLogin}
          />}
        />
        {/* CREATE */}
        <Route 
          path="/swords/new"
          render={(routerProps) => <Create {...routerProps}
          token={token}
          renderPage={renderPage}
          createSwords={createSwords}
          />}
        />
        {/* EDIT */}
        <Route 
          path="/swords/:id/edit"
          render={(routerProps) => <Edit {...routerProps}
            token={token}  
            swords={swords}
            loading={loading}
            renderPage={renderPage}
            getSwords={getSwords}
            updateSwords={updateSwords}
          />}
        />
        {/* SHOW */}
        <Route 
          path="/swords/:id"
          render={(routerProps) => <Show {...routerProps}
            token={token}
            swords={swords}
            loading={loading}
            renderPage={renderPage}
            getSwords={getSwords}
            deleteSwords={deleteSwords}
          />}
        />
        {/* INDEX */}
        <Route 
          path="/swords"
          render={(routerProps) => <Index {...routerProps}
            token={token}
            swords={swords}
            loading={loading}
            renderPage={renderPage}
            getSwords={getSwords}
          />}
        />
      </Switch>
      <Footer />
</div>
  );
}

export default App;
