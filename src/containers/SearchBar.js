import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index.js'

class SearchBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      term: ''
    }
  }

  onInputChanged = (event) => {
    this.setState({
      term: event.target.value
    })
  }

  searchBtnClicked = (event) => {
    event.preventDefault()
    this.props.fetchWeather(this.state.term);
    this.setState({
      term: ''
    })
  }


  render () {
    return (
      <form className="input-group" onSubmit={this.searchBtnClicked}>
        <input type="text" value={this.state.term} className="form-control" onChange={this.onInputChanged} placeholder="5 day forcast for your favorite cities"/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-primary">Search</button>
        </span>
      </form>
    )
  }


}


function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)
