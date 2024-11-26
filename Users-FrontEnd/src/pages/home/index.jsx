import { useState } from 'react'
import './style.css'
import Garbage from '../../assets/garbage.svg'

function Home() {
  return(
    <div className='container'>

      <form action="">
        <h1>Register Users</h1>
        <input placeholder='name' type="text" name='name'/>
        <input placeholder='email' type="email" name='email' />
        <input placeholder='age' type="number" name="age"/>
        <button type='submit'>Register</button>
      </form>

    

      <div className='card'>
        <div>
          <p> <span></span></p>
          <p> <span></span></p>
          <p> <span></span></p>
        </div>
        <button><img src={Garbage} /></button>
      </div>

    </div>
  )
}

export default Home
