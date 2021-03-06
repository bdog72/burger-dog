import React, { Component } from 'react'

class Contact extends Component {

  render () {
    return <div className='contact'>
      <h2>Contact Us</h2>

      <form>
        <p>
          <label htmlFor='fullName'>Name</label>
          <input name='fullName' type='text' required />
        </p>
        <p>
          <label htmlFor='email'>Email</label>
          <input name='email' type='email' required />
        </p>
        <p>
          <label htmlFor='message'>Message</label>
          <textarea cols='30' rows='10' />
        </p>
        <p>
          <button type='submit'>Submit</button>
        </p>
      </form>

      <p className='bdog1'>
        You can also email us at
        <a href='mailto:hello@majestic.th'>Brian@BurgerDog.com</a>.
      </p>
    </div>
  }
}

export default Contact
