/*
IngFormSearchBar
Allows users to search

Is used in the following files:
  ../components/RecipesContainer.js
*/

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Input } from 'react-materialize'

class IngFormSearchBar extends PureComponent {

  render() {
    return (
      <div>
        <Input
          ref={search => this.search = search}
          label="Search Database..."
          type="search"
          onChange={this.props.handleChangeQuery}
        />
      </div>
    ) // end of return
  } // end of render()

} // end of ingFormSearchBar

export default connect(null)(IngFormSearchBar)
