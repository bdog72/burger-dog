import React, { Component } from 'react'
import { Link } from 'react-router'

class Layout extends Component {

  static propTypes = {
    children: React.PropTypes.element.isRequired
  }

  render () {
    return <div className='layout'>
      <div className='images1'>
        <img src='http://www.foodportfolio.com/b/wp-content/uploads/2010/07/10910-GE-5-27-10-070313.jpg' height='100' width='150' />
        <h1>Burger Dog</h1>
        <img src='http://www.foodportfolio.com/b/wp-content/uploads/2010/07/10910-GE-5-27-10-070313.jpg' height='100' width='150' />
      </div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/menu'>Menu</Link>
          </li>
          <li>
            <Link to='/contact'>Contact Us</Link>
          </li>
          <li>
            <Link to='/locations'>Location</Link>
          </li>
        </ul>
      </nav>
      <main>
        {this.props.children}
      </main>
      <footer>
        <p>&copy: 2017 The Burger Dog</p>
      </footer>
    </div>
  }
}

export default Layout
