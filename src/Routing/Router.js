import React from 'react'
import Login from "../component/Login";
import Dashboard from "../component/Dashboard";
import {
    Switch,
    Route,
} from "react-router-dom";
const Router = () => {
    return (
        <div>
            <Switch>
                <Route path="/Dashboard" exact>
                    <Dashboard />
                </Route>
                <Route path="/">
                    <Login />
                </Route>
            </Switch>
        </div>
    )
}

export default Router
