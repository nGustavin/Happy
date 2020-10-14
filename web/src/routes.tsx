import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Landing from './pages/Landing'
import OrphanagesMap from './pages/OrphanagesMap'
import Orphanage from './pages/Orphanage'
import CreateOrphanage from './pages/CreateOrphanage'


function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing}/>
        <Route path="/app" component={OrphanagesMap}/>

        <Route path="/orphanages/create" exact component={CreateOrphanage}/>
        <Route path="/orphanages/:id" component={Orphanage}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;