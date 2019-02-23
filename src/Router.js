import React from 'react'
import { BrowserRouter as Router,Route,Switch,Redirect } from 'react-router-dom'
import App from './App'
import A from './pages/index'
import B from './pages/MenuCenter'
import C from './pages/AccSupermarket'
import D from './pages/PurOrder'
import E from './pages/DeliveryAcce'
import Parameter from './pages/Parameter'
import Setting from './pages/Setting'
import BaseView from './pages/acount/BaseView'
import BasicConfig from './pages/acount/basicConfig'
import SecurityView from './pages/acount/SecurityView'
import Dosing from './pages/acount/Dosing'
import Supply from './pages/acount/Supply'
import CreateTemplate from './pages/CreateTemplate'
import Details from './pages/Details'
import Test from './pages/Test'



class IRouter extends React.Component {
  render() {
    return (
      <Router>
            <Route path='/'  render={()=> 
                <App>
                  <Switch>
                      <Route path="/home"  component={A} />
                      <Route path="/menubar" component={B} />
                      <Route path='/createtemplate' component={CreateTemplate} />
                      <Route path='/details' component={Details} />
                      <Route path="/supermarket" component={C}></Route>
                      <Route path="/order" component={D}></Route>
                      <Route path="/delivery" component={E}></Route>
                      <Route path="/parameter" component={Parameter}></Route>
                      <Route path="/Setting" render={()=>
                        <Setting>
                          <Switch>
                            <Route path="/Setting/imformation" component={BaseView}></Route>
                            <Route path="/Setting/set" component={BasicConfig}></Route>
                            <Route path="/Setting/security" component={SecurityView}></Route>
                            <Route path="/Setting/supply" component={Supply}></Route>
                            <Route path="/Setting/cuisine" component={Dosing}></Route>
                            <Redirect to="/Setting/imformation" />
                          </Switch>
                        </Setting>
                      }></Route>
                      <Route path='/test' component={Test}></Route>
                      <Redirect to="/home" />
                  </Switch>
                </App>
            } />
      </Router>
    ) 
  }
}

export default IRouter