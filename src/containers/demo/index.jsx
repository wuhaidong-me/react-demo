import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import _actions from './actions'
import classes from './index.module.scss'

class Demo extends React.Component {
  componentDidMount() {
   
  }

  render() {
    return (
      <div>
        <div className={classes.container}>
          Demo Page
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  let currentComponentState = state['Demo']
  return {
    info: currentComponentState.info,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchInfo: bindActionCreators(_actions.fetchInfo, dispatch),
  }
}

Demo = connect(mapStateToProps, mapDispatchToProps)(Demo)
export default Demo
