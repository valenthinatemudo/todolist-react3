import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Autora from '../pages/Autora/Autora'
import ListPage from '../pages/ListPage'

function Rotas () {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Autora}/>
            <Route path='/lista' component={ListPage}/>
        </Switch>
        
        </BrowserRouter>
    )
}

export default Rotas