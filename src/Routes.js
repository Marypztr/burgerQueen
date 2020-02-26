import React from 'react'
import { Switch, Route } from "react-router-dom"
import Home from "../src/Components/Home"
import MenuSelect from "../src/Components/MenuSelect"
import Menu from "../src/Components/Menu"
import Tables from "../src/Components/Tables"

const Routes = () => (
    <Switch>
        <Route exact path={"/"} component={Home}/>
        <Route exact path={"/menu-select"} component={MenuSelect}/>
        <Route exact path={"/menu"} component={Menu} />
        <Route exact path={"/tables"} component={Tables} />
    </Switch>
)


export default Routes