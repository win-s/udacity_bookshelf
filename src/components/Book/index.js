import React, { Component } from 'react'

import './Book.css'

// import bookCover from './bookCover'
// import bookMenu from './bookMenu'
// import bookDesc from './bookeDesc'

class Book extends Component {
  constructor( props ){
    super(props)
  }

  render(){
    return (
      <div className="book">
        {/* <bookCover />
        <bookDesc />
        <bookMenu /> */}
      </div>
    )
  }
}

export default Book