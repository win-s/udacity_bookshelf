import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Book from './components/Book'

import * as BookAPI from './bookAPI'
class App extends Component {

  rs = []
  
  componentWillMount(){
    BookAPI.getAll().then(rs=>this.rs = rs )
  }

  render() {
    
    
    return (
      // <div className="App">
      //   <div className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h2>Welcome to React</h2>
      //   </div>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>

      <content>
        books <br/>
        {this.rs}
        <div className="row">
          <div className="col">

          </div>
        </div>
      </content>
    )
  }
}

export default App;
