import React, { Component } from 'react'
import { Link } from 'react-router'
import data from '../data.json'

class Locations extends Component {

  render () {
    return <div>
      <h2>Our locations</h2>
      {data.locations.map((location, i) => {
        return <h3><Link to={`/locations/${location.slug}`}>{location.name}</Link></h3>
      })}
    </div>
  }
}
export default Locations
