import React, { Component } from 'react'
import Billing from "./components/Billing"
import { BrowserRouter as Router, Route} from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div>
      <Router>
      <div>      
          <Route exact path="/" component={Billing} />
      </div>
      </Router>
      </div>
    )
  }
}