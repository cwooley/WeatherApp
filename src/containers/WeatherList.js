import React, {Component} from 'react'
import {connect} from 'react-redux'
import Chart from '../components/chart.js'

class WeatherList extends Component {

  mapWeatherToTableRows(){

    return this.props.weather.map((cityData, index) =>{
      const Ktemps = cityData.list.map(data => data.main.temp)
      const Ftemps = Ktemps.map(temp => temp * 9/5 - 459.67)
      const pressures = cityData.list.map(data => data.main.pressure)
      const humidity = cityData.list.map(data => data.main.humidity)

      return (<tr> key={index}>
                <td><h3>{cityData.city.name}</h3></td>
                <td><Chart data={Ftemps} color={'orange'} height={90} units="F"/></td>
                <td><Chart data={pressures} color={'green'} height={120} units="hPa"/></td>
                <td><Chart data={humidity} color={'blue'} height={120}units="%" /></td>
              </tr>)
    })
  }

  render(){
    return(
      <table className="table table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature (F)</th>
              <th>Pressure (hPa)</th>
              <th>Humidity (%)</th>
            </tr>
          </thead>
          <tbody>
            {this.mapWeatherToTableRows()}
          </tbody>
      </table>
    )
  }
}

function mapStateToProps(state){
  return {weather: state.weather}
}

export default connect(mapStateToProps)(WeatherList)
