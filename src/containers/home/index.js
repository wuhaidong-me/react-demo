import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import _actions from './actions'
import './index.scss'

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
     
    }
  }
  componentDidMount() {

  }

  updateState = () => {
    let {
      setProps,
    } = this.props
    setProps()
  }
  render() {
    let {
      reduxState
    } = this.props

    return (
      <div className="home-container">
        <div>Home Page</div>
        <br/>
        <br/>
        
        <div>{reduxState}</div>
        <input type="button" onClick={this.updateState} value="onClick to update state"></input>
        <div className="scss-test" >1111</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  let currentComponentState = state['Home']
  return {
    info: currentComponentState.info,
    reduxState: currentComponentState.reduxState,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchInfo: bindActionCreators(_actions.fetchInfo, dispatch),
    setProps: bindActionCreators(_actions.setProps, dispatch),
  }
}

Home = connect(mapStateToProps, mapDispatchToProps)(Home)
export default Home
